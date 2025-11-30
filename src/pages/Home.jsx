
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100"
    >
      <motion.p
        className="text-yellow-400 mb-3 tracking-widest text-sm md:text-base"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        HELLO!
      </motion.p>

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I'm <span className="text-yellow-400">Laxman Kale</span>
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Typewriter
          options={{
            strings: [
              "Backend Developer",
              "Java | Spring Boot | REST APIs",
              "Building Scalable Web Systems",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          }}
        />
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <a
          href="/public/Laxman_Kale_Resume_v2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}
