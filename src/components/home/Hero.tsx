"use client";

import Orb, { useOrbAnimation } from "@/components/ui/Orb";
import Particles, { useParticleAnimation } from "@/components/ui/Particles";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { IconDownload, IconSparkles } from "@/components/ui/Icons";
import useScroll from "@/hooks/useScroll";
import { useDownloadResume } from "@/hooks/useDownload";

type AnimationInstance = {
  start: () => void;
  stop: () => void;
};

export default function HeroSection() {
  const particle = useParticleAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { cleanup } = UnmountObserber({
      animationInstance: particle,
      ref: sectionRef,
    });
    return () => cleanup();
  }, [particle]);

  return (
    <div
      ref={sectionRef}
      role="hero"
      id="home"
      className={cn(
        "relative w-full overflow-hidden h-fit flex justify-center items-center bg-transparent pt-[5rem] space-v",
        "flex-wrap flex-col md:flex-row md:flex-nowrap"
      )}
    >
      {/* Background Animation */}
      <Particles
        particleColors={["#0ea5e9", "#0ea5e9", "#fff"]}
        particleCount={400}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        sizeRandomness={1}
        cameraDistance={5}
        className="absolute top-0 left-0 w-full h-full z-[5]"
      />

      {/* Left Section */}
      <LeftSec />

      {/* Right Section */}
      <RightSec />
    </div>
  );
}
export function LeftSec() {
  const scroll = useScroll("projects");
  const download = useDownloadResume();

  return (
    <div className="flex-1 flex flex-col justify-start items-start py-12 px-4 md:px-8 lg:px-12 z-20 w-full">
      {/* Heading with Creative Layout */}
      <div className="relative w-full">
        <h1 className="text-5xl md:text-4xl lg:text-5xl text-gray-100 font-poppins font-[900] leading-relaxed">
          Hi, I&apos;m{" "}
          <span className="block mt-2  text-4xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Sahedul Islam Rony
          </span>
        </h1>
        {/* Decorative Line */}
        <div className="absolute -bottom-4 left-0 w-1/2 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full" />
      </div>

      {/* Subheading with Creative Typography */}
      <p className="text-sky-400 py-8 text-3xl md:text-4xl lg:text-5xl font-poppins font-[900] leading-tight">
        Full Stack Developer &<br />
        <span className="text-gray-300">Security Enthusiast</span>
      </p>

      {/* Description with Improved Readability */}
      <p className="font-roboto font-[500] text-base md:text-lg text-gray-300 mb-8 z-20 leading-relaxed max-w-2xl">
        I build scalable, high-performance web apps with clean code and modern
        tech. Turning ideas into reality, one line at a time.{" "}
        <IconSparkles className="inline text-sky-500" />
      </p>

      {/* Buttons with Creative Layout */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <button
          onClick={scroll}
          className="font-[700] flex gap-2 items-center justify-center text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 px-8 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 w-full md:w-auto"
          aria-label="Explore My Work"
        >
          <IconSparkles className="w-5 h-5 text-white" />
          Explore My Work
        </button>

        <button
          onClick={download}
          className="font-[700] flex gap-2 items-center justify-center text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 px-8 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full md:w-auto"
          aria-label="Download CV"
        >
          <IconDownload className="w-5 h-5 text-white" />
          Download CV
        </button>
      </div>
    </div>
  );
}

function RightSec() {
  const orb = useOrbAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { cleanup } = UnmountObserber({
      animationInstance: orb,
      ref: sectionRef,
    });
    return () => cleanup();
  }, [orb]);

  return (
    <div
      ref={sectionRef}
      className="flex-1 h-[300rem] w-full md:w-1/2 md:h-[40rem] pb-15 md:pb-0 pt-0 mt-0 flex justify-center items-center z-10"
    >
      <div className="z-5 relative bg-transparent size-[20rem] sm:size-[25rem] lg:size-[30rem] flex justify-center items-center text-white text-2xl font-bold">
        <Image
          src="/meNobg.png"
          alt="Sahedul Islam Rony"
          width={800}
          height={800}
          className="rounded-full w-full h-full overflow-hidden "
          priority
        />

        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          className="absolute-center z-10 w-[calc(100%_+_5rem)] h-[calc(100%_+_5rem)] sm:w-[calc(100%_+_10rem)] sm:h-[calc(100%_+_10rem)]"
        />
      </div>
    </div>
  );
}

type UnmountObserberProps = {
  onUnmount?: () => void;
  ref: React.RefObject<HTMLDivElement | null>;
  threshold?: number;
  animationInstance: AnimationInstance;
};

function UnmountObserber({
  onUnmount,
  ref,
  threshold = 0,
  animationInstance,
}: UnmountObserberProps) {
  const { start, stop } = animationInstance;
  if (!("IntersectionObserver" in window)) {
    console.warn("IntersectionObserver is not supported in this browser.");
    return { cleanup: () => {} };
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        start();
      } else {
        stop();
        if (typeof onUnmount === "function") onUnmount();
      }
    },
    { threshold }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  const cleanup = () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
  return { cleanup };
}
