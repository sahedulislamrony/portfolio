import {
  IconCss,
  IconDatabase,
  IconEncrypt,
  IconFirebase,
  IconLock,
  IconReact,
  IconReactRouter,
  IconRedux,
  IconSass,
} from "@/components/ui/Icons";
import { ClassValue } from "clsx";

interface Project {
  title: string;
  image: string;
  imageBg?: ClassValue;
  features: string[];
  techStack: { name: string; icon: React.ReactElement }[];
  link: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "Anonymous Chat App",
    image: "/projects/chatApp2.png",
    imageBg: "bg-[#0e1217]",
    link: "https://getmsg.netlify.app/",
    repo: "https://github.com/sahedulislamrony/anonymous",
    features: [
      "Receive messages from anyone without exposing identity.",
      "Sign in with Google via Firebase Authentication.",
      "Unique username generation for each user.",
      "RSA encryption for secure messaging.",
      "Pause the link to stop receiving messages temporarily.",
      "A modern and user-friendly design to enhance user experience.",
    ],
    techStack: [
      {
        name: "React.js",
        icon: <IconReact />,
      },
      {
        name: "React Router",
        icon: <IconReactRouter />,
      },
      {
        name: "Redux",
        icon: <IconRedux />,
      },
      {
        name: "Firebase",
        icon: <IconFirebase />,
      },
      {
        name: "Real-time Database",
        icon: <IconDatabase />,
      },
      {
        name: "Firebase Auth",
        icon: <IconLock />,
      },
      {
        name: "RSA encryption",
        icon: <IconEncrypt />,
      },
    ],
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    imageBg: "bg-[#000]",
    features: [
      "Responsive design for all devices.",
      "Dark mode toggle.",
      "Interactive and user-friendly UI.",
      "Optimized for performance and SEO.",
      "Modern and clean design.",
    ],

    link: "https://sahedul.me/",
    repo: "https://github.com/sahedulislamrony/portfolio",
    techStack: [
      {
        name: "React.js",
        icon: <IconReact />,
      },
      {
        name: "SASS",
        icon: <IconSass />,
      },
      {
        name: "React Router",
        icon: <IconReactRouter />,
      },
      {
        name: "Firebase",
        icon: <IconFirebase />,
      },
      {
        name: "Real-time DB",
        icon: <IconDatabase />,
      },
      {
        name: "Firebase Auth",
        icon: <IconLock />,
      },
    ],
  },
  {
    title: "Google Keep Clone",
    image: "/projects/keep.png",
    imageBg: "bg-[#fff]",
    link: "https://keep11.web.app/",
    repo: "https://github.com/sahedulislamrony/google-keep-clone",
    features: [
      "Fully responsive design",
      "Sign in with Google, Facebook, GitHub, or Twitter via Firebase Authentication.",
      "Create, edit, and delete notes.",
      "Real-time updates with Firebase Realtime Database.",
    ],
    techStack: [
      {
        name: "React.js",
        icon: <IconReact />,
      },
      {
        name: "SASS",
        icon: <IconSass />,
      },
      {
        name: "React Router",
        icon: <IconReactRouter />,
      },
      {
        name: "Firebase",
        icon: <IconFirebase />,
      },
      {
        name: "Real-time DB",
        icon: <IconDatabase />,
      },
      {
        name: "Firebase Auth",
        icon: <IconLock />,
      },
    ],
  },
  {
    title: "React Quiz App",
    image: "/projects/quiz.png",
    imageBg: "bg-[#fff]",
    features: [
      "Multiple choice questions.",
      "Score tracking.",
      "Responsive design.",
      "Sign in with Google via Firebase Authentication.",
      "User-friendly and intuitive UI",
    ],
    link: "https://quiz-app02.web.app/",
    repo: "https://github.com/sahedulislamrony/react-quiz-app",
    techStack: [
      {
        name: "React.js",
        icon: <IconReact />,
      },
      {
        name: "Firebase",
        icon: <IconFirebase />,
      },
      {
        name: "CSS",
        icon: <IconCss />,
      },
      {
        name: "React Router",
        icon: <IconReactRouter />,
      },
      {
        name: "Firebase Auth",
        icon: <IconLock />,
      },
      {
        name: "Firebase Realtime DB",
        icon: <IconDatabase />,
      },
    ],
  },
];

export default projects;
export type { Project };
