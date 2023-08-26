import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveSectionProvider } from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prawish Biharie",
  description: "Personal portfolio website.",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-400`}
      >
        <ActiveSectionProvider>{children}</ActiveSectionProvider>
      </body>
    </html>
  );
}
