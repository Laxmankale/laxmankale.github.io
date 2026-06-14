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
        background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 30%, #ecfdf5 60%, #f8fafc 100%)",
      }}
    >
      <div className="absolute inset-0 hidden dark:block" style={{
        background: "linear-gradient(135deg, #020617 0%, #0f172a 30%, #022c22 60%, #020617 100%)",
      }} />

      <div className="orb orb-blue absolute -left-32 top-1/4 h-72 w-72" style={{ animationDelay: "0s" }} />
      <div className="orb orb-cyan absolute right-0 top-1/3 h-56 w-56" style={{ animationDelay: "2s" }} />
      <div className="orb orb-emerald absolute bottom-1/4 left-1/3 h-64 w-64" style={{ animationDelay: "4s" }} />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle, #1e293b 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative z-10 mx-auto w-full max-w-5xl pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-5 py-2.5 text-sm font-medium text-emerald-700 backdrop-blur-sm dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-300"
          >
            <span className="status-dot" />
            Available for Opportunities
          </motion.div>

          <h1 className="mx-auto max-w-4xl font-outfit text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Hi, I'm{" "}
            <span className="text-gradient">Laxman Kale</span>
            <span className="text-slate-300 dark:text-slate-600">.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400 md:text-lg">
            MCA graduate and Java Developer experienced in Spring Boot, REST APIs, Hibernate/JPA,
            Kafka, Docker, and database-driven enterprise workflows.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl accent-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Contact Me
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-100/50 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-400"
            >
              <FaDownload className="text-xs" /> View Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400 dark:text-slate-500">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> Pune, India
            </span>
            <span className="h-4 w-px bg-slate-300 dark:bg-slate-600" />
            <span>Java · Spring Boot · React</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
