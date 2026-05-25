import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaServer } from "react-icons/fa";

const highlights = [
  { icon: <FaBriefcase />, label: "Current Role", detail: "Java Developer at Zest India IT Services" },
  { icon: <FaServer />, label: "Backend Focused", detail: "Java and Spring Boot" },
  { icon: <FaCode />, label: "API Driven", detail: "REST APIs, Kafka, Docker, and databases" },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper section-muted">
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

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="surface-card border-l-4 border-l-blue-600 p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-4 font-outfit text-2xl font-bold text-slate-950">
            Profile Summary
          </h3>
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I'm <span className="font-semibold text-slate-950">Laxman Kale</span>, a Java
              Developer working on scalable REST APIs, microservices, database integration, and
              enterprise backend workflows.
            </p>
            <p>
              My core stack includes Java, Spring Boot, Hibernate/JPA, Kafka, Docker, MySQL,
              PostgreSQL, and React.js for full-stack API integration.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="surface-card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/80"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg ${
                  i === 0
                    ? "bg-blue-50 text-blue-700"
                    : i === 1
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                }`}
              >
                {h.icon}
              </span>
              <div>
                <h4 className="font-outfit text-lg font-semibold text-slate-950">{h.label}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">{h.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
