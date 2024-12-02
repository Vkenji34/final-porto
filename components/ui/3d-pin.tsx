"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  title,
  href,
  imageSrc,
  techIcons,
  description,
  className,
  containerClassName,
}: {
  title?: string;
  href?: string;
  imageSrc: string;
  techIcons: { src: string; alt: string }[];
  description: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Floating Link */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/pin:opacity-100 transition duration-300"
      >
        <Link
          href={href || "/"}
          className="relative flex items-center space-x-2 z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 hover:ring-white/20 transition"
          target="_blank"
        >
          <span className="text-white text-xs font-bold">{title}</span>
          <span className="absolute left-[1rem] bottom-[-1px] h-px w-[calc(100%-2rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0"></span>
        </Link>
      </motion.div>

      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-8 top-1/2 flex flex-col justify-between rounded-3xl shadow-[0_12px_24px_rgb(0_0_0/0.5)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden w-[24rem] h-[32rem]"
        >
          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-100 mb-4">{title}</h3>

          {/* Description */}
          <div className="text-lg font-normal text-slate-500 mb-4">
            <span>{description}</span>
          </div>

          {/* Icons */}
          <div className="flex gap-4 mb-4">
            {techIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={32}
                height={32}
                className="h-8 w-8"
              />
            ))}
          </div>

          {/* Project Image */}
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={title || "Project Image"}
              layout="responsive"
              width={320}
              height={240}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};