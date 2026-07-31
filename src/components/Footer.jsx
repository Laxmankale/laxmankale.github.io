import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { href: "https://github.com/Laxmankale", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/lakhan-kale-29886123b/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:lakhankale888@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-300 bg-[#e8e5dc] px-6 py-10 dark:border-stone-700 dark:bg-[#11110f]">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-stone-500">Laxman Kale / Portfolio</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600 dark:text-stone-400">
            Built with care for clear conversations around Java backend development and thoughtful
            full-stack work.
          </p>
          <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-stone-500">
            Copyright {new Date().getFullYear()} Laxman Kale
          </p>
        </div>

        <div className="flex gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-stone-400 text-stone-700 transition-all hover:-translate-y-1 hover:border-stone-950 hover:bg-lime-200 hover:text-stone-950 dark:border-stone-600 dark:text-stone-300 dark:hover:border-stone-100"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}