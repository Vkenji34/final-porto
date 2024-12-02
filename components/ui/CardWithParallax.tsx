"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CardWithParallax = ({
  card,
  index,
  scrollPosition,
}: {
  card: { src: string; title: string; category: string };
  index: number;
  scrollPosition: number;
}) => {
  // Adjust the parallax rate for horizontal movement
  const parallaxOffset = (scrollPosition - index * 300) * 0.2; // Tweak the multiplier for desired speed

  return (
    <div className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden relative z-10">
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <p className="text-white text-sm md:text-base font-medium font-sans text-left">
          {card.category}
        </p>
        <p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left font-sans mt-2">
          {card.title}
        </p>
      </div>
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `translateX(${parallaxOffset}px)`, // Horizontal movement
          transition: "transform 0.1s linear", // Smooth transition
        }}
      >
        <Image
          src="/assets/photo.png"
          alt={card.title}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};
