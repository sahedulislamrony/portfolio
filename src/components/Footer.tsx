import { IconCopyright } from "@/components/ui/Icons";
import { socialData } from "@/data/SocialData";

export default function Footer() {
  return (
    <footer
      role="footer"
      className="bg-[#030303] text-white border-t border-gray-800 relative overflow-hidden"
    >
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-600 via-pink-500 to-sky-500 animate-gradient"></div>

      {/* SVG Wave Animation */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#7C3AED" // Purple-500
            fillOpacity="0.2"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,256L48,234.7C96,213,192,171,288,160C384,149,480,171,576,165.3C672,160,768,128,864,117.3C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="relative mx-auto px-4 py-8 max-w-7xl">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 my-6">
          {socialData.map((item, index) => {
            const { name, url, icon, falBackIcon } = item;

            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 transform-gpu"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {name === "Twitter" || name === "GitHub" ? falBackIcon : icon}
                </div>
              </a>
            );
          })}
        </div>

        {/* Secondary Contact Info */}
        <div className="text-center text-gray-400 text-sm font-roboto space-y-2 mb-6">
          <p>
            Email:{" "}
            <a
              href="mailto:cast.sahedul@gmail.com"
              className="text-gray-400 hover:text-sky-400 transition-all duration-300 font-medium hover:underline"
            >
              cast.sahedul@gmail.com
            </a>
          </p>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-sm font-roboto flex items-center justify-center">
          <IconCopyright className="text-gray-400 mr-1.5 w-4 h-4" />{" "}
          {new Date().getFullYear()}{" "}
          <span className="ml-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-pink-400">
            Sahedul Islam Rony
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
