"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type ProjectType = {
  title: string;
  description: string;
  imageSrc: string;
  techIcons: { src: string; alt: string }[];
  projectLink: string;
};

type CarouselProps = {
  items: ProjectType[];
};

export function AppleCarousel({ items }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const ref = carouselRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-4 px-8 scrollbar-hide py-10 max-w-full"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-neutral-800 text-white rounded-lg shadow-lg p-6 w-80"
            style={{ height: "450px" }} // Fixed container size
          >
            {/* Title */}
            <h3 className="text-xl font-bold">{item.title}</h3>

            {/* Description */}
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

            {/* Image */}
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
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-end gap-2 mt-4 w-full px-8">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="bg-white text-black p-3 rounded-full shadow-md disabled:opacity-50 hover:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="bg-white text-black p-3 rounded-full shadow-md disabled:opacity-50 hover:bg-gray-200"
        >
          →
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const items: ProjectType[] = [
    {
      title: "Kreate",
      description: "A platform to help content creators increase their casflow and connect with their followers",
      imageSrc: "/assets/kreate.png",
      techIcons: [
        { src: "/assets/react.svg", alt: "React" },
        { src: "/assets/tailwindcss.svg", alt: "Tailwind CSS" },
      ],
      projectLink: "https://example.com",
    },
    {
      title: "Kreate",
      description: "A platform to help content creators increase their casflow and connect with their followers",
      imageSrc: "/assets/kreate.png",
      techIcons: [
        { src: "/assets/react.svg", alt: "React" },
        { src: "/assets/tailwindcss.svg", alt: "Tailwind CSS" },
      ],
      projectLink: "https://example.com",
    },
    {
      title: "Kreate",
      description: "A platform to help content creators increase their casflow and connect with their followers",
      imageSrc: "/assets/kreate.png",
      techIcons: [
        { src: "/assets/react.svg", alt: "React" },
        { src: "/assets/tailwindcss.svg", alt: "Tailwind CSS" },
      ],
      projectLink: "https://example.com",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
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
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <AppleCarousel items={items} />
      </motion.div>
    </section>
  );
}
