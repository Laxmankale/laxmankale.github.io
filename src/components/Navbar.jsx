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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-indigo-100/50 bg-white/80 shadow-sm shadow-indigo-100/30 backdrop-blur-xl transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-slate-950/50">
      <div className="h-1.5 w-full accent-gradient" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth
          duration={600}
          className="group cursor-pointer font-outfit text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white"
        >
          Portfolio<span className="text-gradient transition-transform duration-300 group-hover:scale-125 inline-block">.</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-bold tracking-wide text-slate-600 dark:text-slate-300 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="!text-indigo-600 dark:!text-indigo-400 after:!w-full after:!bg-indigo-600 dark:after:!bg-indigo-400"
                className="relative cursor-pointer transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400
                  after:absolute after:-bottom-1.5 after:left-0 after:h-[3px] after:w-0 after:rounded-full
                  after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md hover:shadow-indigo-100/50 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-indigo-500/50 dark:hover:bg-slate-700 dark:hover:text-indigo-400 dark:hover:shadow-indigo-900/30"
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            type="button"
          >
            {darkMode ? <FaSun className="transition-transform duration-500 group-hover:rotate-90" /> : <FaMoon className="transition-transform duration-500 group-hover:-rotate-12" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-slate-700 dark:text-slate-200 transition-transform duration-300 hover:scale-110 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <FaTimes className="animate-in fade-in spin-in-90" /> : <FaBars className="animate-in fade-in" />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-slate-200/80 bg-white/95 px-6 pb-6 pt-4 text-base font-bold text-slate-600 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95 dark:text-slate-300 md:hidden shadow-xl animate-in slide-in-from-top-4 duration-300">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
                className="block cursor-pointer rounded-lg px-4 py-3 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600 hover:pl-6 dark:hover:bg-slate-800/80 dark:hover:text-indigo-400"
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
