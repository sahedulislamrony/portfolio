"use client";

import About from "./sections/About";
import Education from "./sections/Education";
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
      <div
        id="home"
        className=" bg-transparent  bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold"
      >
        Welcome Home.
      </div>
      <div className=" bg-green-500  bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold">
        Welcome Home.
      </div>
      <div
        id="contact"
        className="   bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold"
      >
        Welcome Home.
      </div>
      <div className=" bg-pink-500  bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold">
        Welcome Home.
      </div>
      <div
        id="about"
        className=" bg-gray-600   bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold"
      >
        Welcome Home.
      </div>
      <div className="   bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold">
        Welcome Home.
      </div>
      <div className=" bg-sky-500  bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold">
        Welcome Home.
      </div>
      <div className="   bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold">
        Welcome Home.
      </div>
    </>
  );
}
