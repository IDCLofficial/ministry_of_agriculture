import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "/images/agric_extension.jpeg",
    title: "Agricultural Extension Services",
    description: "On-field support and training for farmers, access to crop and livestock specialists, soil testing and advisory services."
  },
  {
    imgSrc: "/images/grant.webp",
    title: "Grant & Subsidy Application",
    description: "Information on how to apply for: Fertilizer subsidies, Equipment leasing, Youth-in-Agric programs; link to downloadable forms and requirements."
  },
  {
    imgSrc: "/images/farmers_portal.jpg",
    title: "Farmer Registration Portal",
    description: "Link to register as a farmer in Imo State, access to inputs, subsidies, and grants, downloadable registration forms."
  },
  {
    imgSrc: "/images/landAllocation.jpg",
    title: "Land Allocation for Farming",
    description: "How to apply for agricultural land, land use policy documents, contact details for land processing unit. "
  },
  {
    imgSrc: "/images/vertinary.jpg",
    title: "Veterinary Services",
    description: "Animal healthcare and vaccinations, schedule of mobile vet clinic visits, request service button"
  },
  {
    imgSrc: "/images/agroProcessing.jpg",
    title: "Agro-Processing & Storage Support",
    description: "Info on available state silos and storage centers, assistance for small-scale processors, public-private collaboration guidelines."
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