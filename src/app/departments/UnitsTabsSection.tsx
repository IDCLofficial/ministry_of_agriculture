"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Department of Tourism Development",
    image: "/images/aboutUs1.png",
    description: "Identifies, develops, and promotes tourist sites across Imo State, coordinates tourism investment initiatives and eco-tourism projects and oversees tourism promotion and branding."
  },
  {
    name: "Department of Culture and Heritage",
    image: "/images/aboutUs1.png",
    description: "Preserves and promotes traditional arts, language, festivals, and heritage sites and organizes cultural festivals, and coordinates with local cultural institutions."
  },
  {
    name: "Department of Creative Arts",
    image: "/images/aboutUs1.png",
    description: "Supports local artists, performers, and creative industries, and develops cultural entrepreneurship programs and promotes Nollywood-related activities."
  },
  {
    name: "Department of Planning, Research & Statistics (PRS)",
    image: "/images/aboutUs1.png",
    description: "Develops tourism and cultural sector policies and strategic plans, also conducts surveys, data analysis, and performance evaluation."
  },
  {
    name: "Department of Finance & Accounts",
    image: "/images/aboutUs1.png",
    description: "Manages budgeting, revenue, and financial reporting for the ministry, and oversees expenditure, audits, and compliance."
  },
  {
    name: "Department of Administration & Supplies",
    image: "/images/aboutUs1.png",
    description: "Handles staffing, procurement, logistics, and general administration within the ministry, and maintains internal correspondence and records."
  },
  {
    name: "Department of Public Affairs / Press Unit",
    image: "/images/aboutUs1.png",
    description: "Manages media relations, public communications, and stakeholder engagement, and promotes ministry activities via radio, TV, and digital channels."
  },
];

export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full mx-auto flex flex-col md:flex-row gap-8 py-16 px-4 md:px-8">
      {/* Tabs */}
      <div className="w-full md:w-2/6 border-r pr-4">
        <ul className="space-y-2 flex gap-2 md:flex-col md:gap-2 overflow-x-auto">
          {departments.map((dept, idx) => (
            <li key={dept.name} className="flex-1">
              <button
                className={`w-full text-left px-4 py-2 rounded border text-nowrap ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-gray-300 md:border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1 px-4 md:px-10">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">{active.name}</h2>
        <div className="w-full mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover h-[300px]" />
        </div>
        <p className="text-dark-primary-body text-base md:text-[1rem] text-dark-primary-body">{active.description}</p>
      </div>
    </section>
  );
} 