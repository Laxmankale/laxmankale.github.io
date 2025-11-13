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
  
  "Backend follows a layered Spring Boot architecture using JPA/Hibernate and MySQL, focusing on scalability and clean separation of concerns. The frontend uses React Context API for state management and Axios for smooth API communication."
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
  
  "Designed with reusable components, optimized asset loading, and modern frontend development practices for performance and maintainability."
],
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Laxmankale/portfolio",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 py-20 px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-yellow-400/20 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              {project.title}
            </h3>

            <div className="space-y-2 mb-5 text-gray-300 text-sm leading-relaxed">
              {project.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition"
              >
                <FaGithub /> Code
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
