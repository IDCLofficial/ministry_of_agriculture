import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            <CTASection heading="Join Us to Promote Tourism and Culture in Imo State" buttonLabel="Contact Us" buttonHref="/contact" />
            <Footer />
        </div>
    );
}