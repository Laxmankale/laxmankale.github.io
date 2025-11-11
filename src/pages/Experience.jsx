import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Back-End Developer Intern",
      company: "Bentork Industries LLP, Pune",
      duration: "July 2025 – Sept 2025",
      details: [
        "Implemented microservice-based backend with clear module separation (users, sessions, payments).",
        "Built session management logic: handled charging session start/stop, wallet validation, and transactions.",
        "Debugged API failures and SQL queries using logs and Postman testing.",
        "Collaborated with frontend teams for smooth API integration and feature delivery.",
      ],
    },
    {
      role: "Back-End Developer Intern",
      company: "Infosys Springboard (Remote)",
      duration: "Sept 2025 – Present",
      details: [
        'Collaborated in a cross-functional team to design and develop "Hire A Helper" full-stack app using the MERN stack.',
        "Defined and implemented backend API specifications ensuring seamless frontend communication.",
        "Integrated new features, resolved merge conflicts, and participated in agile sprint meetings.",
        "Followed best Git workflows using pull requests and code reviews.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 py-20 px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaBriefcase className="text-yellow-400" /> Experience
      </motion.h2>

      <div className="flex flex-col gap-10 max-w-4xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-yellow-400/20 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-1">
              {exp.role}
            </h3>
            <p className="text-gray-400 italic mb-2">
              {exp.company} | <span className="text-yellow-400">{exp.duration}</span>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
