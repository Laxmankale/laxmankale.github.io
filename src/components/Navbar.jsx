import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const links = [
  { to: "projects", label: "Work" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const shouldUseDark = savedTheme === "dark";
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
  };

  return (
    <nav className="editorial-nav fixed left-0 top-0 z-50 w-full backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth
          duration={600}
          className="flex cursor-pointer items-center gap-3 text-stone-950 dark:text-stone-50"
        >
          <span className="editorial-monogram">L</span>
          <span className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em]">
            Laxman Kale / Portfolio
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-76}
                spy
                activeClass="active"
                className="editorial-nav-link cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-76}
            className="hidden cursor-pointer editorial-availability sm:inline-flex"
          >
            Open to opportunities
          </Link>
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center border border-stone-300 text-sm text-stone-800 transition-colors hover:bg-lime-200 dark:border-stone-600 dark:text-stone-100 dark:hover:bg-lime-300 dark:hover:text-stone-950"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            type="button"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-xl text-stone-900 focus:outline-none dark:text-stone-100 md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="border-t border-stone-300 bg-[#f2f0e9] px-6 py-5 dark:border-stone-700 dark:bg-[#171715] md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-76}
                onClick={() => setOpen(false)}
                className="editorial-nav-link block cursor-pointer py-3"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}