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
    blue: "from-blue-600 to-cyan-500",
    emerald: "from-emerald-600 to-teal-500",
    amber: "from-amber-500 to-orange-500",
  };

  const iconBg = {
    blue: "group-hover:bg-blue-100/80 group-hover:text-blue-600 dark:group-hover:bg-blue-900/40 dark:group-hover:text-blue-400",
    emerald: "group-hover:bg-emerald-100/80 group-hover:text-emerald-600 dark:group-hover:bg-emerald-900/40 dark:group-hover:text-emerald-400",
    amber: "group-hover:bg-amber-100/80 group-hover:text-amber-600 dark:group-hover:bg-amber-900/40 dark:group-hover:text-amber-400",
  };

  const iconColor = {
    blue: "text-blue-600 dark:text-blue-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    amber: "text-amber-600 dark:text-amber-400",
  };

  return (
    <section id="skills" className="section-wrapper relative">
      <div className="orb orb-cyan absolute right-10 top-32 h-52 w-52" style={{ animationDelay: "0s" }} />
      <div className="orb orb-blue absolute -left-10 bottom-32 h-44 w-44" style={{ animationDelay: "2s" }} />

      <p className="section-kicker">Skills</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Focused technical skill set
      </motion.h2>
      <p className="section-subtitle">
        A compact backend-first overview covering Java services, data systems, AI-assisted API
        workflows, and delivery tools.
      </p>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/30 dark:hover:shadow-blue-950/20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${cardAccent[group.color]}`} />
            <div className="p-6">
              <h3 className="font-outfit text-xl font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/80 px-3 py-2 text-sm font-medium text-slate-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/30 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-blue-600/50 dark:hover:shadow-blue-950/20"
                  >
                    <span className={`text-base transition-all duration-300 ${iconColor[group.color]}`}>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
