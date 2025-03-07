import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import {
  IconBookOpen,
  IconBrain,
  IconCode,
  IconDownload,
  IconPalette,
  IconPuzzle,
  IconShield,
} from "@/components/ui/Icons";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent space-v">
      <div className="mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-[900] text-white mb-4">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Left Section - Hidden on mobile, visible on md and larger screens */}
          <div className="hidden md:flex flex-1 relative  justify-center items-center">
            {/* Animated Gradient Background */}
            <div className="absolute-center w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            {/* Profile Image or Illustration */}
            <div className="relative z-10">
              <Image
                src="/rony2.png"
                alt="About Me"
                width={400}
                height={400}
                className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 space-y-7">
            <p className="text-gray-300 leading-relaxed text-sm md:text-md font-poppins font-[500]">
              I am a Computer Science and Engineering (CSE) undergraduate at{" "}
              <span className="font-[700] text-purple-400">
                Jashore University of Science and Technology (JUST)
              </span>
              , with a passion for{" "}
              <span className="font-[700] text-blue-400">
                Software Development
              </span>
              ,{" "}
              <span className="font-[700] text-purple-400">
                Artificial Intelligence
              </span>
              , and{" "}
              <span className="font-[700] text-blue-400">Machine Learning</span>
              .
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-md font-poppins font-[500]">
              I enjoy building innovative and impactful applications that solve
              real-world problems. My goal is to master advanced programming
              concepts and explore cutting-edge technologies to push the
              boundaries of innovation.
            </p>
            {/* Passion Tags */}
            <div className="flex flex-wrap gap-2 justify-start">
              <InterestItem
                Icon={<IconCode size={16} className="mr-2 text-blue-400" />}
                text="Software Development"
              />
              <InterestItem
                Icon={<IconBrain size={16} className="mr-2 text-purple-400" />}
                text="Artificial Intelligence"
              />
              <InterestItem
                Icon={<IconBookOpen size={16} className="mr-2 text-blue-400" />}
                text="Machine Learning"
              />
              <InterestItem
                Icon={
                  <IconPalette size={16} className="mr-2 text-purple-400" />
                }
                text="Creative Work"
              />
              <InterestItem
                Icon={<IconPuzzle size={16} className="mr-2 text-blue-400" />}
                text="Problem Solving"
              />
              <InterestItem
                Icon={<IconShield size={16} className="mr-2 text-green-400" />}
                text="Cyber Security"
              />
            </div>
            {/* Call-to-Action Button */}
            <button className="text-black font-[700] flex gap-2 items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 md:px-8 md:py-3 rounded-sm w-fit">
              <IconDownload className="w-5 h-5 text-black" />
              <AnimatedGradientText
                colorFrom="#000"
                colorTo="#334155"
                speed={1.5}
              >
                Download CV
              </AnimatedGradientText>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InterestItem({ Icon, text }: { Icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex font-mono font-[600] items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-800 text-gray-200 text-xs md:text-sm hover:bg-gray-700 transition-colors">
      {Icon} {text}
    </span>
  );
}
