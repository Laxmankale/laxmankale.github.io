import React from "react";
import Hero from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
