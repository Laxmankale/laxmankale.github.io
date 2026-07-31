import React from "react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    number: "01",
    title: "Think in systems",
    detail: "I look beyond a single feature to understand data flow, edge cases, and the people who depend on the result.",
  },
  {
    number: "02",
    title: "Build for clarity",
    detail: "Clean APIs, readable code, and useful documentation make software easier to change and safer to maintain.",
  },
  {
    number: "03",
    title: "Deliver with care",
    detail: "I use steady feedback loops, testing, and practical collaboration to turn ideas into dependable releases.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper relative">
      <p className="section-kicker">About</p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        Built with clarity at every layer.
      </motion.h2>
      <p className="section-subtitle">
        An approach grounded in reliable engineering, calm communication, and practical decisions that
        support long-term work.
      </p>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-stone-500">Profile</p>
          <p className="mt-5 max-w-md text-xl leading-9 tracking-[-0.035em] text-stone-800 dark:text-stone-200">
            Strong engineering starts with understanding how every part of a system fits together, then
            making each decision easier to reason about.
          </p>
          <p className="mt-5 max-w-md text-base leading-8 text-stone-600 dark:text-stone-400">
            My core stack includes Java, Spring Boot, Hibernate/JPA, Kafka, Docker, MySQL,
            PostgreSQL, and React for seamless API integration.
          </p>
        </motion.div>

        <div className="border-t border-stone-900 dark:border-stone-100">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="grid gap-4 border-b border-stone-300 py-6 sm:grid-cols-[3rem_1fr] dark:border-stone-700"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <span className="font-mono text-xs text-stone-500">{area.number}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-stone-950 dark:text-stone-50">
                  {area.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-stone-600 dark:text-stone-400">
                  {area.detail}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}