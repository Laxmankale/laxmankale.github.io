import React from "react";
import Hero from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-sans bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}
