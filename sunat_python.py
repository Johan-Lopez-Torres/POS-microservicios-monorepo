import base64
import xml.etree.ElementTree as ET
from zeep import Client
from zeep.wsse.username import UsernameToken
import io
import zipfile
import time
import datetime

class Facturacion:
    def __init__(self, ruc_emisor, numero_factura, fecha_emision, total_venta):
        self.ruc_emisor = ruc_emisor
        self.numero_factura = numero_factura
        self.fecha_emision = fecha_emision
        self.total_venta = total_venta

class SunatSoapClient:
    WSDL_URL = "https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService?wsdl"
                
    def __init__(self, ruc):
        self.username = f"{ruc}MODDATOS"
        self.password = "moddatoos"

    def enviar_factura(self, factura):
        try:
            client = Client(self.WSDL_URL, wsse=UsernameToken(self.username, self.password))

            xml_factura = self.generar_xml_factura(factura)
            zip_factura = self.crear_zip(f"{factura.numero_factura}.xml", xml_factura)
            file_name = f"{factura.ruc_emisor}-01-{factura.numero_factura}.zip"

            response = client.service.sendBill(
                fileName=file_name,
                contentFile=base64.b64encode(zip_factura).decode('utf-8')
            )

            print("Respuesta de SUNAT:", response)
        except Exception as e:
            print(f"Error al enviar factura: {e}")

    def generar_xml_factura(self, factura):
        root = ET.Element("Invoice", xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2")
        ET.SubElement(root, "ID").text = factura.numero_factura
        ET.SubElement(root, "IssueDate").text = factura.fecha_emision.strftime("%Y-%m-%d")
        supplier_party = ET.SubElement(root, "AccountingSupplierParty")
        party = ET.SubElement(supplier_party, "Party")
        party_identification = ET.SubElement(party, "PartyIdentification")
        ET.SubElement(party_identification, "ID", schemeID="6").text = factura.ruc_emisor
        legal_monetary_total = ET.SubElement(root, "LegalMonetaryTotal")
        ET.SubElement(legal_monetary_total, "PayableAmount", currencyID="PEN").text = str(factura.total_venta)

        return ET.tostring(root, encoding="UTF-8", xml_declaration=True)

    def crear_zip(self, nombre_archivo, contenido):
        zip_buffer = io.BytesIO()
        with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
            zip_file.writestr(nombre_archivo, contenido)
        return zip_buffer.getvalue()

# Ejemplo de uso
if __name__ == "__main__":
    factura = Facturacion(
        ruc_emisor="10725352641",
        numero_factura="F001-00000001",
        fecha_emision="20240921",
        total_venta=8.00
    )

    client = SunatSoapClient(ruc="10725352641")
    client.enviar_factura(factura)
