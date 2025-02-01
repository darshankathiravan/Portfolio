"use client"

import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaSquareInstagram } from "react-icons/fa6";
const SocialSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/darshan-k-540921b5/",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/darshankathiravan",
    },
    {
      name: "Instagram",
      icon: <FaSquareInstagram size={24} />,
      url: "https://www.instagram.com/darshann__k?utm_source=qr&igsh=enl6a3RtbG5oZXls",
    },
    {
      name: "Email",
      icon: <BiLogoGmail size={24} />,
      url: "mailto:kathiravandarshan@email.com",
    },
  ];

  return (
    <aside className="hidden md:flex flex-col gap-1 absolute left-0 top-1/4">
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          className="flex items-center transition-all duration-300 ease-in-out bg-gray-800 text-white hover:bg-opacity-90 p-3 rounded-r-md"
          style={{
            width: hoveredIndex === index ? "150px" : "48px",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center gap-3">
            <div style={{ color: link.color }}>{link.icon}</div>
            <span
              className="whitespace-nowrap transition-all duration-300"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
              }}
            >
              {link.name}
            </span>
          </div>
        </a>
      ))}
    </aside>
  );
};

export default SocialSidebar;
