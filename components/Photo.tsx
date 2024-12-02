"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div>
        <div className="w-[320px] h-[280px] xl:w-[400px] xl:h-[360px]">
          <Image 
            src="/assets/photo.png" 
            priority 
            quality={100} 
            alt="Profile photo" 
            className="object-contain rounded-full" 
            width={500} 
            height={500} 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
