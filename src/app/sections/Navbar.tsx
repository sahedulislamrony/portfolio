"use client";

import { SparklesText } from "@/components/magicui/sparkles-text";
import { Download, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white/5 dark:bg-black/5 backdrop-blur-lg z-50">
        {/* main nav  */}
        <div className="flex justify-between items-center p-4 bg-transparent relative spaceX">
          {/* Left - Logo */}
          <LeftSec />

          {/* Center - Menu */}
          <CenterSec />

          {/* Right - Buttons & Theme Toggle */}
          <RightSec />
        </div>

        {/* Gradient Line */}
        <GradientLine />
      </div>
    </>
  );
}

function LeftSec() {
  return (
    <div className="flex items-center  flex-1">
      <SparklesText
        text="Sahedul"
        className="text-3xl  text-white cursor-pointer select-none font-logo  font-[400]"
        sparklesCount={5}
        colors={["#0ea5e9", "#fff", "#0ea5e9", "#00ccff"]}
      />
      <span className="text-3xl text-sky-500 cursor-pointer select-none font-logo  font-[400]">
        .
      </span>
    </div>
  );
}

function CenterSec() {
  return (
    <div
      className={cn(
        // base design
        "flex space-x-10 text-gray-300   flex-2 items-center justify-center "
        // responsive design
      )}
    >
      <NavItem href="#home" text="Home" />
      <NavItem href="#about" text="About" />
      <NavItem href="#skills" text="Skills" />
      <NavItem href="#projects" text="Projects" />
      <NavItem href="#contact" text="Contact" />
    </div>
  );
}

function NavItem({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "hover:text-sky-400 text-lg font-mono font-[700]",
        className
      )}
    >
      {text}
    </a>
  );
}

function RightSec() {
  return (
    <div className="flex items-center justify-end space-x-4  flex-1">
      <Button
        variant="outline"
        className=" text-white hover:text-sky-400 font-[600] border-sky-800"
      >
        <Download className="font-[800]" /> Download CV
      </Button>
      <Button className="bg-gradient-to-r from-sky-700 to-indigo-500 text-gray-100 font-[800]">
        <Rocket /> Hire Me
      </Button>
    </div>
  );
}

function GradientLine() {
  return (
    <div className="w-full relative mx-auto">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[10px] w-1/4 blur-sm" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-1/4" />
    </div>
  );
}
