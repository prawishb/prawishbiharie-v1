"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { navLinks } from "@/lib/data";

const useActiveSectionStore = () => {
  const [activeSection, setActiveSection] = useState<SectionName>("About");

  return {
    activeSection,
    setActiveSection,
  };
};

export const ActiveSectionContext = createContext<ReturnType<
  typeof useActiveSectionStore
> | null>(null);

type SectionName = (typeof navLinks)[number]["name"];
type Props = {
  children: ReactNode;
};

export const ActiveSectionProvider = ({ children }: Props) => {
  const store = useActiveSectionStore();

  return (
    <ActiveSectionContext.Provider value={store}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context)
    throw new Error(
      "useActiveSectionContext must be used withing a ActiveSectionProvider"
    );

  return context;
};
