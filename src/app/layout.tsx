import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { Black_Ops_One, Roboto, Poppins } from "next/font/google";
import "./globals.css";

const Black_Ops = Black_Ops_One({
  variable: "--font-logo",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  title: "Sahedul Islam Rony | Software Engineer",
  description:
    "Hi, I'm Sahedul Islam Rony, a passionate full-stack  developer specializing in Next.js, React, Tailwind CSS, and Firebase. Explore my projects, technical blogs, and open-source contributions.",
  manifest: "/manifest",
  keywords: [
    "Sahedul Islam Rony",
    "Sahed",
    "Rony",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Firebase",
    "JavaScript",
    "TypeScript",
    "Frontend Engineer",
    "Open Source",
    "Portfolio",
    "CSE Student",
    "Jashore University of Science and Technology",
  ],
  authors: [{ name: "Sahedul Islam Rony", url: "https://sahedul.me" }],
  creator: "Sahedul Islam Rony",
  openGraph: {
    title: "Sahedul Islam Rony | Software Engineer",
    description:
      "I am Sahedul Islam Rony , a CSE undergraduate at Jashore University of Science and Technology. Passionate about React, Next.js, and web development. Check out my portfolio for projects and insights.",
    url: "https://sahedul.me",
    siteName: "Sahedul Islam Rony",
    images: [
      {
        url: "https://sahedul.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sahedul Islam Rony | Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@i_am_sahed",
    creator: "@i_am_sahed",
    title: "Sahedul Islam Rony | Software Engineer",
    description:
      "Explore my portfolio showcasing expertise in React, Next.js, Firebase, and full-stack  development.",
    images: ["https://sahedul.me/og-image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={` ${Black_Ops.variable} ${roboto.variable} ${poppins.variable} antialiased flex flex-col  items-center bg-black dark-scrollbar`}
        suppressHydrationWarning
      >
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
