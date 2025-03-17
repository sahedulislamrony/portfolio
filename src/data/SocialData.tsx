import {
  IconEmail,
  IconFacebook,
  IconGithub,
  IconLinkedIn,
  IconX,
} from "@/components/ui/Icons";

interface Links {
  name: string;
  url: string;
  icon: React.ReactElement;
  falBackIcon?: React.ReactElement;
}

const socialData: Links[] = [
  {
    name: "Facebook",
    url: "https://facebook.com/sahedulislamFB",
    icon: <IconFacebook className="size-6 hover:text-sky-500" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/i_am_sahed",
    icon: <IconX className="size-6 hover:text-gray-500" />,
    falBackIcon: <IconX className="size-6 hover:text-gray-500" />,
  },
  {
    name: "Email",
    url: "mailto:cast.sahedul@gmail.com?subject=Contact%20from%20Portfolio",
    icon: <IconEmail className="size-6 hover:text-rose-700" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sahedulislamrony",
    icon: <IconLinkedIn className="size-6 hover:text-sky-500" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/sahedulislamrony",
    icon: <IconGithub className="size-6 text-white hover:text-gray-500" />,
    falBackIcon: (
      <IconGithub className="size-6 text-white hover:text-gray-500" />
    ),
  },
];

export { socialData };
