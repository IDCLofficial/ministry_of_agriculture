import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { teamMembers } from "./teamMembers";
import TeamGridSection from "./TeamGridSection";

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Agriculture" />
            <AboutSection 
                aboutText="On behalf of the Ministry of Agriculture and Food Security, Imo State, I warmly welcome you. Our mission is to ensure food sufficiency, empower farmers, and drive agribusiness for economic growth. Together, we’ll strengthen agricultural value chains, improve livelihoods, and secure a sustainable future. Thank you for supporting our shared vision of agricultural excellence."
                imgSrc="/images/agriculture.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <ObjectivesSection />
            <TeamGridSection members={teamMembers} />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Partner with Us to Transform Agriculture in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}