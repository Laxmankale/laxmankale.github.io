import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaServer, FaCode } from "react-icons/fa";

const highlights = [
  { icon: <FaUserGraduate />, label: "MCA Graduate" },
  { icon: <FaServer />, label: "Backend Focused" },
  { icon: <FaCode />, label: "Full-Stack Ready" },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      {/* Orb */}
      <div className="orb w-80 h-80 bg-violet-600 top-10 right-0" />

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-gradient">Me</span>
      </motion.h2>

      {/* Highlight chips */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {highlights.map((h, i) => (
          <div
            key={i}
            className="glass flex items-center gap-3 px-5 py-3 text-sm text-slate-300"
          >
            <span className="text-cyan-400 text-lg">{h.icon}</span>
            {h.label}
          </div>
        ))}
      </motion.div>

      {/* Body text */}
      <motion.div
        className="max-w-3xl mx-auto text-center leading-relaxed text-slate-400 space-y-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p>
          I'm <span className="text-gradient font-semibold">Laxman Kale</span>, a passionate{" "}
          <span className="text-slate-200">Backend Developer</span> specializing in Java,
          Spring Boot, and RESTful API design. I enjoy building clean, scalable systems and
          integrating backend modules that make real-world impact.
        </p>

        <p>
          I'm experienced in working with modern technologies such as{" "}
          <span className="text-slate-200">Java</span>,{" "}
          <span className="text-slate-200">Spring Boot</span>,{" "}
          <span className="text-slate-200">Hibernate / JPA</span>,{" "}
          <span className="text-slate-200">REST APIs</span>,{" "}
          <span className="text-slate-200">MySQL</span>, and{" "}
          <span className="text-slate-200">React.js</span>. I have strong foundations in{" "}
          <span className="text-slate-200">Core Java, OOP, MVC architecture</span>, and{" "}
          <span className="text-slate-200">database design</span>.
        </p>

        <p>
          My goal is to join a team where I can contribute to building efficient backend systems,
          optimize performance, and continuously grow as a software engineer.
        </p>
      </motion.div>
    </section>
  );
}
