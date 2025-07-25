import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "/images/tech-dev.png",
    title: "Tourism Development",
    description: "Promotes tourist sites like Oguta Lake, Njaba River, Mbari Cultural Center, and Owerri Amusement Park.\n\nCollaborates with private investors to develop hospitality infrastructure (hotels, resorts, and eco-tourism projects)."
  },
  {
    imgSrc: "/images/e-gov.png",
    title: "Cultural Preservation",
    description: "Documents and promotes Igbo traditions, festivals, dances, and artifacts.\n\nSupports local festivals like Iri Ji (New Yam Festival) and Imo Carnival."
  },
  {
    imgSrc: "/images/cyber-security.png",
    title: "Creative Arts & Entertainment",
    description: "Encourages Nollywood, music, visual arts, and crafts from Imo State.\n\nProvides platforms for artists through exhibitions, workshops, and grants."
  },
  {
    imgSrc: "/images/training.png",
    title: "Economic Growth & Job Creation",
    description: "Aims to make tourism a major revenue source for Imo State.\n\nEmpowers youths through creative industry training programs."
  },

];

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
} 