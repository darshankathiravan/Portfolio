"use client"; // Required for client-side functionality

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path); // Programmatically navigate to the given path
  };
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <nav className="p-6 flex justify-between sticky top-0 bg-PrimaryBgLight dark:bg-PrimaryBgDark z-50 rounded-2xl border-0 text-lg">
      <span className="text-left"> Darshan K </span>
      <ul className="flex text-right gap-5">
        <li>
          <button onClick={() => navigateTo("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/resume")}>Resume</button>
        </li>
        <li>
          <button onClick={() => navigateTo("/contact")}>Contact</button>
        </li>
        <li>
          <button onClick={toggleTheme} className="p-1 -mt-1 border rounded">
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
