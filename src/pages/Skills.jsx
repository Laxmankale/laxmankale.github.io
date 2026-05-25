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

  const cardColor = {
    blue: "border-t-blue-600",
    emerald: "border-t-emerald-600",
    amber: "border-t-amber-500",
  };

  const iconColor = {
    blue: "text-blue-700",
    emerald: "text-emerald-700",
    amber: "text-amber-700",
  };

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
        Focused technical skill set
      </motion.h2>
      <p className="section-subtitle">
        A compact backend-first overview covering Java services, data systems, AI-assisted API
        workflows, and delivery tools.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className={`surface-card border-t-4 p-6 ${cardColor[group.color]}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
          >
            <h3 className="font-outfit text-xl font-semibold text-slate-950">{group.category}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className={`text-base ${iconColor[group.color]}`}>{skill.icon}</span>
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
