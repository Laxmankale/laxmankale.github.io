import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaUserGraduate } from "react-icons/fa";

const highlights = [
  { icon: <FaUserGraduate />, label: "MCA Graduate", detail: "Strong CS foundation" },
  { icon: <FaServer />, label: "Backend Focused", detail: "Java and Spring Boot" },
  { icon: <FaCode />, label: "Full-Stack Ready", detail: "React and REST integration" },
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
        Practical engineering with a focus on clean backend systems
      </motion.h2>
      <p className="section-subtitle">
        I enjoy turning requirements into structured APIs, reliable data models, and user-facing
        features that are easy to maintain.
      </p>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="surface-card p-6 md:p-8"
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
              I'm <span className="font-semibold text-slate-950">Laxman Kale</span>, a backend
              developer specializing in Java, Spring Boot, RESTful API design, and database-driven
              applications.
            </p>
            <p>
              I work with Java, Spring Boot, Hibernate/JPA, REST APIs, MySQL, and React.js, with a
              strong foundation in Core Java, OOP, MVC architecture, and database design.
            </p>
            <p>
              My goal is to contribute to teams building efficient backend systems, reliable API
              integrations, and scalable application features.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="surface-card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-slate-200/80"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-lg text-blue-700">
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
