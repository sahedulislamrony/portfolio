import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconAbout,
  IconClose,
  IconDownload,
  IconEducation,
  IconHome,
  IconPhone,
  IconProjects,
  IconSkills,
} from "@/components/ui/Icons";
import { cloneElement } from "react";
import { Button } from "@/components/ui/button";
import { useDownloadResume } from "@/hooks/useDownload";
import useScroll from "@/hooks/useScroll";

export default function SideBar({
  OnClose,
  isVisible,
  changeVisibility,
}: {
  OnClose?: () => void;
  isVisible: boolean;
  changeVisibility: (state: boolean) => void;
}) {
  const handleClose = () => {
    changeVisibility(false);
    if (OnClose) {
      OnClose();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSidebarClick = (e: React.MouseEvent) => {
    // e.stopPropagation();
    // need to fix this
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="w-full h-screen bg-gray-50/5 backdrop-blur-[2px] fixed top-0 right-0 z-100"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-screen flex justify-end items-center ">
            {/* Sidebar Content */}
            <motion.div
              className="w-[21.5rem] h-screen overflow-auto bg-black rounded-s-lg"
              onClick={handleSidebarClick}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              {/* Top Section */}
              <div className="flex flex-row items-center py-2 px-6 justify-between border-b-[1px] border-sky-500">
                {/* Logo */}
                <div className="flex flex-row justify-start items-center">
                  <div className="size-6 rounded-full">
                    <Image src="/art.png" alt="logo" width={800} height={800} />
                  </div>
                  <p className="text-md font-poppins font-[700] pl-3 dark:text-gray-100">
                    <span className="text-sky-500"> Sahedul&apos;s </span>{" "}
                    Portfolio
                  </p>
                </div>

                {/* Close Button */}
                <div
                  className="flex justify-end items-center p-2 dark:hover:bg-gray-50/5 hover:bg-gray-400 rounded-full cursor-pointer"
                  onClick={handleClose}
                >
                  <IconClose className="size-6 text-sky-600" />
                </div>
              </div>

              {/* Navigation */}
              <div className="w-full h-fit overflow-hidden">
                <div className="py-5 border-b-[1px] border-sky-500">
                  <div className="w-full h-fit px-6 flex flex-col gap-3">
                    <NavItem href="#home" text="Home" icon={<IconHome />} />
                    <NavItem href="#about" text="About" icon={<IconAbout />} />
                    <NavItem
                      href="#education"
                      text="Education"
                      icon={<IconEducation />}
                    />
                    <NavItem
                      href="#skills"
                      text="Skills"
                      icon={<IconSkills />}
                    />
                    <NavItem
                      href="#projects"
                      text="Projects"
                      icon={<IconProjects />}
                    />
                  </div>
                </div>

                {/* Call-to-Action Buttons */}
                <CallInActionButtons />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavItem({
  text,
  icon,
  href,
}: {
  text: string;
  icon: React.ReactNode;
  href?: string;
}) {
  const Icon = cloneElement(
    icon as React.ReactElement,
    {
      className:
        "size-5 dark:text-gray-400 dark:group-hover:text-sky-500 group-hover:text-sky-500",
    } as { className: string }
  );
  return (
    <div className="mt-2 group transition-all">
      <Link
        href={href || "#"}
        className="group flex flex-row justify-start items-center rounded-sm py-[0.2rem] pl-2 dark:hover:bg-gray-50/5 hover:ring-1 hover:ring-sky-500 hover:bg-gray-800 hover:text-gray-50 duration-200"
      >
        <div className="size-8 rounded-full grid place-items-center group-hover:text-sky-500">
          {Icon}
        </div>
        <h3 className="text-md font-poppins font-[500] pl-2 group-hover:text-sky-500">
          {text}
        </h3>
      </Link>
    </div>
  );
}

function CallInActionButtons() {
  const download = useDownloadResume();
  const scroll = useScroll("contact");
  return (
    <div className="py-5 px-6">
      <div className="flex flex-row justify-between items-end font-[600] font-poppins">
        <Button
          variant="outline"
          className="group text-sm text-white bg-gray-900/30 hover:bg-white/9 hover:text-sky-400 border-sky-800"
          onClick={scroll}
        >
          <IconPhone className="group-hover:text-sky-400" /> Contact Me
        </Button>

        <Button
          variant="outline"
          className="group px-8 text-sm border-sky-500 rounded-sm text-white bg-gray-900/30 hover:bg-white/9 hover:text-sky-500 transition-transform"
          onClick={download}
        >
          <IconDownload className="group-hover:text-sky-400" /> Download CV
        </Button>
      </div>
    </div>
  );
}
