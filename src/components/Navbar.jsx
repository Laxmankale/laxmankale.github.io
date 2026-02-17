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
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={600}
          className="font-outfit text-xl font-bold tracking-tight cursor-pointer"
        >
          <span className="text-gradient">&lt;LK /&gt;</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="!text-cyan-400"
                className="cursor-pointer hover:text-cyan-400 transition-colors duration-200 relative
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  after:bg-gradient-to-r after:from-cyan-400 after:to-violet-500
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 text-xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-slate-400 text-sm font-medium bg-slate-950/95 backdrop-blur-xl border-t border-white/[0.06]">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-cyan-400 transition-colors cursor-pointer"
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
