import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Back-End Developer Intern",
      company: "Bentork Industries LLP, Pune",
      duration: "July 2025 – Sept 2025",
      details: [
        "Implemented microservice-based backend with clear module separation (users, sessions, payments).",
        "Built session management logic: handled charging session start/stop, wallet validation, and transactions.",
        "Debugged API failures and SQL queries using logs and Postman testing.",
        "Collaborated with frontend teams for smooth API integration and feature delivery.",
      ],
    },
    {
      role: "Back-End Developer Intern",
      company: "Infosys Springboard (Remote)",
      duration: "Oct 2025 – Dec 2025",
      details: [
        'Collaborated in a cross-functional team to design and develop "Hire A Helper" full-stack app using the MERN stack.',
        "Defined and implemented backend API specifications ensuring seamless frontend communication.",
        "Integrated new features, resolved merge conflicts, and participated in agile sprint meetings.",
        "Followed best Git workflows using pull requests and code reviews.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-wrapper">
      {/* Orb */}
      <div className="orb w-80 h-80 bg-cyan-500 top-20 -right-20" />

      <motion.h2
        className="section-heading flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FaBriefcase className="text-cyan-400" />
        <span>
          <span className="text-gradient">Experience</span>
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Connector line */}
        <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-500/30 to-transparent" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-12 md:pl-14"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[10px] md:left-[14px] top-1 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-slate-950" />

              <div className="glass p-6 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="font-outfit text-xl font-semibold text-slate-100 mb-1">
                  {exp.role}
                </h3>
                <p className="text-slate-500 text-sm mb-3">
                  {exp.company}{" "}
                  <span className="text-cyan-400/80">· {exp.duration}</span>
                </p>
                <ul className="space-y-2 text-sm text-slate-400 leading-relaxed">
                  {exp.details.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400/60 mt-1 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
