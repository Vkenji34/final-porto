"use client";
import React from "react";
import { motion } from "framer-motion";

const skillItems = [
  { imgSrc: "/assets/css3.svg", label: "CSS3" },
  { imgSrc: "/assets/figma.svg", label: "Figma" },
  { imgSrc: "/assets/GitHub.svg", label: "GitHub" },
  { imgSrc: "/assets/HTML5.svg", label: "HTML5" },
  { imgSrc: "/assets/Java.svg", label: "Java" },
  { imgSrc: "/assets/javascript.svg", label: "JavaScript" },
  { imgSrc: "/assets/Jira.svg", label: "Jira" },
  { imgSrc: "/assets/python.svg", label: "Python" },
  { imgSrc: "/assets/react.svg", label: "React" },
  { imgSrc: "/assets/Swift.svg", label: "Swift" },
  { imgSrc: "/assets/tailwindcss.svg", label: "Tailwind CSS" },
  { imgSrc: "/assets/TypeScript.svg", label: "TypeScript" },
  { imgSrc: "/assets/nextjs.svg", label: "NextJS" },

];

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center -mt-12 pb-12"
  >
    <div className="container mx-auto flex flex-col items-center py-6 xl:py-8">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-text to-slate-200 py-4 bg-clip-text text-center text-7xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Tech Stack
      </motion.h1>

      {/* Skill Tiles */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {skillItems.map((skill, index) => (
          <div
            key={index}
            className="relative group w-48 h-48 flex flex-col items-center justify-center bg-neutral-800 text-white rounded-xl shadow-xl overflow-hidden transition transform hover:scale-105"
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffb366]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none transform scale-125 rotate-45"></div>

            {/* Icon */}
            <img src={skill.imgSrc} alt={skill.label} className="w-12 h-12" />

            {/* Label */}
            <h3 className="text-lg font-semibold mt-4">{skill.label}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
