import { cn } from "@/lib/utils";
import { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLDivElement> {}

const Section = ({ children, className = "", id = "" }: Props) => {
  return (
    <section id={id} className={cn("", className)}>
      {children}
    </section>
  );
};

export default Section;
