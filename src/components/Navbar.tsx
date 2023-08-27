"use client";

import Link from "next/link";

import { inPageNavigation } from "@/data";
import { useActiveSectionContext } from "@/context/active-section-context";

type Props = {};

const Navbar = (props: Props) => {
  const { activeSection, setActiveSection, setTimeSectionLinkClick } =
    useActiveSectionContext();

  return (
    <nav className="hidden md:block" aria-label="In-page jump links">
      <ul className="max-w-md flex-col space-y-4">
        {inPageNavigation.map((link, index) => (
          <li key={index}>
            <Link
              className="group flex items-center"
              href={link.hashPath}
              onClick={() => {
                setActiveSection(link.name);
                setTimeSectionLinkClick(Date.now());
              }}
            >
              <span
                className={`mr-4 h-px transition-all group-hover:bg-zinc-100 ${
                  link.name === activeSection
                    ? "bg-zinc-100 w-16"
                    : "bg-zinc-600 w-8"
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
