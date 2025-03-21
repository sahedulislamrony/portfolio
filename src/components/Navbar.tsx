"use client";

import { useState } from "react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconPhone, IconRocket, IconMenu } from "@/components/ui/Icons";
import SideBar from "@/components/SideBar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        role="navigation"
        className="fixed top-0 left-1/2 -translate-x-1/2 right-0   backdrop-blur-lg z-50  w-full max-w-[1536] space-v"
      >
        {/* Main Nav */}
        <div className="flex justify-between items-center py-1.5 xl:py-4 px-0 bg-transparent relative ">
          <LeftSec />

          <CenterSec />

          <RightSec />

          {/* Mobile Menu */}
          <div className="xl:hidden flex justify-end items-center flex-1 ">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className=" group p-2 rounded-full text-gray-100 hover:bg-white/10  "
            >
              <IconMenu size={30} className="group-hover:text-sky-400" />
            </button>
          </div>
        </div>
        <SideBar
          isVisible={isMobileMenuOpen}
          changeVisibility={setIsMobileMenuOpen}
        />

        <GradientLine />
      </nav>
    </>
  );
}

function LeftSec() {
  return (
    <div className="flex items-center flex-1">
      <Link href="/" className="flex items-start ">
        <SparklesText
          text="Sahedul"
          className="text-3xl text-white cursor-pointer select-none font-logo font-[400]"
          sparklesCount={5}
          colors={["#0ea5e9", "#fff", "#0ea5e9", "#00ccff"]}
        />
        <span className="text-3xl text-sky-500 cursor-pointer select-none font-logo font-[400]">
          .
        </span>
      </Link>
    </div>
  );
}

function CenterSec() {
  return (
    <div
      className={cn(
        // Base design
        "hidden space-x-10 text-gray-300 flex-2 items-center justify-center",
        // Responsive design
        "xl:flex xl:space-x-10"
      )}
    >
      <NavItem href="#home" text="Home" />
      <NavItem href="#about" text="About" />
      <NavItem href="#education" text="Education" />
      <NavItem href="#skills" text="Skills" />
      <NavItem href="#projects" text="Projects" />
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
        "hover:text-sky-400  text-lg  font-poppins font-[700] text-gray-100",
        className
      )}
    >
      {text}
    </a>
  );
}

function RightSec() {
  return (
    <div className="hidden xl:flex items-center justify-end space-x-4 flex-1 font-poppins">
      <a href="#contact">
        <Button
          variant="outline"
          className="group text-white bg-gray-900/30 hover:bg-white/9 hover:text-sky-400 font-[600] border-sky-800"
        >
          <IconPhone className="mr-0.5 group-hover:text-sky-400" /> Contact Me
        </Button>
      </a>
      <Button
        className="bg-gradient-to-r from-sky-700 to-sky-500 text-gray-100 font-[600]"
        onClick={() =>
          window.open("https://www.linkedin.com/in/sahedulislamrony/", "_blank")
        }
      >
        <IconRocket /> Hire Me
      </Button>
    </div>
  );
}

function GradientLine() {
  return (
    <div className="w-full relative mx-auto" data-testid="gradient-line">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[10px] w-1/4 blur-sm" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-1/4" />
    </div>
  );
}
