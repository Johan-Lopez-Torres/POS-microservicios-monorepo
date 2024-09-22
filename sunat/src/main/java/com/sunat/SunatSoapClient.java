package com.sunat;

import com.model.Facturacion;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import javax.xml.namespace.QName;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.ws.Service;
import java.io.StringWriter;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Base64;

import java.io.ByteArrayOutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;


public class SunatSoapClient {
    private static final String WSDL_URL = "https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService?wsdl";
    private static final String NAMESPACE_URI = "http://service.gem.factura.comppago.registro.servicio.sunat.gob.pe/";

    private static final String SERVICE_NAME = "billService";


    public void enviarFactura(Facturacion factura) {
        try {
            URL url = new URL(WSDL_URL);
            QName qname = new QName(NAMESPACE_URI, SERVICE_NAME);
            Service service = Service.create(url, qname);

            BillService port = service.getPort(BillService.class);

            String xmlFactura = convertirFacturaAXml(factura);
            byte[] zipFactura = crearZip(factura.getNumeroFactura() + ".xml", xmlFactura);
            String fileName = factura.getRucEmisor() + "-01-" + factura.getNumeroFactura() + ".zip";

            String respuesta = port.sendBill(fileName, zipFactura);

            System.out.println("Respuesta de SUNAT: " + respuesta);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    private String convertirFacturaAXml(Facturacion factura) throws Exception {
        DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder docBuilder = docFactory.newDocumentBuilder();

        // Crear el documento XML
        Document doc = docBuilder.newDocument();

        // Elemento raíz: Envelope
        Element envelopeElement = doc.createElementNS("http://schemas.xmlsoap.org/soap/envelope/", "soapenv:Envelope");
        doc.appendChild(envelopeElement);

        // Agregar namespace para wsse
        envelopeElement.setAttribute("xmlns:wsse", "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd");
        envelopeElement.setAttribute("xmlns:ser", "http://service.sunat.gob.pe");

        // Crear Header
        Element headerElement = doc.createElementNS("http://schemas.xmlsoap.org/soap/envelope/", "soapenv:Header");
        envelopeElement.appendChild(headerElement);

        // Agregar Security al Header
        Element securityElement = doc.createElementNS("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "wsse:Security");
        headerElement.appendChild(securityElement);

        // Agregar UsernameToken
        Element usernameTokenElement = doc.createElementNS("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "wsse:UsernameToken");
        securityElement.appendChild(usernameTokenElement);

        // Agregar Username
        Element usernameElement = doc.createElementNS("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "wsse:Username");
        usernameElement.setTextContent("10725352641MODDATOS"); // Reemplaza con tus credenciales reales
        usernameTokenElement.appendChild(usernameElement);

        // Agregar Password
        Element passwordElement = doc.createElementNS("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "wsse:Password");
        passwordElement.setTextContent("MODDATOS"); // Reemplaza con tu contraseña real
        usernameTokenElement.appendChild(passwordElement);

        // Crear Body
        Element bodyElement = doc.createElementNS("http://schemas.xmlsoap.org/soap/envelope/", "soapenv:Body");
        envelopeElement.appendChild(bodyElement);

        // Agregar sendBill al Body
        Element sendBillElement = doc.createElementNS("http://service.sunat.gob.pe", "ser:sendBill");
        bodyElement.appendChild(sendBillElement);

        // Agregar fileName
        Element fileNameElement = doc.createElement("fileName");
        fileNameElement.setTextContent(factura.getRucEmisor() + "-01-" + factura.getNumeroFactura() + ".zip");
        sendBillElement.appendChild(fileNameElement);

        Element contentFileElement = doc.createElement("contentFile");

        String zipContentBase64 = Base64.getEncoder().encodeToString("Contenido del ZIP".getBytes());
        contentFileElement.setTextContent(zipContentBase64);
        sendBillElement.appendChild(contentFileElement);

        // Convertir el documento a String
        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();
        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no");
        transformer.setOutputProperty(OutputKeys.METHOD, "xml");
        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");

        StringWriter writer = new StringWriter();
        transformer.transform(new DOMSource(doc), new StreamResult(writer));
        return writer.getBuffer().toString();
    }

    private String generarXmlFactura(Facturacion factura) throws Exception {
        DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder docBuilder = docFactory.newDocumentBuilder();

        // Crear el documento XML
        Document doc = docBuilder.newDocument();

        // Elemento raíz: Invoice
        Element invoiceElement = doc.createElement("Invoice");
        invoiceElement.setAttribute("xmlns", "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2");
        invoiceElement.setAttribute("xmlns:cac", "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2");
        invoiceElement.setAttribute("xmlns:cbc", "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2");
        doc.appendChild(invoiceElement);

        // Agregar el ID de la factura
        Element idElement = doc.createElement("cbc:ID");
        idElement.setTextContent(factura.getNumeroFactura());
        invoiceElement.appendChild(idElement);

        // Agregar IssueDate
        Element issueDateElement = doc.createElement("cbc:IssueDate");
        // Formatear la fecha a String (en formato yyyy-MM-dd)
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String fechaEmisionFormateada = dateFormat.format(factura.getFechaEmision());

// Luego, asignar la fecha formateada al elemento del XML
        issueDateElement.setTextContent(fechaEmisionFormateada);
        invoiceElement.appendChild(issueDateElement);

        // Agregar el emisor (AccountingSupplierParty)
        Element supplierElement = doc.createElement("cac:AccountingSupplierParty");
        invoiceElement.appendChild(supplierElement);

        Element partyElement = doc.createElement("cac:Party");
        supplierElement.appendChild(partyElement);

        Element partyIdentificationElement = doc.createElement("cac:PartyIdentification");
        partyElement.appendChild(partyIdentificationElement);

        Element supplierIdElement = doc.createElement("cbc:ID");
        supplierIdElement.setAttribute("schemeID", "6"); // RUC tiene schemeID=6
        supplierIdElement.setTextContent(factura.getRucEmisor());
        partyIdentificationElement.appendChild(supplierIdElement);

        // Agregar el receptor (AccountingCustomerParty)
        Element customerElement = doc.createElement("cac:AccountingCustomerParty");
        invoiceElement.appendChild(customerElement);

        Element customerPartyElement = doc.createElement("cac:Party");
        customerElement.appendChild(customerPartyElement);

        Element customerPartyIdentificationElement = doc.createElement("cac:PartyIdentification");
        customerPartyElement.appendChild(customerPartyIdentificationElement);

        Element customerIdElement = doc.createElement("cbc:ID");
        customerIdElement.setAttribute("schemeID", "6");
        customerIdElement.setTextContent(factura.getRucEmisor());
        customerPartyIdentificationElement.appendChild(customerIdElement);

        // Agregar los montos (ejemplo simplificado para TotalAmount)
        Element legalMonetaryTotalElement = doc.createElement("cac:LegalMonetaryTotal");
        invoiceElement.appendChild(legalMonetaryTotalElement);

        Element payableAmountElement = doc.createElement("cbc:PayableAmount");
        payableAmountElement.setAttribute("currencyID", "PEN"); // Moneda en Soles
        payableAmountElement.setTextContent(String.valueOf(factura.getTotalVenta()));
        legalMonetaryTotalElement.appendChild(payableAmountElement);

        // Convertir el documento a String
        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();
        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no");
        transformer.setOutputProperty(OutputKeys.METHOD, "xml");
        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");

        StringWriter writer = new StringWriter();
        transformer.transform(new DOMSource(doc), new StreamResult(writer));
        return writer.getBuffer().toString();
    }




    private byte[] crearZip(String nombreArchivo, String contenido) throws Exception {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ZipOutputStream zos = new ZipOutputStream(baos);
        ZipEntry entry = new ZipEntry(nombreArchivo);
        zos.putNextEntry(entry);

        byte[] data = contenido.getBytes();
        zos.write(data, 0, data.length);
        zos.closeEntry();
        zos.close();

        return baos.toByteArray();
    }

}
