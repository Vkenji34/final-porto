"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Software Engineer Intern",
    description: "Worked on building apps in iOS platform.",
    role: "iOS Developer",
    year: "2024",
    logo: "/assets/apple.svg", // Replace with your logo path
  },
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger animation when 10% of the section is in view
  });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center -mt-12">
  <div
    className="pb-12 px-6 max-w-4xl mx-auto"
    ref={ref}
  >
    <motion.h1
      className="mt-4 bg-gradient-to-br from-text to-slate-200 py-2 bg-clip-text text-center text-7xl font-medium tracking-tight text-transparent mb-10 md:text-7xl"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      Experience
    </motion.h1>
    <div className="space-y-6">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="p-6 bg-neutral-800 rounded-lg shadow-lg text-white flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex-shrink-0 mr-6">
            <Image
              src={experience.logo}
              alt={`${experience.title} logo`}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <p className="text-sm text-gray-400 mt-2">
              {experience.description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-md font-medium">{experience.role}</span>
              <span className="text-md text-gray-500">{experience.year}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Experience;
