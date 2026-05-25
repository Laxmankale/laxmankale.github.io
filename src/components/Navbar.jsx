import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

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

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm shadow-slate-200/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth
          duration={600}
          className="cursor-pointer font-outfit text-xl font-bold tracking-tight text-slate-950"
        >
          Laxman<span className="text-accent">.</span>
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

        <button
          onClick={() => setOpen(!open)}
          className="text-xl text-slate-700 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
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
