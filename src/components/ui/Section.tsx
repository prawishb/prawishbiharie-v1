import { cn } from "@/lib/utils";
import { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  title?: string;
}

const Section = ({ title, children, className = "", id = "" }: Props) => {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      {title && (
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6 border-b-4 w-fit">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};

export default Section;
