"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  { name: "home", path: "#hero" },
  { name: "skills", path: "#about" },
  // { name: "experience", path: "#experience" },
  { name: "projects", path: "#projects" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    name: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveLink(name); // Set the active link
    setIsOpen(false); // Close the nav after clicking
  };

  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <button
          className="fixed top-4 right-4 z-50 p-2 text-2xl text-[var(--accent)]"
          onClick={toggleNav}
          aria-label="Open Menu"
        >
          <CiMenuFries />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={toggleNav}
          aria-hidden="true"
        />
      )}

      {/* Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/6 max-w-sm bg-[var(--background)] text-[var(--text)] z-50 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center p-6 gap-8">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl text-[var(--accent)]"
            onClick={toggleNav}
            aria-label="Close Menu"
          >
            <IoMdClose />
          </button>

          {/* Site Name */}
          <h1 className="text-4xl font-semibold mt-16">
            {/* Adjusted `mt-6` for spacing */}
            Kenji<span className="text-[var(--accent)]">.</span>
          </h1>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 mt-4 items-center">
            {links.map((link, index) => (
              <a
                href={link.path}
                key={index}
                className={`capitalize text-xl transition-all hover:text-[var(--accent)] ${
                  activeLink === link.name
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : ""
                }`}
                onClick={(e) => handleLinkClick(e, link.path, link.name)}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="outline"
              size="md"
              className="w-28 h-10 capitalize tracking-wider border-2 border-accent text-white hover:bg-accent hover:text-white transition-all duration-300"
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
