import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCogs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaReact,
  FaToolbox,
} from "react-icons/fa";
import {
  SiEclipseide,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiSpringboot,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Programming & Frameworks",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Hibernate / JPA", icon: <SiHibernate /> },
        { name: "RESTful APIs", icon: <FaToolbox /> },
        { name: "Microservices", icon: <FaCogs /> },
      ],
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Maven", icon: <FaCogs /> },
      ],
    },
    {
      category: "IDEs & Environments",
      items: [
        { name: "VS Code", icon: <FaCode /> },
        { name: "Eclipse / STS4", icon: <SiEclipseide /> },
        { name: "Cursor", icon: <FaToolbox /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-wrapper">
      <p className="section-kicker">Skills</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Technologies organized for real project work
      </motion.h2>
      <p className="section-subtitle">
        A focused stack for backend development, API integration, database design, and practical
        React interfaces.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="surface-card p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h3 className="mb-5 font-outfit text-lg font-semibold text-slate-950">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="text-base text-blue-700">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
