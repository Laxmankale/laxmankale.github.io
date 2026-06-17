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
    "bg-indigo-600 shadow-indigo-400/50",
    "bg-purple-600 shadow-purple-400/50",
    "bg-pink-500 shadow-pink-400/50",
  ];

  const badgeColors = [
    "border-indigo-200/80 bg-indigo-50/80 text-indigo-700 dark:border-indigo-800/50 dark:bg-indigo-950/40 dark:text-indigo-300",
    "border-purple-200/80 bg-purple-50/80 text-purple-700 dark:border-purple-800/50 dark:bg-purple-950/40 dark:text-purple-300",
    "border-pink-200/80 bg-pink-50/80 text-pink-700 dark:border-pink-800/50 dark:bg-pink-950/40 dark:text-pink-300",
  ];

  return (
    <section id="experience" className="section-wrapper section-muted relative">
      <div className="orb orb-emerald absolute -right-10 top-40 h-48 w-48" style={{ animationDelay: "1s", background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)" }} />

      <p className="section-kicker">Experience</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Professional backend development experience
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Current and internship experience across Java microservices, REST APIs, Kafka, Docker,
        database integration, and Agile delivery workflows.
      </motion.p>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-[27px] top-4 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 rounded-full" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="relative pl-16 group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              <div
                className={`absolute left-[16px] top-4 h-7 w-7 rounded-full shadow-lg ${dotColors[index]} flex items-center justify-center ring-4 ring-white dark:ring-slate-950 transition-transform duration-300 group-hover:scale-125 z-10`}
              >
                <FaBriefcase className="text-[10px] text-white" />
              </div>

              <div className="surface-card overflow-hidden">
                <div className="p-8">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {exp.role}
                      </h3>
                      <p className="mt-2 text-base font-semibold text-slate-500 dark:text-slate-400">{exp.company}</p>
                    </div>
                    <span className={`w-fit rounded-full border px-4 py-2 text-sm font-bold shadow-sm ${badgeColors[index]}`}>
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {exp.details.map((point) => (
                      <li key={point} className="flex gap-4">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500 transition-transform duration-300 group-hover:scale-150" />
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
