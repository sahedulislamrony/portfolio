"use client";

import About from "@/components/home/About";
import GetInTouch from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main className="max-w-[1536] relative mx-auto bg-main  ">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GetInTouch />
      <Footer />
    </main>
  );
}
