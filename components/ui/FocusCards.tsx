"use client";
import React, { useRef, useEffect, useState } from "react";
import { ProjectCard } from "./Card";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

type ProjectType = {
  title: string;
  description: string;
  techIcons: { src: string; alt: string }[];
  projectLink: string;
  imageSrc: string; // Image for the card
};

export const ProjectCarousel = ({ projects }: { projects: ProjectType[] }) => {
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
      <div className="flex justify-end gap-2 absolute -top-8 right-8 z-20">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="bg-white text-black rounded-full p-3 shadow-md disabled:opacity-50 hover:bg-gray-200"
        >
          <IconArrowNarrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="bg-white text-black rounded-full p-3 shadow-md disabled:opacity-50 hover:bg-gray-200"
        >
          <IconArrowNarrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-4 px-8 py-6 scrollbar-hide"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
