import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaToolbox,
  FaCogs,
  FaCode,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiPostman,
  SiMysql,
  SiEclipseide,
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
      {/* Orbs */}
      <div className="orb w-72 h-72 bg-cyan-500 -top-10 left-1/4" />
      <div className="orb w-64 h-64 bg-violet-600 bottom-0 right-10" />

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Technical <span className="text-gradient">Skills</span>
      </motion.h2>

      <p className="text-center text-slate-500 text-sm -mt-10 mb-14 max-w-xl mx-auto">
        Technologies and tools I work with on a daily basis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="glass p-6 hover:border-cyan-400/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
          >
            <h3 className="font-outfit text-lg font-semibold mb-5 text-gradient">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, j) => (
                <div
                  key={j}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg
                    bg-white/[0.04] border border-white/[0.06]
                    hover:border-cyan-400/40 hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]
                    transition-all duration-300 text-sm text-slate-300 group"
                >
                  <span className="text-lg text-cyan-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
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
