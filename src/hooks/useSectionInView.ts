"use client"

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context"

export const useSectionInView = (sectionName: string, thresholdAmount = 0.75) => {
  const { ref, inView } = useInView({
    threshold: thresholdAmount
  });
  const { setActiveSection, timeSectionLinkClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeSectionLinkClick > 1000) setActiveSection(sectionName);
  }, [inView, setActiveSection, timeSectionLinkClick])

  return {
    ref
  }
}