"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [activeSection, setActiveSection] = useState<string>("About");

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navLinks.map((link) => (
          <li>
            <Link className="group flex items-center py-3" href={link.hashPath}>
              <span className="mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none"></span>
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
