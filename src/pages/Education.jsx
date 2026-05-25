import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Genba Sopanrao Moze College of Engineering, Pune",
      duration: "2023 - 2025",
      score: "CGPA: 7.35 / 10",
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      college: "Balbhim Arts, Science & Commerce College, Beed",
      duration: "2019 - 2022",
      score: "Percentage: 76.70%",
    },
  ];

  return (
    <section id="education" className="section-wrapper">
      <p className="section-kicker">Education</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Academic foundation
      </motion.h2>
      <p className="section-subtitle">
        Formal computer science education supporting backend development, software design, and
        database fundamentals.
      </p>

      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            className={`surface-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              index === 0
                ? "border-l-4 border-l-blue-600 hover:border-blue-200 hover:shadow-blue-100/80"
                : "border-l-4 border-l-emerald-600 hover:border-emerald-200 hover:shadow-emerald-100/80"
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <span
              className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg text-lg ${
                index === 0 ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"
              }`}
            >
              <FaGraduationCap />
            </span>
            <h3 className="font-outfit text-xl font-semibold text-slate-950">{edu.degree}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{edu.college}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {edu.duration}
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {edu.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
