"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { inPageNavigation } from "@/data";

const useActiveSectionStore = () => {
  const [activeSection, setActiveSection] = useState<string>("About");
  const [timeSectionLinkClick, setTimeSectionLinkClick] = useState<number>(0);

  return {
    activeSection,
    setActiveSection,
    timeSectionLinkClick,
    setTimeSectionLinkClick,
  };
};

export const ActiveSectionContext = createContext<ReturnType<
  typeof useActiveSectionStore
> | null>(null);

export type SectionName = (typeof inPageNavigation)[number]["name"];
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
