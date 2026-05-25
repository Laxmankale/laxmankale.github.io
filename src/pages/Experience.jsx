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

  const colorStyles = [
    "border-blue-100 bg-blue-50 text-blue-700",
    "border-emerald-100 bg-emerald-50 text-emerald-700",
    "border-amber-100 bg-amber-50 text-amber-700",
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
        Professional backend development experience
      </motion.h2>
      <p className="section-subtitle">
        Current and internship experience across Java microservices, REST APIs, Kafka, Docker,
        database integration, and Agile delivery workflows.
      </p>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-300 via-emerald-300 to-amber-200" />

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
              <div
                className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border ring-8 ring-white ${colorStyles[index]}`}
              >
                <FaBriefcase />
              </div>

              <div className="surface-card p-6 transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/70">
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
