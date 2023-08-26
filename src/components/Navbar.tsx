"use client";

import Link from "next/link";

import { navLinks } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

type Props = {};

const Navbar = (props: Props) => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  // TODO: activeSection styling not being applied

  return (
    <nav className="hidden md:block" aria-label="In-page jump links">
      <ul className="max-w-md flex-col space-y-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="group flex items-center"
              href={link.hashPath}
              onClick={() => setActiveSection(link.name)}
            >
              <span
                className={`mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:bg-zinc-100 ${
                  link.name === activeSection ? "bg-zinc-100 w-16" : ""
                }`}
              ></span>

              <span
                className={`text-xs font-bold uppercase tracking-widest group-hover:text-zinc-100 ${
                  link.name === activeSection
                    ? "text-zinc-100"
                    : "text-zinc-400"
                }`}
              >
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
