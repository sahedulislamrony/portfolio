"use client";

import { Button } from "@/components/ui/button";
import Orb, { useOrbAnimation } from "@/components/ui/Orb";
import Particles, { useParticleAnimation } from "@/components/ui/Particles";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { IconDownload, IconSparkles } from "@/components/ui/Icons";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
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

function LeftSec() {
  const scroll = useScroll("projects");
  const download = useDownloadResume();
  return (
    <div className="flex-1 flex flex-col justify-start items-start py-12 px-4 md:pr-2 md:pl-0 pt-7 z-20">
      <h1 className="text-3xl md:text-4xl text-gray-100 font-poppins font-[900]">
        Hi, I&apos;m
        <span className="block mt-1.5 text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500">
          Sahedul Islam Rony
        </span>
      </h1>
      <p className="text-sky-500 py-6 text-3xl md:leading-10 lg:leading-15 md:text-4xl lg:text-6xl font-poppins font-[900]">
        Full Stack Developer & Security Enthusiast
      </p>
      <p className="font-roboto font-[500] text-base md:text-lg text-gray-400 mb-0 z-20 leading-relaxed">
        I am passionate about building scalable, high-performance web
        applications using clean code and modern technologies. I turn ideas into
        reality with precision and efficiency{" "}
        <IconSparkles className="inline text-sky-500" />
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        {/* Call-to-Action Button - Explore My Work */}
        <Button
          variant="outline"
          className="group py-6 text-white bg-sky-700 hover:bg-white/9 hover:text-sky-400 border-sky-800"
          onClick={scroll}
          aria-label="Explore My Work"
        >
          <AnimatedGradientText
            className="flex items-center justify-center"
            colorFrom="#000"
            colorTo="#fff"
          >
            <span className="font-poppins font-[800] text-[16px] text-inherit">
              Explore My Work
            </span>
            <IconSparkles className="ml-2 group-hover:text-sky-400 size-6" />
          </AnimatedGradientText>
        </Button>

        {/* Call-to-Action Button - Download CV */}
        <Button
          variant="outline"
          className="group py-6 text-[16px] text-white bg-gray-900/30 hover:bg-white/9 hover:text-sky-400 font-[600] border-gray-800"
          aria-label="Download CV"
          onClick={download}
        >
          Download CV
          <IconDownload className="mr-0.5 group-hover:text-sky-400 size-5.5" />
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
    return () => cleanup();
  }, [orb]);

  return (
    <div
      ref={sectionRef}
      className="flex-1 h-[300rem] w-full md:w-1/2 md:h-[40rem] pb-15 md:pb-0 pt-0 mt-0 flex justify-center items-center z-10"
    >
      <div className="z-5 relative bg-transparent size-[20rem] sm:size-[25rem] lg:size-[30rem] flex justify-center items-center text-white text-2xl font-bold">
        <Image
          src="/rony2.png"
          alt="Sahedul Islam Rony"
          width={800}
          height={800}
          className="rounded-full w-full h-full overflow-hidden"
          priority
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
