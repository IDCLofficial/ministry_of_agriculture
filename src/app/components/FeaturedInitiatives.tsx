"use client"

import Image from "next/image";
import { AppLink } from "./AppLink";
import { projects } from "../projects/projects";
import {motion} from 'framer-motion'

export default function FeaturedInitiatives() {
  return (
    <section className="w-full p-4 md:p-8 py-10 md:py-16 bg-white flex flex-col items-center gap-8">
      <motion.h2 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-dark-primary text-2xl md:text-3xl lg:text-[43px] font-medium text-center md:mb-12"
      >
        Featured Initiatives
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full mx-auto flex flex-col md:flex-row justify-center gap-6 md:gap-8 px-0 md:px-4"
      >
        {projects?.slice(0, 4).map((project) => (
          <div key={project.title} className="bg-white flex flex-col items-center h-full relative cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-[140px] md:h-[200px] z-0">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="w-full flex-1 flex flex-col justify-between md:items-center p-2 md:p-4 bg-white mx-auto shadow-md">
                <div>
                    <h3 className={`text-dark-secondary text-base font-bold mb-2`}>{project.title}</h3>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex justify-center">
        <AppLink href="/projects" label="Learn More" variant="secondary" className="border border-1 border-primary-green text-[14px] px-[2rem] py-[12px] rounded-[3.4px] font-medium hover:bg-primary-green/80 
        hover:text-white transition-all duration-300"/>
      </div>
    </section>
  );
} 