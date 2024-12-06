"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type ProjectType = {
  title: string;
  description: string;
  role: string; // New field for role
  imageSrc: string;
  techIcons: { src: string; alt: string }[];
  projectLink: string;
};

export default function Projects() {
  const items: ProjectType[] = [
    {
      title: "Kreate",
      description:
        "A platform to help content creators increase their cash flow and connect with their followers.",
      role: "Fullstack Developer", // Added role
      imageSrc: "/assets/kreate.png",
      techIcons: [
        { src: "/assets/react.svg", alt: "React" },
        { src: "/assets/tailwindcss.svg", alt: "Tailwind CSS" },
        { src: "/assets/swift.svg", alt: "Swift" },
        { src: "/assets/nest.js.svg", alt: "NestJS" },
        { src: "/assets/supabase.svg", alt: "Supabase" },
      ],
      projectLink: "https://kreate.gg",
    },
    {
      title: "EzEat",
      description:
        "A recipe app helping those with obesity with locally available ingredients and cuisine paired with a grocery list for increased efficiency.",
      role: "Fullstack Developer", // Added role
      imageSrc: "/assets/Ezeat.png",
      techIcons: [
        { src: "/assets/swift.svg", alt: "swift" },
      ],
      projectLink: "https://medium.com/@valentinuskenji4/ezeat-revolutionizing-weight-loss-for-indonesians-with-local-healthy-recipes-c028ae5ae89a",
    },
    {
      title: "Ox",
      description:
        "A 1RM and training weight calculator for progressive overload.",
      role: "Fullstack Developer", // Added role
      imageSrc: "/assets/ox.png",
      techIcons: [
        { src: "/assets/swift.svg", alt: "Swift" },
      ],
      projectLink: "https://medium.com/@valentinuskenji4/building-ox-a-1rm-and-training-weight-calculator-for-progressive-overload-deec69051e88",
    },
    {
      title: "Shuttle of Destiny",
      description:
        "A narrative-driven simulation game blends strategic decision-making with dynamic storytelling, offering players a chance to shape their character’s destiny through their choices.",
      role: "Project Manager | Coder", // Added role
      imageSrc: "/assets/shuttleofdestiny.png",
      techIcons: [
        { src: "/assets/swift.svg", alt: "Swift" },
        { src: "/assets/jira.svg", alt: "Jira" },

      ],
      projectLink: "https://medium.com/@valentinuskenji4/game-development-chronicles-crafting-shuttle-of-destiny-ba9af45e6be6",
    },
    {
      title: "Help us Hear!",
      description:
        "A gamified AI and machine learning app using core ML to recognize spoken words and translate them into American Sign Language (ASL) gestures.",
      role: "Designer | Coder", // Added role
      imageSrc: "/assets/huhapp.png",
      techIcons: [
        { src: "/assets/swift.svg", alt: "Swift" },

      ],
      projectLink: "https://medium.com/@valentinuskenji4/turning-translation-into-fun-how-i-created-a-game-to-help-people-learn-sign-language-c5102019deea",
    },
    {
      title: "Text classification using BERT",
      description:
        "Sentimental analysis and classification of twitter dataset using Tensorflow and BERT.",
      role: "Coder", // Added role
      imageSrc: "/assets/bert.jpeg",
      techIcons: [
        { src: "/assets/python.svg", alt: "Python" },

      ],
      projectLink: "https://github.com/Vkenji34/TextclassificationBert/blob/main/Random_Resampling_Using_Transformers!_Using%20BERT.ipynb",
    },
  ];

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20">
      <motion.h1
        ref={ref}
        className="mt-8 bg-gradient-to-br from-text to-slate-200 py-4 bg-clip-text text-center text-7xl font-medium tracking-tight text-transparent md:text-7xl"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-neutral-800 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            {/* Project Title */}
            <h3 className="text-xl font-bold">{item.title}</h3>

            {/* Project Role */}
            <p className="text-sm font-semibold text-accent mt-1">
              {item.role}
            </p>

            {/* Project Description */}
            <p className="text-gray-400 text-sm mt-2">{item.description}</p>

            {/* Tech Icons */}
            <div className="flex gap-2 mt-4">
              {item.techIcons.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              ))}
            </div>

            {/* Project Image */}
            <div
              className="mt-6 flex justify-center items-center"
              style={{ height: "200px", width: "100%", overflow: "hidden" }}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={320}
                height={180}
                className="rounded-lg object-cover"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>

            {/* Link Button */}
            <div className="mt-4">
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-black text-center py-2 rounded-lg text-sm font-bold hover:bg-accent"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
