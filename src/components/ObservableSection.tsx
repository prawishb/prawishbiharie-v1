"use client";

import { HTMLProps, ReactNode, useEffect } from "react";

import { cn } from "@/lib/utils";
import { useSectionInView } from "@/hooks/useSectionInView";

type Props = {
  title?: string;
  thresholdAmount?: number;
  children?: ReactNode;
  className?: string;
  id: string;
};

const ObservableSection = ({
  title,
  thresholdAmount = 0.75,
  children,
  className = "",
  id,
}: Props) => {
  const { ref } = useSectionInView(id, (thresholdAmount = thresholdAmount));

  return (
    <section id={id} ref={ref} className={cn("scroll-mt-20", className)}>
      {title && (
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6 border-b-4 w-fit">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};

export default ObservableSection;
