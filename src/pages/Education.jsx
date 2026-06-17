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
      gradient: "from-indigo-600 to-purple-500",
      iconBg: "bg-indigo-100/80 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 group-hover:shadow-indigo-200/50",
      scoreBg: "border-indigo-200/80 bg-indigo-50/80 text-indigo-700 dark:border-indigo-800/50 dark:bg-indigo-950/40 dark:text-indigo-300 shadow-sm",
    },
    emerald: {
      gradient: "from-purple-600 to-fuchsia-500",
      iconBg: "bg-purple-100/80 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 group-hover:shadow-purple-200/50",
      scoreBg: "border-purple-200/80 bg-purple-50/80 text-purple-700 dark:border-purple-800/50 dark:bg-purple-950/40 dark:text-purple-300 shadow-sm",
    },
  };

  return (
    <section id="education" className="section-wrapper relative">
      <div className="orb orb-blue absolute -left-16 top-32 h-44 w-44" style={{ animationDelay: "2s", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%)" }} />

      <p className="section-kicker">Education</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Academic foundation
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Formal computer science education supporting backend development, software design, and
        database fundamentals.
      </motion.p>

      <div className="relative z-10 mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {education.map((edu, index) => {
          const accent = accentMap[edu.color];
          return (
            <motion.div
              key={edu.degree}
              className="surface-card group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${accent.gradient}`} />
              <div className="p-8">
                <span className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${accent.iconBg}`}>
                  <FaGraduationCap />
                </span>
                <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{edu.degree}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-500 dark:text-slate-400">{edu.college}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-600/50 hover:shadow-md">
                    <FaCalendarAlt className="text-xs text-indigo-500 dark:text-indigo-400" />
                    {edu.duration}
                  </span>
                  <span className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${accent.scoreBg}`}>
                    <FaTrophy className="text-xs" />
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
