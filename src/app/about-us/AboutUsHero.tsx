"use client"
import { Title } from "../components/Title";
import { SubsequentHero } from "../components/Hero";
import { motion } from "framer-motion";

interface AboutUsHeroProps {
    ministryName: string;
}

export const AboutUsHero = ({ ministryName }: AboutUsHeroProps) => {
    return (
        <SubsequentHero className="bg-[url('/images/gradient.png')] bg-cover bg-center">
            {/* Navigation Highlight */}
            <div className="relative z-10 flex justify-center">
                <Title label="About Us" />
            </div>
            <div className="relative z-10 flex justify-center mt-4">
                <div className="w-full md:w-[60%] flex flex-col items-center text-center">
                    <motion.h1
                        className="text-2xl md:text-[3rem] font-bold text-white leading-tight break-normal"
                        initial={{ opacity: 1 }}
                        animate={{}}
                    >
                        {`Our Story - ${ministryName}`.split("").map((char, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.04 * idx }}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
            </div>
        </SubsequentHero>
    );
}; 