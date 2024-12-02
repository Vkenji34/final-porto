import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  { name: "home", path: "#home" },
  { name: "skills", path: "#about" },
  // { name: "experience", path: "#experience"},
  { name: "projects", path: "#projects" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = () => {
    const sections = links.map((link) => document.querySelector(link.path));
    sections.forEach((section, i) => {
      if (section && section.getBoundingClientRect().top <= window.innerHeight / 2) {
        setActiveSection(links[i].name);
      }
    });
  };

  // Define types for event and path
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(path.replace("#", ""));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          onClick={(e) => handleClick(e, link.path)}
          className={`
            capitalize font-medium transition-all 
            hover:text-[var(--accent)]
            ${link.name === activeSection ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" : ""}
          `}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
