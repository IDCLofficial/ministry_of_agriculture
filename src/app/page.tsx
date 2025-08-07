import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
// import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import FeaturedPartners from "./components/FeaturedPartners";

export default function Home() {
  return (
    <div className="h-screen w-full bg-red-400">
      <Hero
        title="Imo State Ministry of Agriculture" 
        caption="Feeding Imo, Empowering Farmers" 
        subtitle="Our mission is to promote sustainable agricultural development through innovation, farmer empowerment, and agribusiness support, ensuring food security, economic growth, and improved livelihoods for all citizens of Imo State."
      />
      <AboutSection 
        title="About Us"
        subtitle="On behalf of the Ministry of Agriculture and Food Security, Imo State, I warmly welcome you and appreciate your continued interest in the agricultural transformation of our dear state. Our mission is to achieve food sufficiency, enhance rural livelihoods, and empower our farmers through innovation, capacity building, and access to critical support services. We are committed to revitalizing the agricultural sector by strengthening value chains, promoting agribusiness, and encouraging youth participation in farming and agro-processing. By fostering public-private partnerships, ensuring access to finance, and embracing modern technologies, we aim to boost productivity, reduce poverty, and contribute significantly to the economic growth of Imo State. We believe that with collective commitment and shared responsibility, we can build a sustainable, food-secure future for all. Thank you for supporting our vision of agricultural excellence and rural prosperity."
        image1="/images/agriculture.jpg"
        image2="/images/agriculture2.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.jpg" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives />
        <FeaturedPartners />
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      {/* <Stats /> */}
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Partner with Us Today!"
        subtext="Join us in cultivating a prosperous future for Imo State. Together, we can empower farmers, boost food security, and drive sustainable agricultural growth for every community."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
