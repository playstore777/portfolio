import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "../shared/styles/globals.css";
import { twMerge } from "tailwind-merge";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mohammed Adil Sharif's Portfolio",
  description:
    "Created with the help of Frontend Tribe and inspired by the cassie.codes portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
