import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications",
    abbreviation: "MCA",
    college: "Genba Sopanrao Moze College of Engineering, Pune",
    duration: "2023 - 2025",
    score: "CGPA 7.35 / 10",
  },
  {
    degree: "Bachelor of Computer Science",
    abbreviation: "BCS",
    college: "Balbhim Arts, Science and Commerce College, Beed",
    duration: "2019 - 2022",
    score: "76.70%",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-wrapper relative">
      <p className="section-kicker">Education</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        A foundation built for continuous learning.
      </motion.h2>
      <p className="section-subtitle">
        Academic training in computer science, software design, and database fundamentals that supports
        the work I do today.
      </p>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            className="education-card"
            initial={{ opacity: 0, y: 36, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1000 }}
          >
            <motion.span
              className="education-orbit"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 18 + index * 4, ease: "linear", repeat: Infinity }}
            />
            <div className="education-card-content">
              <div className="flex items-start justify-between gap-5">
                <span className="education-number">0{index + 1}</span>
                <span className="education-abbreviation">{item.abbreviation}</span>
              </div>
              <h3 className="mt-12 max-w-md text-3xl font-semibold tracking-[-0.06em] text-stone-950 dark:text-stone-50">
                {item.degree}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-stone-600 dark:text-stone-400">{item.college}</p>
              <div className="education-meta mt-10">
                <div>
                  <span>Period</span>
                  <strong>{item.duration}</strong>
                </div>
                <div>
                  <span>Result</span>
                  <strong>{item.score}</strong>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}