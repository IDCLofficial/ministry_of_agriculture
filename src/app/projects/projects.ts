interface project {
  title: string;
  image: string;
  ongoing: boolean;
  description: string;
}


export const projects = [
  {
    title: "Mechanization Access Program (MAP)",
    image: "/images/mechanization.jpg",
    ongoing: true,
    description: "Provides tractors and mechanized tools to registered farmers at subsidized rates in partnership with private leasing firms and agro-dealers,"
  },
  {
    title: "Youth in Agri-Tech Program",
    image: "/images/youthInAgri.jpg",
    ongoing: true,
    description: "Trains young farmers on hydroponics, precision farming, and drone mapping with 200 beneficiaries from Owerri zone including internships with tech-enabled farms;"
  },    
  {
    title: "Fish for All Aquaculture Initiative",
    image: "/images/fish.jpg",
    ongoing: false,
    description: "Built 10 community fish farms across Imo West, trained 300 young aquapreneurs, provided fingerlings and starter feed kits, with option to “Download Project Report"
  },
];