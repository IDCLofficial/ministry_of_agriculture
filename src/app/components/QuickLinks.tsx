"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    title: "Services",
    desc: "Explore our comprehensive range of services.",
    img: "/images/homeImage1.jpg",
    href: "/services"
  },
  {
    title: "Projects",
    desc: "Discover our impactful initiatives.",
    img: "/images/homeImage2.jpg",
    href: "/projects"
  },
  {
    title: "Events",
    desc: "See our upcoming events.",
    img: "/images/homeImage3.jpg",
    href: "/events"
  },
  {
    title: "Media",
    desc: "Explore our media gallery.",
    img: "/images/gradient.png",
    href: "/media"
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full p-4 md:p-8 py-10 md:py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-dark-primary text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-12"
      >
        Quick Links
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0 md:px-4"
      >
        {links.map((link) => (
            <Link 
              key={link.title}
              href={link.href} 
              className="flex-1 flex flex-col justify-between relative p-4 md:p-6 bg-white
            w-[90%] h-[120px] md:h-[180px] mx-auto border border-gray-200 shadow-md hover:scale-105 transition-all duration-300">
              <div>
                <h3 className={`text-dark-secondary text-base md:text-lg font-bold mb-2`}>{link.title}</h3>
                <p className="text-dark-primary-body text-[1rem] mb-4 md:mb-6">{link.desc}</p>
              </div>
              <span className="self-end bg-green-700 hover:bg-green-800 text-white w-8 max-h-8 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
        ))}
      </motion.div>
    </section>
  );
} 