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
            <AboutUsHero ministryName="Ministry of Tourism, Hospitality and Culture" />
            <AboutSection 
                aboutText="The Imo State Ministry of Tourism, Creative Arts, and Culture is a government agency responsible for promoting tourism, preserving cultural heritage, and fostering creative arts in Imo State, Nigeria. The ministry plays a key role in developing tourist attractions, organizing cultural events, and boosting the state’s economy through tourism."
                imgSrc="/images/homeImage1.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <section className="w-full py-10 md:py-16 px-2 md:px-4 bg-white mx-auto flex flex-col items-center">
                <TeamGridSection members={teamMembers} />
                <AppLink href="/about-us/team" label="Learn More" variant="primary" className="hover:bg-primary-green/80 transition-all duration-300"/>
            </section>
            <CTASection 
                heading="Join Us to Promote Tourism and Culture in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}