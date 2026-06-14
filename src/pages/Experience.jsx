import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Java Developer",
      company: "Zest India IT Services, Pune",
      duration: "March 2026 - Present",
      details: [
        "Developing scalable microservices and REST APIs using Java, Spring Boot, Hibernate, and JPA.",
        "Working with Apache Kafka for asynchronous event-driven communication across distributed services.",
        "Designing and integrating backend APIs for enterprise-level business workflows and data processing.",
        "Containerizing backend applications using Docker across development and staging environments.",
        "Debugging API payload mismatches, SQL query issues, and inter-service communication failures.",
        "Participating in Agile sprint planning, code reviews, and Git-based collaboration workflows.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Infosys Springboard, Remote",
      duration: "Oct 2025 - Dec 2025",
      details: [
        "Built and enhanced RESTful APIs for a MERN-based application called Hire A Helper.",
        "Standardized API contracts for consistent request/response structures and validation handling.",
        "Integrated backend APIs with centralized exception-handling mechanisms.",
        "Collaborated in Agile sprint cycles through pull requests, bug fixes, and merge conflict resolution.",
      ],
    },
    {
      role: "Java Developer Intern",
      company: "Bentork Industries LLP, Pune",
      duration: "July 2025 - Sept 2025",
      details: [
        "Developed backend modules including Users, Sessions, and Payments using Spring Boot.",
        "Implemented session lifecycle management with wallet validation and session state handling.",
        "Worked with REST APIs, layered architecture, and MySQL database integration.",
        "Debugged API payload mismatches, SQL errors, and timeout-related backend failures using Postman and structured logging.",
        "Managed feature development and issue fixes using Git branches and pull requests.",
      ],
    },
  ];

  const dotColors = [
    "bg-blue-600 shadow-blue-400/50",
    "bg-emerald-600 shadow-emerald-400/50",
    "bg-amber-500 shadow-amber-400/50",
  ];

  const badgeColors = [
    "border-blue-200/80 bg-blue-50/80 text-blue-700 dark:border-blue-800/50 dark:bg-blue-950/40 dark:text-blue-300",
    "border-emerald-200/80 bg-emerald-50/80 text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-300",
    "border-amber-200/80 bg-amber-50/80 text-amber-700 dark:border-amber-800/50 dark:bg-amber-950/40 dark:text-amber-300",
  ];

  return (
    <section id="experience" className="section-wrapper section-muted relative">
      <div className="orb orb-emerald absolute -right-10 top-40 h-48 w-48" style={{ animationDelay: "1s" }} />

      <p className="section-kicker">Experience</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Professional backend development experience
      </motion.h2>
      <p className="section-subtitle">
        Current and internship experience across Java microservices, REST APIs, Kafka, Docker,
        database integration, and Agile delivery workflows.
      </p>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-400 via-emerald-400 to-amber-300 dark:from-blue-600 dark:via-emerald-600 dark:to-amber-500" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="relative pl-14"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div
                className={`absolute left-[12px] top-2 h-6 w-6 rounded-full shadow-lg ${dotColors[index]} flex items-center justify-center ring-4 ring-white dark:ring-slate-950`}
              >
                <FaBriefcase className="text-[8px] text-white" />
              </div>

              <div className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-100/30 dark:hover:shadow-blue-950/20">
                <div className="p-6">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-outfit text-xl font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{exp.company}</p>
                    </div>
                    <span className={`w-fit rounded-full border px-3.5 py-1.5 text-xs font-semibold ${badgeColors[index]}`}>
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {exp.details.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
