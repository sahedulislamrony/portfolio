import {
  Code,
  Brain,
  BookOpen,
  Download,
  Palette,
  Puzzle,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent container ">
      <div className=" mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-logo font-[400] text-white mb-4">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="flex justify-center items-center">
          <LeftSection />

          <RightSection />
        </div>
      </div>
    </section>
  );
}

function LeftSection() {
  return (
    <div className=" flex-1 relative flex justify-center items-center ">
      {/* Animated Gradient Background */}
      <div className="absolute-center w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      {/* Profile Image or Illustration */}
      <div className="relative  z-10">
        <Image
          src="/rony2.png"
          alt="About Me"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div className="flex-1 space-y-7 ">
      <p className="text-gray-300 leading-relaxed text-md font-noto font-[600]">
        I am a Computer Science and Engineering (CSE) undergraduate at{" "}
        <span className="font-[700] text-purple-400">
          Jashore University of Science and Technology (JUST)
        </span>
        , with a passion for{" "}
        <span className="font-[700] text-blue-400">Software Development</span>,{" "}
        <span className="font-[700] text-purple-400">
          Artificial Intelligence
        </span>
        , and <span className="font-[700] text-blue-400">Machine Learning</span>
        .
      </p>
      <p className="text-gray-300 leading-relaxed text-md font-noto font-[600]">
        I enjoy building innovative and impactful applications that solve
        real-world problems. My goal is to master advanced programming concepts
        and explore cutting-edge technologies to push the boundaries of
        innovation.
      </p>
      {/* Passion Tags */}
      <div className="flex flex-wrap gap-2 justify-start">
        <InterestItem
          Icon={<Code size={16} className="mr-2 text-blue-400" />}
          text="Software Development"
        />
        <InterestItem
          Icon={<Brain size={16} className="mr-2 text-purple-400" />}
          text="Artificial Intelligence"
        />
        <InterestItem
          Icon={<BookOpen size={16} className="mr-2 text-blue-400" />}
          text="Machine Learning"
        />
        <InterestItem
          Icon={<Palette size={16} className="mr-2 text-purple-400" />}
          text="Creative Work"
        />
        <InterestItem
          Icon={<Puzzle size={16} className="mr-2 text-blue-400" />}
          text="Problem Solving"
        />
        <InterestItem
          Icon={<Shield size={16} className="mr-2 text-green-400" />}
          text="Cyber Security"
        />
      </div>
      {/* Call-to-Action Button */}
      <button className="text-black  font-[700] flex gap-2 items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-sm w-fit ">
        <Download className="w-5 h-5" />
        <span>Download CV</span>
      </button>
    </div>
  );
}

function InterestItem({ Icon, text }: { Icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex font-mono font-[600] items-center px-4 py-2 rounded-full bg-gray-800 text-gray-200 text-sm  hover:bg-gray-700 transition-colors">
      {Icon} {text}
    </span>
  );
}
