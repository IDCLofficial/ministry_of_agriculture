import EventsHeroSection from "./EventsHeroSection";
import EventsListSection from "./EventsListSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import PastEvents from "./PastEvents";

export default function EventsPage() {
  return (
    <div className="bg-white">
      <EventsHeroSection />
      <EventsListSection />
      <PastEvents />
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
