"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ExpandableCardProps = {
  card: {
    category: string;
    title: string;
    description: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => JSX.Element;
  };
  onClose: () => void;
};

export const ExpandableCard: React.FC<ExpandableCardProps> = ({ card, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white dark:bg-neutral-800 rounded-lg w-[90%] max-w-lg overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            src={card.src}
            alt={card.title}
            width={500}
            height={300}
            className="object-cover w-full h-64"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black text-white p-2 rounded-full"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{card.title}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            {card.description}
          </p>
          <div className="mt-4">{typeof card.content === "function" ? card.content() : card.content}</div>
          <a
            href={card.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            {card.ctaText}
          </a>
        </div>
      </div>
    </motion.div>
  );
};
