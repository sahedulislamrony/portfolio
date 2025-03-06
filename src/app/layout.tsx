import type { Metadata } from "next";
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
        className={` ${Black_Ops.variable} ${roboto.variable} ${poppins.variable} antialiased flex flex-col  items-center bg-gray-500`}
        suppressHydrationWarning
      >
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
