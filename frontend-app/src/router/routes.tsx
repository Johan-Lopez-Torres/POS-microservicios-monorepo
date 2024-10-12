// routes/routes.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Factura from "../components/pages/Factura";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Testimonios from "../components/Testimonios";
import VentaExitosaModal from "../components/VentaExitosaModal";
import Ventas from "../components/Ventas";
import Hero from "../components/Hero";
import { Dashboard } from "../components/pages/Dashboard/Dashboard";
import Boleta from "../components/pages/Dashboard/Boleta";
import Wishlist from "../components/Wishlist";
import UltimateProductDetailV2 from "../components/ProductDetails";
import ListingBar from "../components/ListingBar";
import ProductCarousel from "../components/ProductCarouse";
import ListingSales from "../components/ListingSales";
import RoutesPage from "../components/ui/RoutesPage";
import EnhancedCheckout from "@/components/pages/Checkout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/listing-sales" element={<ListingSales />} />
        <Route path="/product-details" element={<UltimateProductDetailV2 />} />
        <Route path="/product-carousel" element={<ProductCarousel />} />
        <Route path="/factura" element={<Factura />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/listing-bar" element={<ListingBar />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/venta-exitosa" element={<VentaExitosaModal />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/boleta" element={<Boleta />} />
        <Route path="/routes-page" element={<RoutesPage />} />
        <Route path="checkout" element={<EnhancedCheckout/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;