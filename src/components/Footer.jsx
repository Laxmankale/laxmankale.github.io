import React from "react";
import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

const socials = [
  { href: "https://github.com/Laxmankale", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/lakhan-kale-29886123b/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:lakhankale888@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/60 bg-white/80 px-6 py-12 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/80 transition-colors duration-300">
      <div className="absolute -top-px left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 40" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,20 C200,40 400,0 600,20 C800,40 1000,0 1200,20 L1200,0 L0,0 Z"
            className="fill-slate-50 dark:fill-slate-950 transition-colors duration-300"
          />
        </svg>
      </div>

      <div className="mx-auto mb-8 h-1.5 w-24 rounded-full accent-gradient" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-outfit text-2xl font-extrabold text-slate-900 dark:text-white group">
            <span className="text-gradient inline-block transition-transform duration-300 group-hover:scale-110">L</span>axman Kale
          </p>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-base font-medium text-slate-500 dark:text-slate-400 sm:justify-start">
            Built with <FaHeart className="text-sm text-pink-500 animate-pulse" /> using React & Tailwind CSS
          </p>
          <p className="mt-1 text-sm font-medium text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-lg text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100/50 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:border-indigo-500/50 dark:hover:bg-slate-700 dark:hover:text-indigo-400 dark:hover:shadow-indigo-900/30"
              aria-label={s.label}
            >
              <span className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                {s.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
