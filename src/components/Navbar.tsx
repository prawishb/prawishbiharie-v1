"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [activeSection, setActiveSection] = useState<string>("About");

  return (
    <nav
      className="hidden lg:fixed lg:top-0 z-50"
      aria-label="In-page jump links"
    >
      <ul className="max-w-md flex gap-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="group flex items-center px-3 py-2 bg-zinc-600 "
              href={link.hashPath}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
