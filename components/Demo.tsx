"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
    <div className="relative">
      {/* Scroll Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="bg-white text-black p-2 rounded-full shadow-md disabled:opacity-50"
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="bg-white text-black p-2 rounded-full shadow-md disabled:opacity-50"
        >
          →
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-4 px-8 scrollbar-hide py-10"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-black text-white rounded-lg shadow-lg p-6 w-80"
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
            <div className="mt-6">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={320}
                height={180}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Link Button */}
            <div className="mt-4">
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-black text-center py-2 rounded-lg text-sm font-bold hover:bg-gray-200"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Example usage
export default function Demo() {
  const items: ProjectType[] = [
    {
      title: "Aceternity UI",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      imageSrc: "/assets/photo.png",
      techIcons: [
        { src: "/assets/icons/react.svg", alt: "React" },
        { src: "/assets/icons/tailwind.svg", alt: "Tailwind CSS" },
      ],
      projectLink: "https://example.com",
    },
    {
      title: "Next.js Project",
      description: "A powerful React framework for modern web development.",
      imageSrc: "/assets/nextjs.png",
      techIcons: [
        { src: "/assets/icons/nextjs.svg", alt: "Next.js" },
        { src: "/assets/icons/typescript.svg", alt: "TypeScript" },
      ],
      projectLink: "https://nextjs.org",
    },
    {
        title: "Next.js Project",
        description: "A powerful React framework for modern web development.",
        imageSrc: "/assets/nextjs.png",
        techIcons: [
          { src: "/assets/icons/nextjs.svg", alt: "Next.js" },
          { src: "/assets/icons/typescript.svg", alt: "TypeScript" },
        ],
        projectLink: "https://nextjs.org",
      },
  ];

  return <AppleCarousel items={items} />;
}
