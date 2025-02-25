/* eslint-disable react/display-name */
import React from "react";
import {
  FaCode,
  FaCss3,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLock,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaTools,
} from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiLetsencrypt,
  SiMongodb,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import {
  RiNextjsLine,
  RiNotionFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { CiServer } from "react-icons/ci";
import { AiOutlineApi } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { PiBrainBold } from "react-icons/pi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { cn } from "@/lib/utils";

// Define a type for icon props
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// Higher-order function to wrap icons with default props
const withDefaultProps = <T extends React.ElementType>(
  Icon: T,
  defaultClassName: string,
  defaultSize = 16
) => {
  return ({ className, size, ...props }: IconProps) => {
    return (
      <Icon
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
        size={size ?? defaultSize}
        className={cn(defaultClassName, className)}
      />
    );
  };
};

// Exporting icons with default props
export const IconReact = withDefaultProps(RiReactjsLine, "text-sky-400");
export const IconReactRouter = withDefaultProps(SiReactrouter, "text-red-400");
export const IconRedux = withDefaultProps(SiRedux, "text-purple-500");
export const IconFirebase = withDefaultProps(IoLogoFirebase, "text-yellow-400");
export const IconDatabase = withDefaultProps(FaDatabase, "text-red-500");
export const IconFirebaseAuth = withDefaultProps(FaLock, "text-sky-400");
export const IconRSA = withDefaultProps(SiLetsencrypt, "text-green-400");
export const IconSass = withDefaultProps(FaSass, "text-pink-400");
export const IconNextJS = withDefaultProps(RiNextjsLine, "text-black");
export const IconGithub = withDefaultProps(FaGithub, "text-gray-200");
export const IconExternalLink = withDefaultProps(
  HiExternalLink,
  "text-gray-200"
);
export const IconLock = withDefaultProps(FaLock, "text-sky-400");
export const IconEncrypt = withDefaultProps(SiLetsencrypt, "text-green-400");
export const IconCode = withDefaultProps(FaCode, "text-sky-400");
export const IconHtml = withDefaultProps(FaHtml5, "text-red-500");
export const IconCss = withDefaultProps(FaCss3, "text-purple-600");
export const IconGit = withDefaultProps(FaGitAlt, "text-red-500");
export const IconTools = withDefaultProps(FaTools, "text-yellow-400");
export const IconNode = withDefaultProps(FaNodeJs, "text-green-400");
export const IconJava = withDefaultProps(FaJava, "text-red-500");
export const IconPython = withDefaultProps(FaPython, "text-green-600");
export const IconReactJS = withDefaultProps(FaReact, "text-blue-400");
export const IconJavascript = withDefaultProps(
  IoLogoJavascript,
  "text-yellow-400"
);
export const IconExpress = withDefaultProps(SiExpress, "text-gray-200");
export const IconMongoDB = withDefaultProps(SiMongodb, "text-green-400");
export const IconPostman = withDefaultProps(SiPostman, "text-orange-500");
export const IconTypescript = withDefaultProps(SiTypescript, "text-blue-400");
export const IconBrowser = withDefaultProps(GoBrowser, "text-green-400");
export const IconNextjs = withDefaultProps(RiNextjsLine, "text-black");
export const IconNotion = withDefaultProps(RiNotionFill, "text-gray-200");
export const IconTailwind = withDefaultProps(
  RiTailwindCssFill,
  "text-blue-400"
);
export const IconServer = withDefaultProps(CiServer, "text-green-400");
export const IconAPI = withDefaultProps(AiOutlineApi, "text-yellow-400");
export const IconMySQL = withDefaultProps(GrMysql, "text-sky-400");
export const IconBrain = withDefaultProps(PiBrainBold, "text-purple-400");
export const IconListArrow = withDefaultProps(
  MdOutlineDoubleArrow,
  "text-purple-400"
);
