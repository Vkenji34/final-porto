"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const CarouselWithParallax = ({
  items,
}: {
  items: JSX.Element[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const ref = carouselRef.current;
    ref?.addEventListener("scroll", handleScroll);

    return () => {
      ref?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              {React.cloneElement(item, { scrollPosition })}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
