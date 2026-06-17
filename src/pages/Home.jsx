import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import resumePDF from "../assets/Laxman_Kale_Resume.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 transition-colors duration-300"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 30%, #fdf4ff 60%, #f8fafc 100%)",
      }}
    >
      <div className="absolute inset-0 hidden dark:block" style={{
        background: "linear-gradient(135deg, #020617 0%, #1e1b4b 30%, #2e1065 60%, #020617 100%)",
      }} />

      <div className="orb orb-blue absolute -left-32 top-1/4 h-72 w-72" style={{ animationDelay: "0s", background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0) 70%)" }} />
      <div className="orb orb-cyan absolute right-0 top-1/3 h-56 w-56" style={{ animationDelay: "2s", background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)" }} />
      <div className="orb orb-emerald absolute bottom-1/4 left-1/3 h-64 w-64" style={{ animationDelay: "4s", background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)" }} />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle, #1e293b 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative z-10 mx-auto w-full max-w-5xl pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-5 py-2.5 text-sm font-medium text-indigo-700 backdrop-blur-sm dark:border-indigo-800/50 dark:bg-indigo-950/40 dark:text-indigo-300"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <h1 className="mx-auto max-w-4xl font-outfit text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl">
            Hi, I'm{" "}
            <span className="text-gradient drop-shadow-sm">Laxman Kale</span>
            <span className="text-indigo-400 dark:text-indigo-500 animate-pulse">_</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
            MCA graduate and Java Developer experienced in Spring Boot, REST APIs, Hibernate/JPA,
            Kafka, Docker, and database-driven enterprise workflows.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-2xl accent-gradient px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-600/40 active:scale-95"
            >
              Contact Me
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white/50 px-8 py-4 text-base font-bold text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:bg-indigo-50/80 hover:text-indigo-600 hover:shadow-xl hover:shadow-indigo-100/50 active:scale-95 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:border-indigo-500/50 dark:hover:bg-slate-700/80 dark:hover:text-indigo-300 dark:hover:shadow-indigo-900/30"
            >
              <FaDownload className="text-sm transition-transform duration-300 group-hover:-translate-y-1" /> View Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500 dark:text-slate-400"
          >
            <span className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <FaMapMarkerAlt className="text-indigo-500 text-lg" /> Pune, India
            </span>
            <span className="h-5 w-px bg-slate-300 dark:bg-slate-700" />
            <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Java · Spring Boot · React</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
