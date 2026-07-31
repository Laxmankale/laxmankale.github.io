import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowDown, FaArrowRight, FaDownload } from "react-icons/fa";
import resumePDF from "../assets/Laxman_Kale_Resume.pdf";

export default function Home() {
  return (
    <section id="home" className="hero-editorial relative flex min-h-screen items-center overflow-hidden px-6 pb-14 pt-28">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="flex items-center justify-between border-b border-stone-300 pb-5"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hero-kicker">Java Developer</span>
          <span className="hero-meta">Pune, India / 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease: "easeOut" }}
        >
          <div className="mt-12 inline-flex items-center gap-2 editorial-availability">
            Available for opportunities
          </div>

          <h1 className="hero-title mt-7">
            Reliable systems.<br />
            Built to <em>last.</em>
          </h1>

          <div className="mt-10 md:ml-[32%]">
            <p className="hero-copy">
              I&apos;m Laxman Kale, a Java Developer focused on dependable backend systems,
              thoughtful integrations, and software that remains clear as it grows.
            </p>
            <div className="hero-actions mt-7">
              <Link
                to="projects"
                smooth
                duration={600}
                offset={-76}
                className="editorial-button cursor-pointer px-5 py-3"
              >
                View selected work <FaArrowDown className="text-xs" />
              </Link>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-button editorial-button--outline px-5 py-3"
              >
                <FaDownload className="text-xs" /> View resume
              </a>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-76}
                className="editorial-button editorial-button--outline cursor-pointer px-5 py-3"
              >
                Let&apos;s talk <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-summary mt-20 grid gap-6 pt-6 sm:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65, ease: "easeOut" }}
        >
          <div className="hero-summary-item">
            <strong>Backend systems</strong>
            Java, Spring Boot, REST APIs
          </div>
          <div className="hero-summary-item">
            <strong>Reliable delivery</strong>
            Data, messaging, and clean workflows
          </div>
          <div className="hero-summary-item">
            <strong>Thoughtful interface</strong>
            Clear, modern, and easy to explore
          </div>
        </motion.div>
      </div>
    </section>
  );
}