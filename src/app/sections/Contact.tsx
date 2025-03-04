import ContactForm from "@/components/ContactForm";
import {
  IconFacebook,
  IconGithub,
  IconInsta,
  IconLinkedIn,
  IconX,
} from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 pb-20 bg-transparent overflow-hidden  relative"
    >
      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16 font-logo font-[400]">
          <h2 className="text-6xl font-bold mb-4 text-white">Contact Me</h2>
          {/* <p className="text-lg font-mono font-[600] text-gray-300">
            Let&apos;s build something amazing together.
          </p> */}
        </div>

        {/* Animated Gradients */}
        <div className="absolute top-20 left-0 h-96 w-96 rounded-full blur-3xl opacity-20  bg-gradient-to-r from-purple-500 to-sky-500 animate-spin"></div>
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-500 to-sky-500 animate-spin"></div>

        <div className="max-w-4xl mx-auto bg-[url('/bgContact3.png')] bg-center bg-cover bg-no-repeat backdrop-blur-md rounded-xl shadow-2xl shadow-gray-800 overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Contact Form */}
          <ContactForm />

          {/* Right Side - Social Media Links */}
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}

function ContactLinks() {
  const linksData = [
    {
      name: "Facebook",
      url: "https://facebook.com/sahedulislamFB",
      icon: <IconFacebook className="size-7" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/i_am_sahed",
      icon: <IconX className="size-7" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/i.am.sahed",
      icon: <IconInsta className="size-7" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sahedulislamrony",
      icon: <IconLinkedIn className="size-7" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/sahedulislamrony",
      icon: <IconGithub className="size-7 text-white" />,
    },
  ];

  return (
    <div className="w-full md:w-1/2 bg-trasparent p-8 flex flex-col justify-center items-center space-y-8">
      {/* Top Heading */}
      <h2 className="text-4xl lg:text-5xl font-roboto font-[900] text-white mb-4 text-center">
        Let&apos;s Connect
      </h2>

      {/* Divider Line */}
      <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        {linksData.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-3xl  text-gray-200 transition-all duration-300 transform hover:scale-110`}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Subtle Call-to-Action Text */}
      <p className="text-gray-300 text-sm mt-4 font-roboto font-[600] text-center">
        Reach out and let&apos;s create something amazing together.
      </p>
    </div>
  );
}
