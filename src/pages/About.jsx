import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaServer } from "react-icons/fa";

const highlights = [
  { icon: <FaBriefcase />, label: "Current Role", detail: "Java Developer" },
  { icon: <FaServer />, label: "Backend Focused", detail: "Java and Spring Boot" },
  { icon: <FaCode />, label: "API Driven", detail: "REST APIs, Kafka, Docker, and databases" },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper section-muted relative">
      <div className="orb orb-blue absolute -right-20 top-20 h-48 w-48" style={{ animationDelay: "1s" }} />
      <div className="orb orb-emerald absolute -left-16 bottom-20 h-40 w-40" style={{ animationDelay: "3s" }} />

      <p className="section-kicker">About</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Java Developer focused on backend engineering
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        I build backend services with a focus on clean API design, reliable data flow, and
        maintainable application architecture.
      </motion.p>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="surface-card overflow-hidden p-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-2 w-full accent-gradient" />
          <div className="p-8 md:p-10">
            <h3 className="mb-6 font-outfit text-3xl font-bold text-slate-900 dark:text-white">
              Profile Summary
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Laxman Kale</span>, a Java
                Developer working on scalable REST APIs, microservices, database integration, and
                enterprise backend workflows.
              </p>
              <p>
                My core stack includes Java, Spring Boot, Hibernate/JPA, Kafka, Docker, MySQL,
                PostgreSQL, and React.js for full-stack API integration.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="surface-card group flex items-start gap-5 p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${
                  i === 0
                    ? "bg-indigo-100/80 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 group-hover:shadow-indigo-200/50"
                    : i === 1
                      ? "bg-purple-100/80 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 group-hover:shadow-purple-200/50"
                      : "bg-pink-100/80 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400 group-hover:shadow-pink-200/50"
                }`}
              >
                {h.icon}
              </span>
              <div>
                <h4 className="font-outfit text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{h.label}</h4>
                <p className="mt-2 text-base leading-relaxed text-slate-500 dark:text-slate-400">{h.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
