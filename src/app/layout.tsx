import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
        className={`${inter.className} antialiased min-h-screen bg-zinc-900 text-zinc-400`}
      >
        {children}
      </body>
    </html>
  );
}
