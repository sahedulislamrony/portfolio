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
import { cn } from "@/lib/utils";
import { cloneElement } from "react";
import { Button } from "@/components/ui/button";

export default function SideBar({
  OnClose,
  isVisible,
  changeVisibility,
}: {
  OnClose?: () => void;
  isVisible: boolean;
  changeVisibility: (state: boolean) => void;
}) {
  function handleClose() {
    changeVisibility(false);

    if (OnClose) {
      OnClose();
    }
  }

  return (
    <div
      className={cn(
        "w-full h-screen   bg-gray-50/5 backdrop-blur-[2px] fixed top-0 right-0 z-100 hidden",
        {
          block: isVisible,
        }
      )}
      onClick={handleClose}
    >
      <div className="w-full h-screen    flex justify-end items-center">
        <div className="w-[21.5rem] h-screen overflow-auto bg-black rounded-s-lg ">
          {/* top sec0 */}

          <div className="flex flex-row items-center py-2 px-6  justify-between border-b-[1px] border-sky-500">
            {/* logo */}
            <div className="flex flex-row justify-start items-center">
              <div className=" size-6 rounded-full ">
                <Image src="/art.png" alt="logo" width={800} height={800} />
              </div>
              <p className="text-md font-poppins font-[700] pl-3 dark:text-gray-100">
                <span className="text-sky-500"> Sahedul&apos;s </span> Portfolio
              </p>
            </div>

            {/* Action button  */}
            <div
              className="flex justify-end items-center p-2 dark:hover:bg-gray-50/5 hover:bg-gray-400 rounded-full cursor-pointer"
              onClick={handleClose}
            >
              <IconClose className="size-6 text-sky-600" />
            </div>
          </div>

          {/* Navigation  */}
          <div className="w-full h-fit overflow-scroll">
            <div className="py-5 border-b-[1px] border-sky-500 ">
              <div className="w-full h-fit px-6  flex flex-col gap-3">
                <NavItem href="#home" text="Home" icon={<IconHome />} />
                <NavItem href="#about" text="About" icon={<IconAbout />} />
                <NavItem
                  href="#education"
                  text="Education"
                  icon={<IconEducation />}
                />
                <NavItem href="#skills" text="Skills" icon={<IconSkills />} />
                <NavItem
                  href="#projects"
                  text="Projects"
                  icon={<IconProjects />}
                />
              </div>
            </div>

            {/* Unsinged user */}

            <CallInActionButtons />
          </div>
        </div>
      </div>
    </div>
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
        className=" group flex flex-row justify-start items-center  rounded-sm py-[0.2rem] pl-2 dark:hover:bg-gray-50/5 hover:ring-1 hover:ring-sky-500 hover:bg-gray-800 hover:text-gray-50 duration-200"
      >
        <div className="size-8 rounded-full grid place-items-center group-hover:text-sky-500">
          {Icon}
        </div>

        <h3 className="text-md font-poppins font-[500] pl-2 group-hover:text-sky-500 ">
          {text}
        </h3>
      </Link>
    </div>
  );
}

function CallInActionButtons() {
  return (
    <div className="py-5 px-6 ">
      <div className="flex flex-row justify-between items-end font-[600] font-poppins  ">
        <a href="#">
          <Button
            variant="outline"
            className="group  text-sm text-white bg-gray-900/30 hover:bg-white/9 hover:text-sky-400  border-sky-800"
          >
            <IconPhone className=" group-hover:text-sky-400" /> Contact Me
          </Button>
        </a>
        <Button
          variant="outline"
          className="group px-8 text-sm border-sky-500 rounded-sm  text-white bg-gray-900/30 hover:bg-white/9  hover:text-sky-500  transition-transform"
        >
          <IconDownload className=" group-hover:text-sky-400" /> Download CV
        </Button>
      </div>
    </div>
  );
}
