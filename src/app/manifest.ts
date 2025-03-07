// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sahedul Islam Rony",
    short_name: "Sahed",
    description: "A showcase of my work, skills, and projects as a developer.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: "https://sahedul.me",
      },
    ],
    prefer_related_applications: false,
    shortcuts: [
      {
        name: "Home",
        short_name: "Home",
        description: "Go to the Home page.",
        url: "#home",
      },
      {
        name: "About Me",
        short_name: "About",
        description: "Learn more about me and my background.",
        url: "#about",
      },
      {
        name: "Projects",
        short_name: "Projects",
        description: "Explore my latest projects and work.",
        url: "#projects",
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch with me.",
        url: "#contact",
      },
    ],
    categories: ["portfolio", "development", "design"],
    lang: "en-US",
    dir: "ltr",
  };
}
