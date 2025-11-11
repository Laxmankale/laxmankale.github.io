import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "JavaScript", icon: <FaNodeJs className="text-yellow-400" /> },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      category: "Databases",
      items: [{ name: "MySQL", icon: <SiMysql className="text-blue-300" /> }],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 py-20 px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Tools
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
