import React from "react";
import { motion } from "framer-motion";

const skillLanes = [
  {
    number: "01",
    label: "Backend systems",
    items: ["Java", "Spring Boot", "Spring MVC", "Hibernate / JPA", "REST APIs", "Microservices"],
  },
  {
    number: "02",
    label: "Data and messaging",
    items: ["MySQL", "PostgreSQL", "SQL", "Apache Kafka", "Event-driven design", "Database modeling"],
  },
  {
    number: "03",
    label: "Delivery tools",
    items: ["Docker", "Git and GitHub", "Maven", "Postman", "AWS basics", "Agile delivery"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper relative">
      <p className="section-kicker">Knowledge base</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        Tools I use to build reliable software.
      </motion.h2>
      <p className="section-subtitle">
        The technologies I return to when building clear, maintainable backend systems and practical
        full-stack experiences.
      </p>

      <div className="mx-auto max-w-6xl border-b border-stone-900 dark:border-stone-100">
        {skillLanes.map((lane, laneIndex) => (
          <motion.article
            key={lane.label}
            className="skill-lane grid gap-4 border-t border-stone-900 py-5 sm:grid-cols-[10rem_1fr] dark:border-stone-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: laneIndex * 0.08, duration: 0.55 }}
          >
            <div className="flex items-baseline gap-3 px-1 sm:block">
              <span className="font-mono text-xs text-stone-500">{lane.number}</span>
              <h3 className="mt-0 text-sm font-semibold tracking-[-0.02em] text-stone-900 dark:text-stone-100 sm:mt-3">
                {lane.label}
              </h3>
            </div>
            <div className="skills-list-wrap">
              <motion.span
                className="skills-scanline"
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: [0, 1, 0.45], scaleX: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: laneIndex * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <ul className="skill-cloud" aria-label={`${lane.label} skills`}>
              {lane.items.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  className="skill-cloud-item"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    delay: laneIndex * 0.12 + 0.12 + skillIndex * 0.075,
                    type: "spring",
                    stiffness: 260,
                    damping: 21,
                  }}
                >
                  <span className="skill-cloud-index">
                    {String(skillLanes.slice(0, laneIndex).reduce((count, group) => count + group.items.length, 0) + skillIndex + 1).padStart(2, "0")}
                  </span>
                  {skill}
                </motion.li>
              ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
