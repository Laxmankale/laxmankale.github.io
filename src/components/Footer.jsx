import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/[0.06] pt-10 pb-8 px-6">
      {/* Gradient accent bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
        {/* Social row */}
        <div className="flex gap-5">
          <a
            href="https://github.com/Laxmankale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lakhan-kale-29886123b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:lakhankale888@gmail.com"
            className="text-slate-500 hover:text-cyan-400 transition-colors text-lg"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} Laxman Kale · Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
