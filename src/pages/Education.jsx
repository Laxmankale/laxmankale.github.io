import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaTrophy } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Genba Sopanrao Moze College of Engineering, Pune",
      duration: "2023 - 2025",
      score: "CGPA: 7.35 / 10",
      color: "blue",
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      college: "Balbhim Arts, Science & Commerce College, Beed",
      duration: "2019 - 2022",
      score: "Percentage: 76.70%",
      color: "emerald",
    },
  ];

  const accentMap = {
    blue: {
      gradient: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-100/80 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
      scoreBg: "border-blue-200/80 bg-blue-50/80 text-blue-700 dark:border-blue-800/50 dark:bg-blue-950/40 dark:text-blue-300",
    },
    emerald: {
      gradient: "from-emerald-600 to-teal-500",
      iconBg: "bg-emerald-100/80 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
      scoreBg: "border-emerald-200/80 bg-emerald-50/80 text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-300",
    },
  };

  return (
    <section id="education" className="section-wrapper relative">
      <div className="orb orb-blue absolute -left-16 top-32 h-44 w-44" style={{ animationDelay: "2s" }} />

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

      <div className="relative z-10 mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {education.map((edu, index) => {
          const accent = accentMap[edu.color];
          return (
            <motion.div
              key={edu.degree}
              className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/30 dark:hover:shadow-blue-950/20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${accent.gradient}`} />
              <div className="p-6">
                <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-lg ${accent.iconBg}`}>
                  <FaGraduationCap />
                </span>
                <h3 className="font-outfit text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{edu.college}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                    <FaCalendarAlt className="text-[10px]" />
                    {edu.duration}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${accent.scoreBg}`}>
                    <FaTrophy className="text-[10px]" />
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
