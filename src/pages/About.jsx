import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16
                 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 py-20"
    >
      {/* Image */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-yellow-400"
        />
      </motion.div>

      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I’m <span className="text-yellow-400 font-medium">Laxman Kale</span>, a
          passionate <strong>Backend Developer</strong> specializing in
          <strong> Java</strong>, <strong>Spring Boot</strong>, and
          <strong> RESTful API</strong> development. I focus on building
          scalable, secure systems with clean architecture and smooth frontend
          integration.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Currently pursuing my MCA, I’ve worked on real-world projects involving
          microservices, authentication, and API design. My goal is to create
          impactful backend solutions while continuously improving as a full-stack
          engineer.
        </p>
      </motion.div>
    </section>
  );
}
