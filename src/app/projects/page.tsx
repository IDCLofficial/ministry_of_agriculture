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
        heading="Partner with Us Today!"
        subtext="Join us in cultivating a prosperous future for Imo State. Together, we can empower farmers, boost food security, and drive sustainable agricultural growth for every community."
        buttonLabel="Contact Us"
        buttonHref="/contact-us" 
      />
      <Footer />
    </div>
  );
}