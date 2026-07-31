import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2026 - Present",
    role: "Java Developer",
    company: "Zest India IT Services",
    location: "Pune, India",
    details: [
      "Developing scalable microservices and REST APIs with Java, Spring Boot, Hibernate, and JPA.",
      "Working with Apache Kafka for asynchronous communication across distributed services.",
      "Designing and integrating backend APIs for business workflows and data processing.",
      "Containerizing applications with Docker across development and staging environments.",
      "Debugging payload, SQL, and inter-service communication issues with structured logging.",
      "Contributing through sprint planning, code reviews, and Git-based collaboration.",
    ],
  },
  {
    period: "Oct 2025 - Dec 2025",
    role: "Software Developer Intern",
    company: "Infosys Springboard",
    location: "Remote",
    details: [
      "Built and enhanced RESTful APIs for the Hire A Helper application.",
      "Standardized API contracts for consistent request, response, and validation handling.",
      "Integrated backend APIs with centralized exception handling.",
      "Worked in Agile sprint cycles through pull requests, bug fixes, and merge conflict resolution.",
    ],
  },
  {
    period: "Jul 2025 - Sept 2025",
    role: "Java Developer Intern",
    company: "Bentork Industries LLP",
    location: "Pune, India",
    details: [
      "Developed Users, Sessions, and Payments modules using Spring Boot.",
      "Implemented session lifecycle management with wallet validation and session state handling.",
      "Worked with REST APIs, layered architecture, and MySQL integration.",
      "Resolved payload, SQL, and timeout-related issues using Postman and structured logging.",
      "Managed feature work and fixes with Git branches and pull requests.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper relative">
      <p className="section-kicker">Experience</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        Experience shaped by dependable delivery.
      </motion.h2>
      <p className="section-subtitle">
        A growing record of backend work across APIs, distributed systems, collaboration, and practical
        problem-solving.
      </p>

      <div className="experience-timeline mx-auto max-w-6xl">
        <motion.div
          className="experience-progress"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        />

        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            className="experience-entry"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="experience-rail">
              <span className="experience-index">0{index + 1}</span>
              <span className="experience-marker" aria-hidden="true" />
            </div>

            <div className="experience-content">
              <div className="border-b border-stone-300 pb-6 dark:border-stone-700">
                <div>
                  <p className="experience-meta">{experience.period}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-stone-950 dark:text-stone-50">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-base font-medium text-stone-700 dark:text-stone-300">
                    {experience.company} <span className="text-stone-400">/</span> {experience.location}
                  </p>
                </div>
              </div>

              <ul className="experience-details">
                {experience.details.map((detail, detailIndex) => (
                  <motion.li
                    key={detail}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.14 + detailIndex * 0.05, duration: 0.45 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}