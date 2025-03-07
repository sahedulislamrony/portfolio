import { ExternalLink } from "lucide-react";
import React from "react";
import type { AcademicProps } from "../../data/EducationData";
import achievements from "../../data/EducationData";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-transparent space-v  overflow-hidden"
    >
      <div className="mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16 font-poppins font-[900]">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Education
          </h2>
        </div>

        {/* Animated Gradient Background */}
        <div className="absolute top-20 left-0 h-48 w-48 md:h-96 md:w-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-spin"></div>
        <div className="absolute bottom-20 right-0 h-48 w-48 md:h-96 md:w-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-spin"></div>

        {/* Education Timeline */}
        <div className="relative ">
          {/* Timeline Line */}
          <div className="hidden sm:block absolute left-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-sky-500 transform -translate-x-1/2"></div>

          {/* Top Circle */}
          <div className="hidden sm:block absolute left-1/2 w-6 h-6 bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8 flex justify-center items-center flex-col">
            {achievements.map((achievement, index) => (
              <Academic
                key={index}
                icon={achievement.icon}
                title={achievement.title}
                duration={achievement.duration}
                description={achievement.description}
                tags={achievement.tags}
                isOdd={index % 2 !== 0}
                link={achievement?.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Academic Component
function Academic({
  icon,
  title,
  duration,
  description,
  tags,
  isOdd,
  link = null,
}: AcademicProps) {
  return (
    <div
      className={`flex items-center w-[80%]  border-sky-500 pb-5 sm:pb-0 border-b-2 sm:border-0 hover:border-purple-500 sm:w-full  justify-center ${
        isOdd ? "sm:flex-row-reverse flex-row" : "flex-row"
      }`}
    >
      {/* Left Side */}
      <div
        className={`w-full sm:w-1/2 ${
          isOdd ? "sm:pl-8 sm:text-left" : "sm:pr-8 sm:text-right text-left"
        }`}
      >
        <h3 className="text-2xl font-bold  text-purple-400">{title}</h3>
        <div
          className={`flex items-center space-x-2 mt-2 ${
            isOdd ? "justify-start  " : "sm:justify-end"
          }`}
        >
          <span className="text-gray-400 text-sm font-mono bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
            {duration.split(" - ")[0]}
          </span>
          <span className="text-gray-400 font-mono">to</span>
          <span className="text-gray-400 text-sm font-mono bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
            {duration.split(" - ")[1]}
          </span>
        </div>
        {/* Description */}
        <div className={`${isOdd ? "text-left " : "sm:text-right text-left"}`}>
          <p className="text-gray-200 text-sm mt-2 max-w-xl inline-block font-roboto font-[500]">
            {description}
          </p>
        </div>
        {/* Tag */}
        <div
          className={`flex gap-2 flex-wrap ${
            isOdd ? "sm:justify-start" : "sm:justify-end"
          } mt-4`}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-8 py-2 rounded-full bg-gray-800 text-gray-300 text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              {tag.icon} {tag.text}
            </span>
          ))}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-full bg-gray-800 text-gray-300 text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              <ExternalLink size={16} className="mr-2 text-sky-400" />
              See More
            </a>
          )}
        </div>
      </div>

      {/* Icon */}
      <div className="hidden sm:flex w-12 h-12  items-center justify-center bg-gray-900 rounded-full border-2 border-sky-800 z-10 ">
        {icon}
      </div>

      {/* Right Side (Empty for alignment) */}
      <div className={`hidden sm:block w-1/2 ${isOdd ? "pr-8" : "pl-8"}`}></div>
    </div>
  );
}
