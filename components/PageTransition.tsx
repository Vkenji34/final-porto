"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }} 
        className="fixed inset-0 h-full w-full bg-[var(--background)]" 
      >
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
