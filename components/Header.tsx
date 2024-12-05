"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import MobileNav from "./MobileNav";

// Social Media Links
const socials = [
  { icon: <FaGithub />, path: "https://github.com/ValentinusK" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/valentinus-kenji/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/valentinuskenji/" },
  { icon: <FaEnvelope />, path: "mailto:valentinuskenji34@gmail.com" },
];

const Header = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 xl:py-6 bg-[var(--background)] shadow-md text-[var(--text)]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <a
          href="#hero"
          onClick={scrollToTop}
          aria-label="Home"
          className="cursor-pointer"
        >
          <h1 className="text-4xl font-semibold">
            Kenji<span className="text-[var(--accent)]">.</span>
          </h1>
        </a>

        {/* Social Icons Section */}
        <div className="flex items-center gap-4 text-4xl">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.path}
              className="text-[var(--text)] hover:text-[var(--accent)] transition-all duration-300"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
