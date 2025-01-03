"use client"; // Required for client-side functionality

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path); // Programmatically navigate to the given path
  };

  return (
    <nav className="p-6 flex justify-between sticky top-0 bg-black z-50">
      <span className="text-white text-left text-lg"> Darshan K </span>
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
      </ul>
    </nav>
  );
};

export default Navbar;
