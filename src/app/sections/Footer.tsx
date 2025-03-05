import { IconCopyright } from "@/components/ui/Icons";
import { socialData } from "@/data/SocialData";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white   border-t border-gray-800 relative">
      <div className="absolute top-0 left-0 w-full  h-0.5 bg-gradient-to-r from-purple-800 to-pink-600"></div>

      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-center space-x-5 my-5">
          {socialData.map((item, index) => {
            const { name, url, icon, falBackIcon } = item;

            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <div className="w-8 h-8">
                  {name === "Twitter" || name === "GitHub" ? falBackIcon : icon}
                </div>
              </a>
            );
          })}
        </div>

        {/* Copyright Text */}
        <div className="text-center text-gray-500 text-sm font-roboto  flex items-center justify-center ">
          <IconCopyright className="text-gray-500 mr-1.5" />{" "}
          {new Date().getFullYear()}{" "}
          <span className="ml-1 font-[700] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-900 ">
            Sahedul Islam Rony
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
