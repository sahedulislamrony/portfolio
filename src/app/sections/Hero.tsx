"use client";

import { Button } from "@/components/ui/button";
import Orb, { useOrbAnimation } from "@/components/ui/Orb";
import Particles, { useParticalAnimation } from "@/components/ui/Particles";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import { Spotlight } from "@/components/ui/spotlight-new";

type AnimationInstance = {
  start: () => void;
  stop: () => void;
};

export default function HeroSection() {
  const partical = useParticalAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { cleanup } = UnmountObserber({
      animationInstance: partical,
      ref: sectionRef,
    });
    return () => cleanup(); // Cleanup observer
  }, [partical]);

  return (
    <div
      ref={sectionRef}
      id="home"
      className={cn(
        // Base design
        "relative w-full overflow-hidden  spaceX h-screen flex justify-center items-center bg-transparent font-extrabold  pt-[5rem] ",
        // Responsive design
        "flex-col md:flex-row"
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

      {/* Spotlight */}
      {/* <Spotlight className="z-5" /> */}

      {/* Left Section */}
      <LeftSec />

      {/* Right Section */}
      <RightSec />
    </div>
  );
}

function LeftSec() {
  return (
    <div className="flex-1  flex flex-col justify-start items-start  py-12 px-2 pt-7  z-20 ">
      <h1 className="text-4xl text-gray-100  font-logo font-[900] ">
        Hi , I&apos;m
        <span className="block mt-1.5 text-4xl text-transparent bg-clip-text bg-gradient-to-r  from-white  to-sky-500">
          Sahedul Islam Rony
        </span>
      </h1>
      <p className="text-sky-500 py-4  leading-15 text-6xl ">
        Full Stack Developer & ML Enthusiast
      </p>
      <p className="font-mono font-[700] text-md mt-6 text-gray-100  mb-0 z-20">
        I am passionate about building scalable, high-performance web
        applications using clean code and modern technologies. I turn ideas into
        reality with precision and efficiency{" "}
        <Sparkles className="inline text-sky-500" />
      </p>

      <div className="flex gap-4 mt-10">
        {/* Call-to-Action Button */}
        <button className="text-black flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-sm w-fit  transition-transform">
          <span>Explore My Work</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <Button
          variant="outline"
          className="py-6 px-8 text-md  border-sky-500 rounded-sm  text-white  hover:text-sky-500  transition-transform"
        >
          <Download className="mr-1" /> Download CV
        </Button>
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
    return () => cleanup(); // Cleanup observer
  }, [orb]);

  return (
    <div
      ref={sectionRef}
      className="flex-1  h-[40rem] pt-0 mt-0   flex justify-center items-center z-10 "
    >
      <div className="z-5 relative  bg-transparent  size-[75%]   flex justify-center items-center text-white text-2xl font-bold">
        <Image
          src="/rony2.png"
          alt="Sahedul Islam Rony"
          width={1000}
          height={1000}
          className="rounded-full w-full h-full "
        />

        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          className="absolute-center z-10 w-[calc(100%_+_10rem)] h-[calc(100%_+_10rem)]"
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
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        start();
        console.log("Start");
      } else {
        stop();
        console.log("Stop");
        if (typeof onUnmount === "function") onUnmount();
      }
    },
    { threshold }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  const cleanup = () => {
    observer.disconnect();
  };
  return { cleanup };
}
