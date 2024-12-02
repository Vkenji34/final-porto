// Header.js
"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 xl:py-6 text-[var(--text)] bg-[var(--background)] shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-semibold text-[var(--text)]">
            Kenji<span className="text-[var(--accent)]">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        <div className="xl:hidden">
         <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
