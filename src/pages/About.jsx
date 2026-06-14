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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Java Developer focused on backend engineering
      </motion.h2>
      <p className="section-subtitle">
        I build backend services with a focus on clean API design, reliable data flow, and
        maintainable application architecture.
      </p>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="glass-card overflow-hidden p-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-1.5 w-full accent-gradient" />
          <div className="p-6 md:p-8">
            <h3 className="mb-4 font-outfit text-2xl font-bold text-slate-900 dark:text-white">
              Profile Summary
            </h3>
            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                I'm <span className="font-semibold text-slate-900 dark:text-white">Laxman Kale</span>, a Java
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

        <div className="grid gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="glass-card group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100/40 dark:hover:shadow-blue-950/20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg transition-all duration-300 group-hover:scale-110 ${
                  i === 0
                    ? "bg-blue-100/80 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                    : i === 1
                      ? "bg-emerald-100/80 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400"
                      : "bg-amber-100/80 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400"
                }`}
              >
                {h.icon}
              </span>
              <div>
                <h4 className="font-outfit text-lg font-semibold text-slate-900 dark:text-white">{h.label}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{h.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
