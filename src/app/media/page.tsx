import React from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const mediaItems: [] = [];

export default function MediaPage() {
  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Explore Our Gallery"
        subtitle="Discover how the Ministry of Youth Development and Talent Hunt empowers young people and nurtures talent for a brighter future."
        backgroundImage="/images/heroImage.png"
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <MediaGalleryGrid items={mediaItems} />
      </section>
      <CTASection 
        heading="Partner With Us Today!" 
        subtext="Join us in cultivating a prosperous future for Imo State. Together, we can empower farmers, boost food security, and drive sustainable agricultural growth for every community." 
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
