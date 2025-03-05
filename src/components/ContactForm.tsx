// components/ContactForm.jsx
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  type FormState = "IDLE" | "LOADING" | "ERROR" | "SUCCESS";
  const [formState, setFormState] = useState<FormState>("IDLE");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setFormState("LOADING");
      // Call the API route
      const [response] = await Promise.all([
        fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        delay(500), // Waits for 0.5 seconds
      ]);

      const result = await response.json();

      if (response.ok) {
        // Success toast (green)
        toast.success("Message sent successfully!", {
          description: "We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message.", {
          description: result.error || "Please try again.",
        });
      }

      setFormState("IDLE");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Network or other errors
      toast.error("An error occurred.", {
        description: "Please check your connection and try again.",
      });
      setFormState("ERROR");
    }
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full md:w-1/2 p-8 ">
      <form onSubmit={handleSubmit}>
        <InputItem
          label="Full Name"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          type="text"
          onChange={handleChange}
          placeholder="John Doe"
        />
        <InputItem
          label="Email Address"
          id="email"
          name="email"
          value={formData.email}
          type="email"
          onChange={handleChange}
          placeholder="jon@gmail.com"
        />
        <InputItem
          label="Message"
          id="message"
          name="message"
          value={formData.message}
          type="text"
          onChange={handleChange}
          isTextArea
        />
        <button
          type="submit"
          className={cn(
            "w-full bg-blue-500 font-[600] text-black py-2 px-4 rounded-md hover:from-purple-600 hover:to-sky-600 focus:outline-none  transition-all duration-200 flex justify-center items-center space-x-2",
            {
              "disabled:opacity-50  cursor-not-allowed ":
                formState === "LOADING",
            }
          )}
          disabled={formState === "LOADING"}
        >
          {formState == "LOADING" && <Loader />}
          {formState === "LOADING" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Anonymous Message Link */}
      <div className="mt-6 text-center text-gray-300 font-roboto font-[400]">
        <span className="text-sm">
          Or you can send me an anonymous message from{" "}
        </span>
        <a
          href="https://getmsg.netlify.app/sahed" // Replace with your actual link
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-[900] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400 hover:from-purple-500 hover:to-sky-500 transition-all duration-200"
        >
          here
        </a>
        <span className="text-sm">.</span>
      </div>
    </div>
  );
};

export default ContactForm;

type InputItemProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  type: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  className?: ClassValue;
  isTextArea?: boolean;
};

function InputItem({
  label,
  id,
  name,
  value,
  type,
  onChange,
  placeholder,
  className,
  isTextArea,
}: InputItemProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-mono font-[500] text-gray-100"
      >
        {label}
      </label>
      {!isTextArea && (
        <input
          type={type == "email" ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            "mt-1 block w-full px-3 py-2 font-mono  text-white border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-gray-800/50 ",
            className
          )}
          placeholder={placeholder}
        />
      )}
      {isTextArea && (
        <textarea
          id="message"
          name="message"
          rows={4}
          value={value}
          onChange={onChange}
          className="scrollbar-hide resize-none mt-1 block w-full px-3 py-2 border border-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-gray-800/50 text-white"
          placeholder="Your message here..."
        ></textarea>
      )}
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Loader() {
  return (
    <div className="flex size-6 mr-3 bg-[url('/loader3.svg')] bg-center bg-no-repeat bg-contain"></div>
  );
}
