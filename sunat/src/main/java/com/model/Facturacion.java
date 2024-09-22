package com.model;

import javax.xml.bind.annotation.*;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;

@XmlRootElement(name = "Invoice")
@XmlAccessorType(XmlAccessType.FIELD)

public class Facturacion {
    @XmlElement(name = "InvoiceNumber")
    private String numeroFactura;

    @XmlElement(name = "IssuerRUC")
    private String rucEmisor;

    @XmlElement(name = "RecipientRUC")
    private String rucReceptor;

    @XmlElement(name = "FechaEmision")
    private Date fechaEmision;


    @XmlElement(name = "Items")
    private List<ItemFactura> items;

    @XmlElement(name = "TotalVenta")
    private double totalVenta;

    public Facturacion(String numeroFactura, String rucEmisor, String rucReceptor) {
        this.numeroFactura = numeroFactura;
        this.fechaEmision = fechaEmision;
        this.rucEmisor = rucEmisor;
        this.rucReceptor = rucReceptor;
        this.items = new ArrayList<>();
        this.totalVenta = 0.0;
    }

    public void agregarItem(ItemFactura item) {
        this.items.add(item);
        this.totalVenta += item.getPrecioTotal();
    }


    public String getNumeroFactura() {
        return numeroFactura;
    }

    public void setNumeroFactura(String numeroFactura) {
        this.numeroFactura = numeroFactura;
    }

    public Date getFechaEmision() {
        return fechaEmision;
    }

    public void setFechaEmision(Date fechaEmision) {
        this.fechaEmision = fechaEmision;
    }

    public String getRucEmisor() {
        return rucEmisor;
    }

    public void setRucEmisor(String rucEmisor) {
        this.rucEmisor = rucEmisor;
    }

    public String getRucReceptor() {
        return rucReceptor;
    }

    public void setRucReceptor(String rucReceptor) {
        this.rucReceptor = rucReceptor;
    }

    public List<ItemFactura> getItems() {
        return items;
    }

    public void setItems(List<ItemFactura> items) {
        this.items = items;
    }

    public double getTotalVenta() {
        return totalVenta;
    }

    public void setTotalVenta(double totalVenta) {
        this.totalVenta = totalVenta;
    }
}
