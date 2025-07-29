"use client"

import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { Title } from "./Title";

interface HeroProps {
    title: string;
    caption: string;
    subtitle: string;
}

interface HeroImages {
    bgImage: string;
}


const heroImages: HeroImages[] = [
    {
        bgImage: "/images/heroImage.png"
    },
    {
        bgImage: "/images/heroImage2.jpg"
    },
    {
        bgImage: "/images/heroImage3.jpg"
    }
];

export const Hero = ({title, caption, subtitle}: HeroProps) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    // const { bgImage } = heroImages[current];
    const bgVideo = "/videos/heroVideo.mp4";

    return(
        <div className={`h-screen px-4 md:px-[3rem] flex flex-col justify-center bg-cover bg-center overflow-hidden`}>
            <motion.video
                key={bgVideo}
                src={bgVideo}
                loop
                muted
                autoPlay
                className="absolute inset-0 w-full h-full object-cover z-0"
                initial={{ scale: .99}}
                animate={{ scale: 1}}
                
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-0"></div>
            <div className="relative z-10 py-10">
                <div className="w-full md:w-[60%] flex flex-col gap-2 pt-[1rem]">
                    <PageTransition type="fadeUp">
                        <Title label={title}/>
                        <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight py-2">{caption}</h1>
                        <p className="text-[1rem] leading-[1.5] text-white">
                            {subtitle}
                        </p>
                        <AppLink href="/contact-us" label="Join Us" variant="primary" className="block w-max border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] 
                font-medium hover:bg-white hover:text-black transition-all duration-300 mt-8"/>
                    </PageTransition>
                </div>
            </div>
        </div>
    )
}

import { ReactNode, useEffect, useState } from "react";
import { AppLink } from "./AppLink";

interface SubsequentHeroProps {
    children: ReactNode,
    className?: string;
}

export const SubsequentHero = ({ children, className }: SubsequentHeroProps) => {
    return (
        <div className="relative min-h-[85vh] px-2 md:px-[3rem] py-8 md:pt-10 flex flex-col justify-center gap-4 bg-gradient-to-r from-green-900/20 via-black to-black">
            <div className={`absolute inset-0 bg-cover bg-center z-0 ${className}`}></div>
            {children}
        </div>
    );
}