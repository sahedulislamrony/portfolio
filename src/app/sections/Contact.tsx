import ContactForm from "@/components/ContactForm";
import { socialData } from "@/data/SocialData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 pb-20 bg-transparent overflow-hidden relative space-v bg-[url('/blob-bg3.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className=" mx-auto px-4 relative">
        <div className="text-center mb-16 font-poppins font-[900]">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Contact Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto  backdrop-blur-md rounded-xl  overflow-hidden flex flex-col md:flex-row border-1 border-gray-500">
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
  return (
    <div className="w-full md:w-1/2 bg-transparent p-6 md:p-8 flex flex-col justify-center items-center space-y-6 md:space-y-8">
      <h2 className="text-3xl lg:text-4xl font-roboto font-[900] text-white mb-4 text-center">
        Let&apos;s Connect
      </h2>

      <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

      <div className="flex space-x-4 md:space-x-6">
        {socialData.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl text-gray-200 transition-all duration-300 transform hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <p className="text-gray-300 text-sm md:text-base mt-4 font-roboto font-[400] text-center">
        Reach out and let&apos;s create something amazing together.
      </p>
    </div>
  );
}
