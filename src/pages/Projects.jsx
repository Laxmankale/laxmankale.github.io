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
    "from-indigo-600 via-purple-500 to-indigo-700",
    "from-purple-600 via-fuchsia-500 to-purple-700",
    "from-pink-500 via-rose-500 to-pink-600",
  ];

  const headerBgs = [
    "from-indigo-600/10 to-purple-500/5 dark:from-indigo-900/30 dark:to-purple-900/10",
    "from-purple-600/10 to-fuchsia-500/5 dark:from-purple-900/30 dark:to-fuchsia-900/10",
    "from-pink-500/10 to-rose-500/5 dark:from-pink-900/30 dark:to-rose-900/10",
  ];

  const numberColors = [
    "bg-indigo-600 shadow-indigo-400/40",
    "bg-purple-600 shadow-purple-400/40",
    "bg-pink-500 shadow-pink-400/40",
  ];

  return (
    <section id="projects" className="section-wrapper section-muted relative">
      <div className="orb orb-cyan absolute -right-20 top-40 h-56 w-56" style={{ animationDelay: "0s", background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)" }} />
      <div className="orb orb-emerald absolute left-10 bottom-20 h-40 w-40" style={{ animationDelay: "3s", background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)" }} />

      <p className="section-kicker">Projects</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Selected work with clear technical outcomes
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Project cards emphasize what was built, the engineering decisions involved, and the stack
        used to deliver each application.
      </motion.p>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="surface-card group flex h-full flex-col overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
          >
            <div className={`h-2 w-full bg-gradient-to-r ${cardGradients[index]}`} />

            <div className={`relative border-b border-slate-200/40 bg-gradient-to-br p-6 dark:border-slate-700/30 ${headerBgs[index]}`}>
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl font-outfit text-base font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${numberColors[index]}`}
                >
                  0{index + 1}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:border-indigo-700/50 dark:bg-indigo-950/40 dark:text-indigo-300 shadow-sm shadow-indigo-100/50 dark:shadow-none">
                    <FaStar className="text-[10px]" /> Featured
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-outfit text-2xl font-bold leading-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{project.detail}</p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-indigo-600/50 dark:hover:text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-6 pt-8 text-sm font-bold uppercase tracking-wider">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-slate-500 transition-all duration-300 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  <FaGithub className="text-lg transition-transform duration-300 group-hover/link:scale-110" /> Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-slate-500 transition-all duration-300 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    <FaExternalLinkAlt className="text-lg transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" /> Live
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
