"use client";

import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div
        id="home"
        className=" bg-red-300  bg-no-repeat bg-cover bg-center w-full text-highlight h-screen text-7xl flex justify-center items-center font-extrabold"
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
