import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import resumePDF from "../assets/Laxman_Kale_Resume.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 px-6 pt-28 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"
    >
      <div className="absolute inset-x-0 top-20 h-32 bg-gradient-to-r from-blue-200/40 via-cyan-100/40 to-emerald-200/40 blur-2xl dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-emerald-900/20" />
      <div className="mx-auto w-full max-w-5xl pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            Java Developer at Zest India IT Services
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            Java Backend Developer
          </p>

          <h1 className="mx-auto max-w-4xl font-outfit text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Hi, I'm <span className="text-gradient">Laxman Kale</span>. Java Developer building
            scalable backend applications.
          </h1>

          <div className="mt-6 min-h-8 text-lg font-medium text-slate-600 md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "Spring Boot REST APIs",
                  "Kafka, Docker, Microservices",
                  "Java, Hibernate, JPA, MySQL",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            MCA graduate and Java Developer experienced in Spring Boot, REST APIs, Hibernate/JPA,
            Kafka, Docker, and database-driven enterprise workflows.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg accent-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue-700/30"
            >
              Contact Me <FaEnvelope className="text-xs" />
            </Link>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <FaDownload className="text-xs" /> View Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" /> Pune, India
            </span>
            <span>Java | Spring Boot | React</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
