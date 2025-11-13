import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0c0c0c]/90 backdrop-blur-md border-b border-gray-800/60 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        
        <ul className="flex gap-10 text-gray-300 font-medium text-sm md:text-base">

          <li className="cursor-pointer hover:text-yellow-400 transition">
            <Link to="home" smooth={true} duration={600} offset={-80}>
              Home
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            <Link to="about" smooth={true} duration={600} offset={-80}>
              About
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            <Link to="experience" smooth={true} duration={600} offset={-80}>
              Experience
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            <Link to="education" smooth={true} duration={600} offset={-80}>
              Education
            </Link>
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            <Link to="projects" smooth={true} duration={600} offset={-80}>
              Projects
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
