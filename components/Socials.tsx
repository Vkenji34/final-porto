import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram , FaEnvelope} from "react-icons/fa";
import Link from 'next/link';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/ValentinusK" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/valentinus-kenji/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/valentinuskenji/" },
    { icon: <FaEnvelope />, path: "valentinuskenji34@gmail.com" },

];

interface SocialsProps {
  containerStyles?: string;
  iconsStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconsStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
