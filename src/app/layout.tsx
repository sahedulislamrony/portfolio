import type { Metadata } from "next";
import { Toaster } from "sonner";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Black_Ops_One,
  Noto_Sans,
  Noto_Sans_Mono,
  Roboto,
} from "next/font/google";
import "./globals.css";

const IBM_mono = IBM_Plex_Mono({
  variable: "--font-heading",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const IBM_sans = IBM_Plex_Sans({
  variable: "--font-main",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const Black_Ops = Black_Ops_One({
  variable: "--font-logo",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const noto = Noto_Sans({
  variable: "--font-noto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const noto_mono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahedul Islam Rony",
  description: "Personal website of Sahedul Islam Rony",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${IBM_mono.variable} ${IBM_sans.variable} ${Black_Ops.variable} ${noto.variable} ${noto_mono.variable} ${roboto.variable} antialiased`}
        suppressHydrationWarning
      >
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
