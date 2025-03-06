import {
  GraduationCap,
  BookOpen,
  Award,
  Clock,
  Atom,
  LaptopMinimal,
} from "lucide-react";
import React from "react";

// types

export type AcademicProps = {
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
  tags: Array<{
    text: string;
    icon: React.ReactNode;
  }>;
  isOdd: boolean;
  link?: string | null;
};
type AcademicAchievement = Omit<AcademicProps, "isOdd">;

// Academic achievements data
const achievements: AcademicAchievement[] = [
  {
    icon: <BookOpen size={24} className="text-purple-400" />,
    title: "B.Sc. in Computer Science and Engineering",
    duration: "2023 - Present",
    description:
      "Jashore University of Science and Technology (JUST) , Jashore , Bangladesh",
    tags: [
      {
        text: "Undergraduate",
        icon: <GraduationCap size={16} className="mr-2 text-purple-400" />,
      },
      {
        text: "CSE",
        icon: <LaptopMinimal size={16} className="mr-2 text-sky-400" />,
      },
    ],
  },
  {
    icon: <BookOpen size={24} className="text-sky-400" />,
    title: "Higher Secondary Certificate",
    duration: "2020 - 2022",
    description: "Ruposhi Bangla College , Cumilla , Bangladesh",
    tags: [
      {
        text: "HSC",
        icon: <GraduationCap size={16} className="mr-2 text-purple-400" />,
      },
      {
        text: "Science",
        icon: <Atom size={16} className="mr-2 text-sky-400" />,
      },
    ],
  },
  {
    icon: <BookOpen size={24} className="text-purple-400" />,
    title: "Secondary School Certificate",
    duration: "2014 - 2020",
    description: "Bagmara High School , Cumilla , Bangladesh",
    tags: [
      {
        text: "SSC & JSC",
        icon: <GraduationCap size={16} className="mr-2 text-purple-400" />,
      },
      {
        text: "Science",
        icon: <Atom size={16} className="mr-2 text-sky-400" />,
      },
    ],
  },
  {
    icon: <Award size={24} className="text-purple-400" />,
    title: "Certifications",
    duration: "2020 - Present",
    description:
      "Completed numerous online courses and earned certifications in Software Development, Artificial Intelligence, and Cyber Security from renowned platforms such as Coursera and Udemy . These courses were designed and delivered by industry leaders like Meta , Google , and LinkedIn , as well as prestigious institutions including the University of California, Santa Cruz .",
    tags: [
      {
        text: "Meta",
        icon: <Award size={16} className="mr-2 text-sky-400" />,
      },
      {
        text: "Google",
        icon: <Award size={16} className="mr-2 text-sky-400" />,
      },
      {
        text: "Coursera",
        icon: <Award size={16} className="mr-2 text-sky-400" />,
      },
    ],
    link: "https://www.linkedin.com/in/sahedulislamrony/details/certifications/",
  },
  {
    icon: <Clock size={24} className="text-purple-400" />,
    title: "Ongoing Learning",
    duration: "2023 - Present",
    description:
      "Continuously learning advanced topics in Software Development, AI, and Cyber Security.",
    tags: [
      {
        text: "In Progress",
        icon: <Clock size={16} className="mr-2 text-sky-400" />,
      },
    ],
  },
];

export default achievements;
