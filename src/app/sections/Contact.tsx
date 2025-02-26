import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section
      id="get-in-touch"
      className={cn("relative py-32 px-4 overflow-hidden bg-black", {
        "text-white": true,
      })}
    >
      {/* Background Gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-purple-900/50 to-sky-900/50 animate-gradient"
        )}
      ></div>

      {/* Container */}
      <div
        className={cn("container mx-auto max-w-4xl relative z-10 text-center")}
      >
        {/* Heading */}
        <h1
          className={cn("text-5xl md:text-7xl font-bold mb-8", {
            "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400":
              true, // Gradient text
          })}
        >
          Step into the
          <br />
          <span className={cn("text-6xl md:text-8xl")}>future of design</span>
        </h1>

        {/* Subheading */}
        <p className={cn("text-lg md:text-xl text-white/70 mb-12")}>
          Let’s create something extraordinary together. Reach out and let’s
          bring your vision to life.
        </p>

        {/* Social Media Links */}
        <div className={cn("flex justify-center gap-6")}>
          {[
            {
              icon: <FaGithub size={24} />,
              href: "https://github.com/yourusername",
            },
            {
              icon: <FaLinkedin size={24} />,
              href: "https://linkedin.com/in/yourusername",
            },
            {
              icon: <FaEnvelope size={24} />,
              href: "mailto:youremail@example.com",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-4 rounded-full bg-white/10 border border-white/20 text-white/50 hover:bg-white/20 hover:text-white transition-all duration-300 backdrop-blur-lg"
              )}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
