import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <ProjectsSection />
      <CTASection 
        heading="Together we can Promote Tourism and Culture in Imo State"
        subtext="Want to get involved or partner with us? Reach out today"
        buttonLabel="Contact Us"
        buttonHref="/contact-us" 
      />
      <Footer />
    </div>
  );
}