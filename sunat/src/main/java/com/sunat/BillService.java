package com.sunat;


import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.xml.ws.BindingType;
import javax.xml.ws.soap.SOAPBinding;

@WebService(targetNamespace = "http://service.sunat.gob.pe", name = "billService")
@BindingType(value = SOAPBinding.SOAP12HTTP_BINDING)
public interface BillService {
    String sendBill(String fileName, byte[] contentFile) throws Exception;

    //String sendBill(String xmlFactura);

    /*
    @WebMethod(operationName = "sendBill")
    String sendBill(
            @WebParam(name = "fileName") String fileName,
            @WebParam(name = "contentFile") byte[] contentFile
    ) throws Exception;*/

    @WebMethod(operationName = "sendSummary")
    String sendSummary(
            @WebParam(name = "fileName") String fileName,
            @WebParam(name = "contentFile") byte[] contentFile
    ) throws Exception;

    @WebMethod(operationName = "sendPack")
    String sendPack(
            @WebParam(name = "fileName") String fileName,
            @WebParam(name = "contentFile") byte[] contentFile
    ) throws Exception;

    @WebMethod(operationName = "getStatus")
    String getStatus(
            @WebParam(name = "ticket") String ticket
    ) throws Exception;

    @WebMethod(operationName = "getStatusCdr")
    String getStatusCdr(
            @WebParam(name = "rucComprobante") String rucComprobante,
            @WebParam(name = "tipoComprobante") String tipoComprobante,
            @WebParam(name = "serieComprobante") String serieComprobante,
            @WebParam(name = "numeroComprobante") String numeroComprobante
    ) throws Exception;
}
