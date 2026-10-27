import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: "Services offered by the Ministry of Agriculture of the Imo State Government.",
  path: "/services",
});


export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            <CTASection heading="Partner with Us to Transform Agriculture in Imo State" buttonLabel="Contact Us" buttonHref="/contact" />
            <Footer />
        </div>
    );
}