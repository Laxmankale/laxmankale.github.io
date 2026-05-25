import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Back-End Developer Intern",
      company: "Bentork Industries LLP, Pune",
      duration: "July 2025 - Sept 2025",
      details: [
        "Implemented microservice-based backend with clear module separation for users, sessions, and payments.",
        "Built session management logic for charging session start/stop, wallet validation, and transactions.",
        "Debugged API failures and SQL queries using logs and Postman testing.",
        "Collaborated with frontend teams for smooth API integration and feature delivery.",
      ],
    },
    {
      role: "Back-End Developer Intern",
      company: "Infosys Springboard (Remote)",
      duration: "Oct 2025 - Dec 2025",
      details: [
        'Collaborated in a cross-functional team to design and develop "Hire A Helper" full-stack app using the MERN stack.',
        "Defined and implemented backend API specifications for seamless frontend communication.",
        "Integrated new features, resolved merge conflicts, and participated in agile sprint meetings.",
        "Followed Git workflows using pull requests and code reviews.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-wrapper section-muted">
      <p className="section-kicker">Experience</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Internship work and backend responsibilities
      </motion.h2>
      <p className="section-subtitle">
        Hands-on experience building APIs, debugging backend flows, and collaborating across
        frontend and backend work.
      </p>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-slate-200" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="relative pl-14"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-700 ring-8 ring-white">
                <FaBriefcase />
              </div>

              <div className="surface-card p-6">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-outfit text-xl font-semibold text-slate-950">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">{exp.company}</p>
                  </div>
                  <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-600">
                  {exp.details.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
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
