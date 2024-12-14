"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-cover bg-center flex items-center">
      <div className="container mx-auto flex flex-col items-center xl:flex-row xl:items-center xl:justify-between py-8 xl:py-10">
        {/* Left Section */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4 mb-8 xl:mb-0 mt-32 xl:mt-0">
          <span className="text-xl text-accent uppercase tracking-wider">Software Engineer</span>
          <h1 className="text-6xl xl:text-7xl font-bold leading-none text-white">
            Hi I'm<br /> Kenji
          </h1>
          <div className="mt-6 text-center xl:text-left">
            <p className="text-lg xl:text-l text-neutral-400 max-w-md leading-relaxed">
              A software engineer with a knack in crafting clean, efficient code. With skills across multiple languages and frameworks.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-4 mt-4">
            {/* Download CV Button */}
            <a
              href="/assets/CV.pdf" // Path to your CV file in the public directory
              download="CV.pdf" // File name for the download
            >
              <Button
                variant="outline"
                size="lg"
                className="w-48 h-14 uppercase tracking-wider border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden xl:flex xl:items-center gap-4 xl:gap-6 mt-0 xl:mt-0">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Home;
