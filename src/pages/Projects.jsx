import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Share2Go – Ride-Sharing Web App",
      description: [
        "Full-stack ride-sharing platform developed with Java, Spring Boot (REST APIs), and React, supporting both Driver and Passenger roles.",
        "Core features include secure authentication, ride creation and publishing, ride search with filters, booking management, and status-based alerts for users.",
        "Backend follows a layered Spring Boot architecture using JPA/Hibernate and MySQL, focusing on scalability and clean separation of concerns. The frontend uses React Context API for state management and Axios for smooth API communication.",
      ],
      tech: ["Java", "Spring Boot", "React.js", "Tailwind CSS", "MySQL", "REST APIs"],
      github: "https://github.com/Laxmankale/share2ride_Ride_Sharing_App",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: [
        "A personal portfolio website built using React, Vite, Tailwind CSS, and Framer Motion to create a fast, responsive, and visually polished UI.",
        "Highlights my projects, technical skills, and experience through a clean layout, smooth animations, and well-organized sections.",
        "Designed with reusable components, optimized asset loading, and modern frontend development practices for performance and maintainability.",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Laxmankale/portfolio",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section-wrapper">
      {/* Orbs */}
      <div className="orb w-80 h-80 bg-cyan-500 bottom-20 -left-20" />
      <div className="orb w-64 h-64 bg-violet-600 top-10 right-0" />

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-gradient">Works</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
          >
            {/* Gradient border wrapper */}
            <div
              className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/20
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
            />

            <div
              className="relative glass p-8 h-full flex flex-col
                hover:translate-y-[-4px] hover:shadow-lg hover:shadow-cyan-400/10
                transition-all duration-400"
            >
              {/* Number badge */}
              <span className="absolute top-4 right-5 font-outfit text-4xl font-bold text-white/[0.04]">
                0{index + 1}
              </span>

              <h3 className="font-outfit text-xl font-semibold text-slate-100 mb-4">
                {project.title}
              </h3>

              <div className="space-y-2 mb-5 text-sm text-slate-400 leading-relaxed flex-1">
                {project.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full
                      bg-gradient-to-r from-cyan-400/10 to-violet-500/10
                      border border-white/[0.06] text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <FaGithub /> Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
