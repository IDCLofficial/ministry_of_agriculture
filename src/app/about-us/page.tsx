import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { AppLink } from "../components/AppLink";
import TeamGridSection from "./team/TeamGridSection";

const teamMembers = Array(4).fill({
    name: "Magreth Nonso",
    position: "Position",
    imgSrc: "/images/team.png" // Use a placeholder or real image if available
  });

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Agriculture" />
            <AboutSection 
                aboutText="On behalf of the Ministry of Agriculture and Food Security, Imo State, I warmly welcome you. Our mission is to ensure food sufficiency, empower farmers, and drive agribusiness for economic growth. Together, we’ll strengthen agricultural value chains, improve livelihoods, and secure a sustainable future. Thank you for supporting our shared vision of agricultural excellence. The Ministry of Agriculture and Food Security in Imo State was established to spearhead agricultural development and rural transformation. Since its creation in the early years of the state’s formation in 1976, the ministry has evolved through reforms, focusing on food production, agro-industrial growth, farmer support, and policy-driven agricultural transformation across the state."
                imgSrc="/images/agriculture.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <section className="w-full py-10 md:py-16 px-2 md:px-4 bg-white mx-auto flex flex-col items-center">
                <TeamGridSection members={teamMembers} />
                <AppLink href="/about-us/team/#team" label="Learn More" variant="primary" className="hover:bg-primary-green/80 transition-all duration-300"/>
            </section>
            <CTASection 
                heading="Partner with Us to Transform Agriculture in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}