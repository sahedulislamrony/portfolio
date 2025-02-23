import React from "react";
import {
  FaCode,
  FaCss3,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaTools,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiPostman, SiTypescript } from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import { RiNextjsLine, RiNotionFill, RiTailwindCssFill } from "react-icons/ri";
import { CiServer } from "react-icons/ci";
import { AiOutlineApi } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { PiBrainBold } from "react-icons/pi";

interface Skill {
  name: string;
  icon: React.ReactNode;
}
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Language Skills",
    icon: <FaCode size={18} className="text-sky-400" />,
    skills: [
      { name: "C", icon: <FaCode size={16} className="text-sky-400" /> },
      {
        name: "C++",
        icon: <FaCode size={16} className="text-purple-400" />,
      },
      { name: "Java", icon: <FaJava size={16} className="text-sky-400" /> },
      {
        name: "Python",
        icon: <FaPython size={16} className="text-purple-400" />,
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript size={16} className="text-sky-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={16} className="text-purple-400" />,
      },
    ],
  },
  {
    title: "Frontend",
    icon: <GoBrowser size={18} className="text-sky-400" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 size={16} className="text-sky-400" /> },
      { name: "CSS", icon: <FaCss3 size={16} className="text-purple-400" /> },
      { name: "SASS", icon: <FaSass size={16} className="text-sky-400" /> },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill size={16} className="text-purple-400" />,
      },
      {
        name: "React.js",
        icon: <FaReact size={16} className="text-sky-400" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsLine size={16} className="text-purple-400" />,
      },
    ],
  },
  {
    title: "Backend",
    icon: <CiServer size={18} className="text-sky-400" />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={16} className="text-sky-400" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={16} className="text-purple-400" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsLine size={16} className="text-purple-400" />,
      },
      {
        name: "REST APIs",
        icon: <AiOutlineApi size={16} className="text-sky-400" />,
      },

      {
        name: "Firebase",
        icon: <IoLogoFirebase size={16} className="text-sky-400" />,
      },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase size={18} className="text-sky-400" />,
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={16} className="text-sky-400" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql size={16} className="text-purple-400" />,
      },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools size={18} className="text-sky-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt size={16} className="text-sky-400" /> },
      {
        name: "Github",
        icon: <FaGithub size={16} className="text-purple-400" />,
      },
      {
        name: "Notion ",
        icon: <RiNotionFill size={16} className="text-purple-400" />,
      },
      {
        name: "Postman",
        icon: <SiPostman size={16} className="text-purple-400" />,
      },
      {
        name: "AI Tools",
        icon: <PiBrainBold size={16} className="text-sky-400" />,
      },
    ],
  },
];

export default skillCategories;

export type { SkillCategory, Skill };
