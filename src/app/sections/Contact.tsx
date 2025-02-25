import { cn } from "@/lib/utils";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRocket,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function GetInTouch() {
  const [activeTab, setActiveTab] = useState<
    "message" | "impression" | "offers" | "map"
  >("message");

  return (
    <section
      id="get-in-touch"
      className={cn("relative py-32 px-4 overflow-hidden bg-transparent", {
        "text-white": true,
      })}
    >
      {/* Background Design Elements */}
      <div className={cn("absolute inset-0 overflow-hidden")}>
        {/* Gradient Blob 1 */}
        <div
          className={cn(
            "absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/30 to-sky-500/30 blur-3xl animate-float",
            {
              "top-[-10%] left-[-10%]": true,
            }
          )}
        ></div>

        {/* Gradient Blob 2 */}
        <div
          className={cn(
            "absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/30 to-sky-500/30 blur-3xl animate-float",
            {
              "bottom-[-10%] right-[-10%] animation-delay-2000": true,
            }
          )}
        ></div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1 bg-white/20 rounded-full animate-float",
              {
                "left-[10%]": i % 3 === 0,
                "left-[30%]": i % 3 === 1,
                "left-[50%]": i % 3 === 2,
              }
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Container */}
      <div className={cn("container mx-auto max-w-4xl relative z-10")}>
        {/* Section Heading */}
        <h2
          className={cn("text-5xl md:text-6xl font-bold text-center mb-12", {
            "text-white font-logo": true,
            "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400":
              true, // Neon gradient text
          })}
        >
          Get in Touch
        </h2>

        {/* Tabs */}
        <div className={cn("flex justify-center gap-4 mb-8")}>
          {[
            {
              id: "message",
              label: "Send Message",
              icon: <FaEnvelope size={20} />,
            },
            {
              id: "impression",
              label: "Impression Test",
              icon: <FaRocket size={20} />,
            },
            {
              id: "offers",
              label: "Special Offers",
              icon: <FaRocket size={20} />,
            },
            { id: "map", label: "Find Us", icon: <FaMapMarkerAlt size={20} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(
                  tab.id as "message" | "impression" | "offers" | "map"
                )
              }
              className={cn(
                "px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 backdrop-blur-lg",
                {
                  "bg-white/10 border border-white/20 text-white hover:bg-white/20":
                    activeTab !== tab.id,
                  "bg-gradient-to-r from-purple-600 to-sky-600 text-white":
                    activeTab === tab.id,
                }
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Based on Active Tab */}
        <div
          className={cn(
            "bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 shadow-lg"
          )}
        >
          {activeTab === "message" && <MessageForm />}
          {activeTab === "impression" && <ImpressionTest />}
          {activeTab === "offers" && <SpecialOffers />}
          {activeTab === "map" && <LocationMap />}
        </div>

        {/* Social Media Links */}
        <div className={cn("flex justify-center gap-6 mt-12")}>
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

// Message Form Component
function MessageForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! 🚀");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6")}>
      <div className={cn("space-y-4")}>
        <input
          type="text"
          placeholder="Your Name"
          className={cn(
            "w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400 placeholder:text-white/50 backdrop-blur-lg"
          )}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={cn(
            "w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400 placeholder:text-white/50 backdrop-blur-lg"
          )}
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400 placeholder:text-white/50 backdrop-blur-lg"
          )}
        ></textarea>
      </div>
      <button
        type="submit"
        className={cn(
          "w-full px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-lg"
        )}
      >
        <FaRocket size={20} />
        <span>Launch Message</span>
      </button>
    </form>
  );
}

// Impression Test Component
function ImpressionTest() {
  const [result, setResult] = useState<string | null>(null);

  const handleTest = () => {
    const impressions = [
      "Awesome!",
      "Impressive!",
      "Fantastic!",
      "Incredible!",
    ];
    setResult(impressions[Math.floor(Math.random() * impressions.length)]);
  };

  return (
    <div className={cn("text-center")}>
      <h3 className={cn("text-2xl font-bold mb-4")}>
        What&apos;s Your Impression?
      </h3>
      <button
        onClick={handleTest}
        className={cn(
          "px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white font-semibold transition-all duration-300 backdrop-blur-lg"
        )}
      >
        Take the Test
      </button>
      {result && (
        <p className={cn("mt-4 text-xl font-bold text-purple-400")}>
          Your Impression: {result}
        </p>
      )}
    </div>
  );
}

// Special Offers Component
function SpecialOffers() {
  return (
    <div className={cn("text-center")}>
      <h3 className={cn("text-2xl font-bold mb-4")}>Special Offers</h3>
      <p className={cn("text-lg mb-4")}>Check out our exclusive deals!</p>
      <ul className={cn("space-y-2")}>
        <li>🎉 20% Off on Your First Project</li>
        <li>🚀 Free Consultation for New Clients</li>
        <li>💡 Discounts on Bulk Orders</li>
      </ul>
    </div>
  );
}

// Location Map Component
function LocationMap() {
  return (
    <div className={cn("text-center")}>
      <h3 className={cn("text-2xl font-bold mb-4")}>Find Us</h3>
      <div className={cn("w-full h-96 rounded-lg overflow-hidden")}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2d2b2a1b3b5!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1625060000000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
