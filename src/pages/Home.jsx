import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resumePDF from "../assets/Laxman_Kale_Resume.pdf";
import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="section-wrapper min-h-screen flex flex-col justify-center items-center text-center"
    >
      {/* Background orbs */}
      <div className="orb w-72 h-72 bg-cyan-500 top-20 -left-20" />
      <div className="orb w-96 h-96 bg-violet-600 bottom-10 -right-32" />

      {/* Profile photo */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 to-violet-500">
          <img
            src={profileImg}
            alt="Laxman Kale"
            className="w-full h-full rounded-full object-cover border-4 border-slate-950"
          />
        </div>
      </motion.div>

      {/* Greeting */}
      <motion.p
        className="text-cyan-400 mb-3 tracking-[0.25em] text-xs md:text-sm font-medium uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello, World!
      </motion.p>

      {/* Name */}
      <motion.h1
        className="font-outfit text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I'm{" "}
        <span className="text-gradient">Laxman Kale</span>
      </motion.h1>

      {/* Typewriter */}
      <motion.h2
        className="text-lg md:text-2xl text-slate-400 mb-8 font-light"
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

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full font-semibold text-sm
            bg-gradient-to-r from-cyan-400 to-violet-500 text-white
            hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
        >
          View Resume
        </a>
        <Link
          to="contact"
          smooth
          duration={600}
          offset={-80}
          className="px-7 py-3 rounded-full font-semibold text-sm cursor-pointer
            border border-white/[0.12] text-slate-300
            hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
