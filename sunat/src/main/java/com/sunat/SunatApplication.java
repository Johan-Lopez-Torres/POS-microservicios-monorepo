package com.sunat;

import com.model.Facturacion;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class SunatApplication {

	public static void main(String[] args) {

        SpringApplication.run(SunatApplication.class, args);
        Facturacion factura = new Facturacion("F001-00001","20100066603","F001-00001");
        factura.setNumeroFactura("F001-00001");
        factura.setRucEmisor("20100066603"); // RUC de pruebas
        factura.setTotalVenta(1000.0);
        factura.setFechaEmision(new Date()); // Fecha actual

        SunatSoapClient client = new SunatSoapClient();
        client.enviarFactura(factura);
	}

}
