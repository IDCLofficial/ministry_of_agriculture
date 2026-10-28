import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Farmer Registration and Subsidies",
  description: "Agricultural extension, grant and subsidy applications, farmer registration, farmland allocation, veterinary services and agro-processing support in Imo State.",
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