import React, { useState } from "react";
import { Globe, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com",
    repo: "https://github.com/example/ecommerce",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website showcasing my skills, projects, and contact information.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://portfolio.com",
    repo: "https://github.com/example/portfolio",
  },
  {
    title: "Task Management App",
    description:
      "A task management application with drag-and-drop functionality and real-time updates.",
    technologies: ["React.js", "Firebase", "TailwindCSS"],
    link: "https://taskapp.com",
    repo: "https://github.com/example/taskapp",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot integrated with natural language processing for customer support.",
    technologies: ["Python", "TensorFlow", "Flask"],
    link: "https://chatbot.com",
    repo: "https://github.com/example/chatbot",
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-300 font-mono font-[600]">
            A collection of my recent work and contributions.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full max-w-3xl mx-auto">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 p-8 rounded-lg bg-gray-900/20 backdrop-blur-xl border border-white/5"
              >
                {/* Project Title */}
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mt-4">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-gray-800/50 text-gray-300 text-sm font-medium border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-sky-500 text-white hover:opacity-80 transition-all duration-200"
                  >
                    <Globe size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-all duration-200 border border-white/5 hover:border-purple-400/30"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={goToPrevSlide}
            className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-all duration-200 border border-white/5 hover:border-purple-400/30"
          >
            &larr; Prev
          </button>
          <button
            onClick={goToNextSlide}
            className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-all duration-200 border border-white/5 hover:border-purple-400/30"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
