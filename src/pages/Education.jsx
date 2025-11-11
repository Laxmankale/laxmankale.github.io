import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Genba Sopanrao Moze College of Engineering, Pune",
      duration: "2023 – 2025",
      score: "CGPA: 7.35 / 10",
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      college: "Balbhim Arts, Science & Commerce College, Beed",
      duration: "2019 – 2022",
      score: "Percentage: 76.70%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 py-20 px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaGraduationCap className="text-yellow-400" /> Education
      </motion.h2>

      <div className="flex flex-col gap-8 max-w-3xl w-full">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-yellow-400/20 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              {edu.degree}
            </h3>
            <p className="text-gray-300">{edu.college}</p>
            <p className="text-yellow-400 italic">{edu.duration}</p>
            <p className="text-gray-400 mt-2">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
