import Section from "./ui/Section";
import Project from "./Project";

import { projects } from "@/lib/data";

type Props = {};

const SectionProjects = (props: Props) => {
  return (
    <Section id="projects" title="Projects">
      <ul className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <li key={index}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default SectionProjects;
