import './App.css'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Facts from "./components/Facts.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <HowItWorks />
            <WhyChooseUs />
            <Facts />
            <FAQ />
            <CTA />
            <Footer />
        </>
    )
}
