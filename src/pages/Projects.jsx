import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Share2Go - Ride-Sharing Web App",
      description:
        "Full-stack ride-sharing platform with Driver and Passenger roles, secure authentication, ride publishing, booking management, and status-based alerts.",
      detail:
        "Built with layered Spring Boot APIs, JPA/Hibernate, MySQL, React Context API, Axios, and a responsive Tailwind interface.",
      tech: ["Java", "Spring Boot", "React.js", "Tailwind CSS", "MySQL", "REST APIs"],
      github: "https://github.com/Laxmankale/share2ride_Ride_Sharing_App",
      live: "#",
    },
    {
      title: "Sweet Shop Management System",
      description:
        "Inventory and sales platform for searching, viewing, and purchasing sweets with product management and stock tracking workflows.",
      detail:
        "Implemented REST APIs with Spring Boot, DTO mapping, layered architecture, JUnit/Mockito tests, Postman validation, and React integration.",
      tech: ["Spring Boot", "React.js", "Tailwind CSS", "MySQL", "JUnit", "Mockito"],
      github: "https://github.com/Laxmankale/sweet-shop-management-system",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion to present projects, skills, education, and contact details.",
      detail:
        "Designed with reusable components, optimized asset loading, responsive sections, and polished interaction states.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Laxmankale/portfolio",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section-wrapper section-muted">
      <p className="section-kicker">Projects</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Selected work with clear technical outcomes
      </motion.h2>
      <p className="section-subtitle">
        Project cards emphasize what was built, the engineering decisions involved, and the stack
        used to deliver each application.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="surface-card flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/80"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="border-b border-slate-200 bg-slate-50 p-5">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 font-outfit text-sm font-bold text-white">
                0{index + 1}
              </span>
              <h3 className="font-outfit text-xl font-semibold leading-7 text-slate-950">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-7 text-slate-600">{project.description}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.detail}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-5 pt-7 text-sm font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-blue-700"
                >
                  <FaGithub /> Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-blue-700"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
