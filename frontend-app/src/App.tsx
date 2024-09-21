import Factura from "./components/pages/Factura.tsx";
import Pricing from "./components/Pricing.tsx";
import ToggleMode from "./components/ToggleMode.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";

function App() {
    return (
        <>
            <Hero/>
            <Factura/>
            <Pricing/>
            <ToggleMode/>
            <Footer />

        </>
    );
}

export default App;
