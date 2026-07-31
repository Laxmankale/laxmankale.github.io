import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    category: "Full-stack ride-sharing platform",
    title: "Share2Go",
    description:
      "A ride-sharing application with secure authentication, driver and passenger flows, ride publishing, booking management, and status-based alerts.",
    outcome: "Clear booking workflows",
    tech: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    github: "https://github.com/Laxmankale/share2ride_Ride_Sharing_App",
  },
  {
    category: "Inventory and sales workflow",
    title: "Sweet Shop Management",
    description:
      "A product and stock management system for searching, purchasing, and maintaining inventory with a reliable API layer behind it.",
    outcome: "Practical stock visibility",
    tech: ["Spring Boot", "React", "MySQL", "JUnit", "Mockito"],
    github: "https://github.com/Laxmankale/sweet-shop-management-system",
  },
  {
    category: "Personal digital presence",
    title: "Portfolio Website",
    description:
      "A responsive portfolio that brings projects and experience together through clear hierarchy, calm visual detail, and deliberate interactions.",
    outcome: "A clearer first impression",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Laxmankale/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper relative">
      <p className="section-kicker">Selected work</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        Built to solve real problems, not just to ship.
      </motion.h2>
      <p className="section-subtitle">
        A selection of applications that show how I approach systems, implementation, and useful
        product outcomes.
      </p>

      <div className="mx-auto grid max-w-6xl gap-x-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card flex min-h-[25rem] flex-col px-1 py-6"
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="project-scan"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 + index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="flex items-start justify-between gap-4">
              <span className="project-number">0{index + 1}</span>
              <span className="project-label text-right text-stone-500">{project.category}</span>
            </div>
            <h3 className="mt-12 text-3xl font-semibold tracking-[-0.065em] text-stone-950 dark:text-stone-50">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-400">{project.description}</p>
            <div className="mt-6 border-l-2 border-lime-300 pl-3">
              <p className="project-label text-stone-500">Outcome</p>
              <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{project.outcome}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
              {project.tech.map((tech) => (
                <span key={tech} className="project-tech text-stone-500 dark:text-stone-400">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link mt-auto inline-flex items-center gap-2 pt-8"
            >
              <FaGithub /> View code <FaArrowRight className="text-xs" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}