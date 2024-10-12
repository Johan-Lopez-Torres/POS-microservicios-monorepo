// components/Navbar.tsx
import { Link } from "react-router-dom";

function RoutesPage() {
  return (
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><Link to="/">Hero</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/listing-sales">Listing Sales</Link></li>
        <li><Link to="/product-details">Product Details</Link></li>
        <li><Link to="/product-carousel">Product Carousel</Link></li>
        <li><Link to="/factura">Factura</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/listing-bar">Listing Bar</Link></li>
        <li><Link to="/testimonios">Testimonios</Link></li>
        <li><Link to="/venta-exitosa">Venta Exitosa</Link></li>
        <li><Link to="/ventas">Ventas</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/boleta">Boleta</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
}

export default RoutesPage;
