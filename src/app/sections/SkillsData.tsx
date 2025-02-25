import {
  IconAPI,
  IconBrain,
  IconBrowser,
  IconCode,
  IconCss,
  IconDatabase,
  IconExpress,
  IconFirebase,
  IconGit,
  IconGithub,
  IconHtml,
  IconJava,
  IconJavascript,
  IconMongoDB,
  IconMySQL,
  IconNextJS,
  IconNode,
  IconNotion,
  IconPostman,
  IconPython,
  IconReact,
  IconSass,
  IconServer,
  IconTailwind,
  IconTools,
  IconTypescript,
} from "@/components/ui/Icons";
import React from "react";

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
    icon: <IconCode size={18} className="text-sky-400" />,
    skills: [
      { name: "C", icon: <IconCode /> },
      {
        name: "C++",
        icon: <IconCode className="text-purple-400" />,
      },
      { name: "Java", icon: <IconJava /> },
      {
        name: "Python",
        icon: <IconPython />,
      },
      {
        name: "JavaScript",
        icon: <IconJavascript />,
      },
      {
        name: "TypeScript",
        icon: <IconTypescript />,
      },
    ],
  },
  {
    title: "Frontend",
    icon: <IconBrowser size={18} className="text-sky-400" />,
    skills: [
      { name: "HTML", icon: <IconHtml /> },
      { name: "CSS", icon: <IconCss /> },
      { name: "SASS", icon: <IconSass /> },
      {
        name: "TailwindCSS",
        icon: <IconTailwind />,
      },
      {
        name: "React.js",
        icon: <IconReact />,
      },
      {
        name: "Next.js",
        icon: <IconNextJS className="text-purple-400" />,
      },
    ],
  },
  {
    title: "Backend",
    icon: <IconServer className="text-sky-400" />,
    skills: [
      {
        name: "Node.js",
        icon: <IconNode />,
      },
      {
        name: "Express.js",
        icon: <IconExpress />,
      },
      {
        name: "Next.js",
        icon: <IconNextJS size={16} className="text-purple-400" />,
      },
      {
        name: "REST APIs",
        icon: <IconAPI className="text-zinc-400" />,
      },

      {
        name: "Firebase",
        icon: <IconFirebase />,
      },
    ],
  },
  {
    title: "Databases",
    icon: <IconDatabase className="text-sky-400" />,
    skills: [
      {
        name: "MongoDB",
        icon: <IconMongoDB />,
      },
      {
        name: "MySQL",
        icon: <IconMySQL />,
      },
    ],
  },
  {
    title: "Tools",
    icon: <IconTools className="text-sky-400" />,
    skills: [
      { name: "Git", icon: <IconGit /> },
      {
        name: "Github",
        icon: <IconGithub />,
      },
      {
        name: "Notion ",
        icon: <IconNotion />,
      },
      {
        name: "Postman",
        icon: <IconPostman />,
      },
      {
        name: "AI Tools",
        icon: <IconBrain />,
      },
    ],
  },
];

export default skillCategories;

export type { SkillCategory, Skill };
