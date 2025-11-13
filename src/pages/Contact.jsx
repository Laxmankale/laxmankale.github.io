import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0b0b0b] text-gray-300 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-400 tracking-wide">
        Contact Me
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 text-lg">

        <div className="flex items-center gap-2">
          <FaLocationArrow className="text-yellow-400" />
          <span>Pune, India</span>
        </div>

        <span className="text-gray-600">|</span>
        <div className="flex items-center gap-2">
          <FaPhone className="text-yellow-400" />
         <a
         href="tel:+91 9579070069"
          className="hover:text-yellow-400 transition"
           >
           9579070069
         </a>
         </div>
        <span className="text-gray-600">|</span>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-yellow-400" />
          <span
           onClick={() => window.open("mailto:lakhankale888@gmail.com")}
           className="hover:text-yellow-400 transition cursor-pointer"
        >
            lakhankale888@gmail.com
        </span>

        </div>

        <span className="text-gray-600">|</span>

        <a
          href="https://www.linkedin.com/in/laxmankale"
          target="_blank"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Laxmankale"
          target="_blank"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
