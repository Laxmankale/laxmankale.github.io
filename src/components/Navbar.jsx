import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "projects", label: "Projects" },
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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-blue-100 bg-white/90 shadow-sm shadow-blue-100/60 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-slate-950/60">
      <div className="h-1 w-full accent-gradient" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth
          duration={600}
          className="cursor-pointer font-outfit text-xl font-bold tracking-tight text-slate-950"
        >
          Portfolio<span className="text-gradient">.</span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="!text-blue-700"
                className="relative cursor-pointer transition-colors duration-200 hover:text-blue-700
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                  after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-800"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            type="button"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-xl text-slate-700 focus:outline-none md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="flex flex-col gap-3 border-t border-slate-200 bg-white px-6 pb-6 text-sm font-medium text-slate-600 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
                className="block cursor-pointer py-2 transition-colors hover:text-blue-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
