"use client"; // Required for client-side functionality

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigateTo = (path) => {
    router.push(path);
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  // Theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle theme
    setIsSidebarOpen(false); // Close sidebar first
  };

  // Smooth scroll
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsSidebarOpen(false); // Close sidebar after scroll
  };

  return (
    <nav
      // style={{ transitionDuration: "30ms" }}
      className="p-6 flex justify-between items-center sticky top-0 z-50 border-0 text-lg bg-PrimaryBgLight dark:bg-PrimaryBgDark"
    >
      <span className="text-left animate-bounce font-semibold" onClick={(e)=>handleScroll(e, "home")}>@Darshan K</span>

      {/* Sidebar Toggle Button */}
      <button
        className="text-2xl md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-right gap-5 items-center font-semibold">
        <li>
          <button onClick={(e) => handleScroll(e, "home")}>Home</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, "projects")}>Projects</button>
        </li>
        <li>
          <button onClick={(e) => handleScroll(e, "contact")}>Contact</button>
        </li>
        <li>
          <button onClick={toggleTheme} className="flex items-center gap-2">
            {theme === "light" ? (
              <FaMoon className="text-gray-900 text-2xl" />
            ) : (
              <FaSun className="text-yellow-500 text-2xl" />
            )}
          </button>
        </li>
      </ul>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-PrimaryBgLight dark:bg-PrimaryBgDark w-64 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-400 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-xl font-bold">Menu</span>
          <button className="text-2xl" onClick={() => setIsSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-5 p-6">
          <li>
            <button onClick={(e) => handleScroll(e, "home")}>Home</button>
          </li>
          <li>
            <button onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={(e) => handleScroll(e, "contact")}>Contact</button>
          </li>
          <li>
            <button onClick={toggleTheme} className="flex items-center gap-2">
              {theme === "light" ? (
                <FaMoon className="text-gray-900 text-2xl" />
              ) : (
                <FaSun className="text-yellow-500 text-2xl" />
              )}
            </button>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
