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
    <section id="education" className="section-wrapper">
      {/* Orb */}
      <div className="orb w-72 h-72 bg-violet-600 top-10 -left-20" />

      <motion.h2
        className="section-heading flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FaGraduationCap className="text-cyan-400" />
        <span>
          <span className="text-gradient">Education</span>
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Connector line */}
        <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-500/30 to-transparent" />

        <div className="flex flex-col gap-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-12 md:pl-14"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[10px] md:left-[14px] top-1 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-slate-950" />

              <div className="glass p-6 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="font-outfit text-xl font-semibold text-slate-100 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-sm mb-1">{edu.college}</p>
                <p className="text-cyan-400/80 text-sm mb-2">{edu.duration}</p>
                <p className="text-slate-500 text-sm font-medium">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
