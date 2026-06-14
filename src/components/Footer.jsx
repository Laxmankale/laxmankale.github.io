import React from "react";
import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

const socials = [
  { href: "https://github.com/Laxmankale", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/lakhan-kale-29886123b/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:lakhankale888@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/60 bg-white/80 px-6 py-10 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-950/80">
      <div className="absolute -top-px left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 40" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,20 C200,40 400,0 600,20 C800,40 1000,0 1200,20 L1200,0 L0,0 Z"
            className="fill-slate-50 dark:fill-slate-950"
          />
        </svg>
      </div>

      <div className="mx-auto mb-6 h-1 w-20 rounded-full accent-gradient" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-outfit text-lg font-bold text-slate-900 dark:text-white">
            <span className="text-gradient">L</span>axman Kale
          </p>
          <p className="mt-1 flex items-center justify-center gap-1 text-sm text-slate-500 dark:text-slate-400 sm:justify-start">
            Built with <FaHeart className="text-xs text-red-400" /> using React & Tailwind CSS
          </p>
          <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-500 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md hover:shadow-blue-100/40 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:border-blue-600/50 dark:hover:bg-slate-700 dark:hover:text-blue-400"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
