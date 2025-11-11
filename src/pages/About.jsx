import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaServer } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 py-20 px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl text-center md:text-left leading-relaxed text-gray-300 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          I’m <span className="text-yellow-400 font-semibold">Laxman Kale</span>, a passionate
          <span className="text-yellow-400"> Backend Developer </span> specializing in Java,
          Spring Boot, and RESTful API design. I enjoy building clean, scalable systems and
          integrating backend modules that make real-world impact.
        </p>

        <p>
          I’m experienced in working with modern technologies such as{" "}
          <span className="text-yellow-400">Java</span>,{" "}
          <span className="text-yellow-400">Spring Boot</span>,{" "}
          <span className="text-yellow-400">Hibernate/JPA</span>,{" "}
          <span className="text-yellow-400">RestAPI</span>, and{" "}
          <span className="text-yellow-400">MySQL</span>, and{" "}
          <span className="text-yellow-400">React.js. </span>
          I have strong foundations in <span className="text-yellow-400">Core Java,OOP, MVC architecture,</span>{" "}
          and <span className="text-yellow-400">database design</span>.
        </p>

        <p>
          My goal is to join a team where I can contribute to building efficient backend systems,
          optimize performance, and continuously grow as a software engineer.
        </p>
      </motion.div>
    </section>
  );
}
