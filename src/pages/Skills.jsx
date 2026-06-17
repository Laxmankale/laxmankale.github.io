import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaCode,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLayerGroup,
  FaRobot,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { SiApachekafka, SiHibernate, SiMysql, SiPostman, SiSpringboot } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Backend",
      description: "Core Java backend stack for APIs, services, and business workflows.",
      color: "blue",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Spring MVC", icon: <SiSpringboot /> },
        { name: "Hibernate/JPA", icon: <SiHibernate /> },
        { name: "REST APIs", icon: <FaProjectDiagram /> },
        { name: "Microservices", icon: <FaLayerGroup /> },
      ],
    },
    {
      category: "Data & Messaging",
      description: "Database design and asynchronous communication for distributed systems.",
      color: "emerald",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "SQL Queries", icon: <FaDatabase /> },
        { name: "JPA Relationships", icon: <SiHibernate /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
        { name: "Event-Driven Design", icon: <FaProjectDiagram /> },
      ],
    },
    {
      category: "AI & API Integration",
      description: "Using AI tools and external APIs to improve backend development workflows.",
      color: "amber",
      items: [
        { name: "AI API Integration", icon: <FaRobot /> },
        { name: "Prompt Engineering", icon: <FaRobot /> },
        { name: "AI-Assisted Debugging", icon: <FaTools /> },
        { name: "API Contract Design", icon: <FaProjectDiagram /> },
        { name: "DTO Pattern", icon: <FaLayerGroup /> },
        { name: "React API Integration", icon: <FaCode /> },
      ],
    },
    {
      category: "Tools & Practices",
      description: "Development workflow, deployment basics, and professional team practices.",
      color: "blue",
      items: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS Basics", icon: <FaAws /> },
        { name: "Git/GitHub", icon: <FaGitAlt /> },
        { name: "Maven", icon: <FaTools /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Agile/Scrum", icon: <FaProjectDiagram /> },
      ],
    },
  ];

  const cardAccent = {
    blue: "from-indigo-600 to-blue-500",
    emerald: "from-purple-600 to-fuchsia-500",
    amber: "from-pink-500 to-rose-500",
  };

  const iconColor = {
    blue: "text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500",
    emerald: "text-purple-600 dark:text-purple-400 group-hover:text-purple-500",
    amber: "text-pink-600 dark:text-pink-400 group-hover:text-pink-500",
  };

  const badgeBorder = {
    blue: "hover:border-indigo-300 dark:hover:border-indigo-600/50",
    emerald: "hover:border-purple-300 dark:hover:border-purple-600/50",
    amber: "hover:border-pink-300 dark:hover:border-pink-600/50",
  };

  return (
    <section id="skills" className="section-wrapper relative">
      <div className="orb orb-cyan absolute right-10 top-32 h-52 w-52" style={{ animationDelay: "0s", background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)" }} />
      <div className="orb orb-blue absolute -left-10 bottom-32 h-44 w-44" style={{ animationDelay: "2s", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%)" }} />

      <p className="section-kicker">Skills</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Focused technical skill set
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        A compact backend-first overview covering Java services, data systems, AI-assisted API
        workflows, and delivery tools.
      </motion.p>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="surface-card overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
          >
            <div className={`h-2 w-full bg-gradient-to-r ${cardAccent[group.color]}`} />
            <div className="p-8">
              <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white">{group.category}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{group.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {group.items.map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 + 0.3, duration: 0.4 }}
                    className={`group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 ${badgeBorder[group.color]} hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50`}
                  >
                    <span className={`text-lg transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 ${iconColor[group.color]}`}>{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
