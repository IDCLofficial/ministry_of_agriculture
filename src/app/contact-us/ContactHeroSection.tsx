"use client"
import React from "react";
import { motion } from "framer-motion";

interface ContactHeroSectionProps {
  title: string;
}

const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({ title }) => (
  <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center bg-[url('/images/gradient.png')] bg-cover bg-center">
    <motion.h1
      className="text-white text-4xl md:text-5xl font-bold z-10"
      initial={{ opacity: 1 }}
      animate={{}}
    >
      {title.split(" ").map((word, wordIdx, arr) => (
        <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.04 * (arr.slice(0, wordIdx).join(" ").length + wordIdx + charIdx) }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          {wordIdx < arr.length - 1 && (
            <motion.span
              key={`space-${wordIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.04 * (arr.slice(0, wordIdx + 1).join(" ").length + wordIdx) }}
              style={{ display: "inline-block" }}
            >
              {"\u00A0"}
            </motion.span>
          )}
        </span>
      ))}
    </motion.h1>
  </section>
);

export default ContactHeroSection; 