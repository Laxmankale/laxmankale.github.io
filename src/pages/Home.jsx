import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowRight, FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import resumePDF from "../assets/Laxman_Kale_Resume.pdf";
import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-slate-50 px-6 pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 pb-16 md:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to backend developer opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            Java Backend Developer
          </p>

          <h1 className="max-w-4xl font-outfit text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Hi, I'm Laxman Kale. I build reliable backend systems and clean web experiences.
          </h1>

          <div className="mt-6 min-h-8 text-lg font-medium text-slate-600 md:text-xl">
            <Typewriter
              options={{
                strings: [
                  "Spring Boot REST APIs",
                  "Java, Hibernate, MySQL",
                  "Scalable full-stack applications",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            MCA graduate focused on building maintainable APIs, database-backed applications,
            and practical full-stack features with Java, Spring Boot, React, and MySQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-700/20 transition-all duration-200 hover:bg-blue-800 hover:-translate-y-0.5"
            >
              View Projects <FaArrowRight className="text-xs" />
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

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" /> Pune, India
            </span>
            <span>Java | Spring Boot | React</span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <div className="absolute -left-5 top-10 hidden rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-200/70 md:block">
            REST API design
          </div>
          <div className="absolute -right-5 bottom-12 hidden rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-200/70 md:block">
            Clean architecture
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70">
            <img
              src={profileImg}
              alt="Laxman Kale"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
