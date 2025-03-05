import {
  IconFacebook,
  IconGithub,
  IconInsta,
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
    icon: <IconX className="size-6 hover:text-black" />,
    falBackIcon: <IconX className="size-6 hover:text-gray-500" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/i.am.sahed",
    icon: <IconInsta className="size-6 hover:text-rose-700" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sahedulislamrony",
    icon: <IconLinkedIn className="size-6 hover:text-sky-500" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/sahedulislamrony",
    icon: <IconGithub className="size-6 text-white hover:text-black" />,
    falBackIcon: (
      <IconGithub className="size-6 text-white hover:text-gray-500" />
    ),
  },
];

export { socialData };
