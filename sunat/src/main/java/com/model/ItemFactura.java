package com.model;;

public class ItemFactura {

        private String descripcion;
        private int cantidad;
        private double precioUnitario;

        public ItemFactura(String descripcion, int cantidad, double precioUnitario) {
            this.descripcion = descripcion;
            this.cantidad = cantidad;
            this.precioUnitario = precioUnitario;
        }

        public double getPrecioTotal() {
            return cantidad * precioUnitario;
        }


}
