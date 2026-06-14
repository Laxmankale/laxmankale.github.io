import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

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
      featured: true,
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
      featured: false,
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
      featured: false,
    },
  ];

  const cardGradients = [
    "from-blue-600 via-cyan-500 to-blue-700",
    "from-emerald-600 via-teal-500 to-emerald-700",
    "from-amber-500 via-orange-500 to-amber-600",
  ];

  const headerBgs = [
    "from-blue-600/10 to-cyan-500/5 dark:from-blue-900/30 dark:to-cyan-900/10",
    "from-emerald-600/10 to-teal-500/5 dark:from-emerald-900/30 dark:to-teal-900/10",
    "from-amber-500/10 to-orange-500/5 dark:from-amber-900/30 dark:to-orange-900/10",
  ];

  const numberColors = [
    "bg-blue-600 shadow-blue-400/40",
    "bg-emerald-600 shadow-emerald-400/40",
    "bg-amber-500 shadow-amber-400/40",
  ];

  return (
    <section id="projects" className="section-wrapper section-muted relative">
      <div className="orb orb-cyan absolute -right-20 top-40 h-56 w-56" style={{ animationDelay: "0s" }} />
      <div className="orb orb-emerald absolute left-10 bottom-20 h-40 w-40" style={{ animationDelay: "3s" }} />

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

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/40 dark:hover:shadow-blue-950/30"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${cardGradients[index]}`} />

            <div className={`relative border-b border-slate-200/40 bg-gradient-to-br p-5 dark:border-slate-700/30 ${headerBgs[index]}`}>
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl font-outfit text-sm font-bold text-white shadow-lg ${numberColors[index]}`}
                >
                  0{index + 1}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50/80 px-3 py-1 text-xs font-semibold text-amber-700 dark:border-amber-700/50 dark:bg-amber-950/40 dark:text-amber-300">
                    <FaStar className="text-[10px]" /> Featured
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-outfit text-xl font-semibold leading-7 text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">{project.detail}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 backdrop-blur-sm transition-all duration-200 hover:border-blue-200 hover:text-blue-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-blue-600/50 dark:hover:text-blue-400"
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
                  className="inline-flex items-center gap-2 text-slate-600 transition-all duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <FaGithub /> Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 transition-all duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
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
