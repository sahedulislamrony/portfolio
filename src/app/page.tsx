"use client";

import About from "./sections/About";
import GetInTouch from "./sections/Contact";
import Education from "./sections/Education";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  );
}
