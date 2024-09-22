import Factura from "./components/pages/Factura.tsx";
import Pricing from "./components/Pricing.tsx";
import Footer from "./components/Footer.tsx";
import Testimonios from "@/components/Testimonios.tsx";
import VentaExitosaModal from "@/components/VentaExitosaModal.tsx";
import Ventas from "@/components/Ventas.tsx";
import Hero from "@/components/Hero.tsx";
import {Dashboard} from "@/components/pages/Dashboard/Dashboard.tsx";

function App() {
    return (
        <>

            <Hero/>
            <Pricing/>
            <Testimonios/>
            <Footer/>
            <Factura/>
            <Ventas/>
            <VentaExitosaModal/>
            <Dashboard/>
        </>
    );
}

export default App;
