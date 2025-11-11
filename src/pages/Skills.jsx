import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaToolbox,
  FaCogs,
  FaCode,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiPostman,
  SiMysql,
  SiTailwindcss,
  SiEclipseide,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Programming & Frameworks",
      items: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
        { name: "Hibernate / JPA", icon: <SiHibernate className="text-yellow-500" /> },
        { name: "RESTful APIs", icon: <FaToolbox className="text-orange-400" /> },
      ],
    },
    {
      category: "Frontend & Styling",
      items: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
        { name: "Maven", icon: <FaCogs className="text-yellow-400" /> },
      ],
    },
    {
      category: "IDEs & Environments",
      items: [
        { name: "VS Code", icon: <FaCode className="text-blue-400" /> }, // ✅ using reliable fallback
        { name: "Eclipse / STS4", icon: <SiEclipseide className="text-purple-400" /> },
        { name: "Cursor", icon: <FaToolbox className="text-yellow-300" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 py-20 px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-yellow-400/20 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {group.items.map((skill, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center text-center w-20"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
