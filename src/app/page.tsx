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
        subtitle="Driving agricultural innovation and food security through inclusive, sustainable practices."
      />
      <AboutSection 
        title="About Us"
        subtitle="The Ministry of Agriculture and Food Security in Imo State was established to spearhead agricultural development and rural transformation. Since its creation in the early years of the state’s formation in 1976, the ministry has evolved through reforms, focusing on food production, agro-industrial growth, farmer support, and policy-driven agricultural transformation across the state."
        image1="/images/agriculture.jpg"
        image2="/images/agriculture2.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/user.png" 
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
