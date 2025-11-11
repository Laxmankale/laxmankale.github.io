import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100"
    >
      {/* Greeting */}
      <p className="text-yellow-400 mb-3 tracking-widest text-sm md:text-base">
        HELLO!
      </p>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
        I'm <span className="text-yellow-400">Laxman Kale</span>
      </h1>

      {/* Typewriter Effect */}
      <h2 className="text-lg md:text-2xl text-gray-300 mb-6">
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
      </h2>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <a
          href="/Laxman_Kale_Resume_Updated.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          View Resume
        </a>

        <a
          href="#projects"
          className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          My Works
        </a>
      </div>
    </section>
  );
}
