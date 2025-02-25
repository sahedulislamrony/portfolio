import Image from "next/image";
import { cn } from "@/lib/utils";
import projects from "./ProjectData";
import type { Project as ProjectType } from "./ProjectData";
import {
  IconExternalLink,
  IconGithub,
  IconListArrow,
} from "@/components/ui/Icons";
import Gradient from "@/components/ui/BackgroundGradient";

export default function Projects() {
  return (
    <section
      id="projects"
      className={cn("pt-25 pb-30 bg-transparent overflow-hidden", {
        spaceX: true,
      })}
    >
      <div
        className={cn("container mx-auto px-4 relative", {
          // responsiveness
        })}
      >
        {/* Section Heading */}
        <div
          className={cn("text-center mb-16", {
            // Structure and design
          })}
        >
          <h2
            className={cn("text-4xl md:text-6xl font-bold mb-4", {
              "text-white font-logo": true,
            })}
          >
            Projects
          </h2>
          <p
            className={cn("text-lg font-mono font-[600]", {
              "text-gray-300": true, // Design
            })}
          >
            A collection of my recent projects.
          </p>
        </div>

        {/* Animated Gradient Background */}

        <Gradient className="absolute top-0 left-1/2 -translate-x-1/2 size-80 animate-none" />

        {/* Projects Flex Container */}
        <div className={cn("flex flex-col gap-12")}>
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
  const { imageBg, image, title, features, techStack, link, repo } = project;

  return (
    <div
      className={cn(
        "group relative h-max rounded-lg overflow-hidden transition-all duration-300 cursor-auto backdrop-blur-lg",
        {
          "bg-white/5 border border-white/10 hover:border-purple-400": true,
        }
      )}
    >
      {/* Animated Gradient Background */}
      <Gradient
        className={cn("-top-14 left-0 size-70 ", {
          "right-0 left-[80%] top-0": index % 2 === 0,
        })}
      />
      {/* Flex Container for Image and Content */}
      <div
        className={cn("flex  flex-col md:flex-row gap-8 p-6 h-full ", {
          "md:flex-row-reverse": index % 2 !== 0, // Alternate layout for odd indexes
        })}
      >
        {/* Image Section (Full Width) */}
        <div
          className={cn(
            "relative flex-1 max-h-full  rounded-lg overflow-hidden transition-all duration-300 object-center",
            {
              "shadow-lg shadow-white/10 group-hover:shadow-purple-500/10":
                true, // Soft shadow
              "transform transition-transform duration-300 hover:[transform:translate3d(-5px,-10px,20px)] ":
                true,
            },
            imageBg
          )}
        >
          <Image
            src={image}
            alt={title}
            width={900}
            height={900}
            className={cn("w-full h-full object-contain rounded-lg")}
            style={{
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        {/* Content Section */}
        <div className={cn("flex-1  flex flex-col justify-between")}>
          {/* Title */}
          <h3
            className={cn("text-2xl font-mono font-[900] mb-4", {
              "text-white": true, // Design
            })}
          >
            {title}
          </h3>
          {/* Features Section */}
          <div>
            {/* Features Title */}
            <h4
              className={cn("text-lg font-mono font-[700] mb-4", {
                "text-purple-400": true, // Design
              })}
            >
              Features
            </h4>
            {/* Features List */}
            <ul
              className={cn("space-y-2 text-sm", {
                "text-gray-200": true, // Design
              })}
            >
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className={cn("flex items-center font-noto font-[600]", {
                    // Structure
                  })}
                >
                  <IconListArrow className="mr-2" /> {feature}
                </li>
              ))}
            </ul>
          </div>
          {/* Tech Stack Tags (Small) */}
          <div
            className={cn("flex flex-wrap gap-2 mt-6", {
              // Structure
            })}
          >
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center px-2 py-1 rounded-full text-xs font-noto font-[600] transition-all duration-200 cursor-pointer",
                  {
                    "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-white/5 hover:border-purple-400/30":
                      true, // Design and interaction
                  }
                )}
              >
                {tech.icon}
                <span className={cn("ml-1")}>{tech.name}</span>
              </div>
            ))}
          </div>
          {/* Link Preview and GitHub Button */}
          <div
            className={cn("flex items-center gap-4 mt-6", {
              // Structure
            })}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center px-4 py-2 rounded-md transition-all duration-200",
                {
                  "bg-white/10 border border-purple-300/35 text-white hover:bg-white/20 text-sm font-mono font-[600]":
                    true, // Design and interaction
                  "shadow-xl hover:shadow-purple-500/10": true, // Design
                }
              )}
            >
              <IconExternalLink className="mr-2 text-purple-600" size={20} />
              Live Site
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center px-4 py-2 rounded-md transition-all duration-200",
                {
                  "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-300/30 text-sm font-mono font-[600]":
                    true, // Design and interaction
                  "shadow-xl hover:shadow-purple-500/10": true,
                }
              )}
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
