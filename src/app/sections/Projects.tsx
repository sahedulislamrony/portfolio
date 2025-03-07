import Image from "next/image";
import projects from "../../data/ProjectData";
import type { Project as ProjectType } from "../../data/ProjectData";
import {
  IconExternalLink,
  IconGithub,
  IconListArrow,
} from "@/components/ui/Icons";
import Gradient from "@/components/ui/BackgroundGradient";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-25 pb-30 bg-transparent overflow-hidden space-v"
    >
      <div className="mx-auto px-4 relative">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-[900] mb-4 text-white">
            Projects
          </h2>
          <p className="text-lg font-mono font-[600] text-gray-300">
            A collection of my recent projects.
          </p>
        </div>

        {/* Animated Gradient Background */}
        <Gradient className="absolute top-0 left-1/2 -translate-x-1/2 size-80 animate-none" />

        {/* Projects Flex Container */}
        <div className="flex flex-col gap-12 justify-center items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const { image, title, features, techStack, link, repo, imageBg } = project;

  return (
    <div className="group relative h-max rounded-lg overflow-hidden transition-all duration-300 cursor-auto backdrop-blur-lg bg-white/5 border border-white/10 hover:border-purple-400">
      {/* Animated Gradient Background */}
      <Gradient
        className={`-top-14 left-0 size-70 ${
          index % 2 === 0 ? "right-0 left-[80%] top-0" : ""
        }`}
      />

      {/* Flex Container for Image and Content */}
      <div
        className={`flex flex-col lg:flex-row gap-8 p-6 h-full ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <div
          className={cn(
            "relative flex-1 max-h-full rounded-lg overflow-hidden transition-all duration-300 object-center shadow-lg shadow-white/10 group-hover:shadow-purple-500/10 transform  hover:[transform:translate3d(-5px,-10px,20px)]",
            imageBg
          )}
        >
          <Image
            src={image}
            alt={title}
            width={900}
            height={900}
            className="w-full h-full object-contain rounded-lg"
            style={{
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Title */}
          <h3 className="text-2xl font-poppins font-[700] mb-4 text-white">
            {title}
          </h3>

          {/* Features Section */}
          <div>
            <h4 className="text-lg font-poppins font-[700] mb-4 text-purple-400">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center font-roboto font-[500]"
                >
                  <IconListArrow className="mr-2" /> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center px-2 py-1 rounded-full text-xs font-noto font-[600] transition-all duration-200 cursor-pointer bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-white/5 hover:border-purple-400/30"
              >
                {tech.icon}
                <span className="ml-1">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Link Preview and GitHub Button */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-md transition-all duration-200 bg-white/10 border border-purple-300/35 text-white hover:bg-white/20 text-sm font-mono font-[600] shadow-xl hover:shadow-purple-500/10"
            >
              <IconExternalLink className="mr-2 text-purple-600" size={20} />
              Live Site
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-md transition-all duration-200 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-300/30 text-sm font-mono font-[600] shadow-xl hover:shadow-purple-500/10"
            >
              <IconGithub className="mr-2" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
