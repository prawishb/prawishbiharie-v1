import ObservableSection from "@/components/ObservableSection";
import Project from "@/components/Project";
import { projects } from "@/data";

type Props = {};

const SectionProjects = (props: Props) => {
  return (
    <ObservableSection id="Projects" title="Projects">
      <ul className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <li key={index}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </ObservableSection>
  );
};

export default SectionProjects;
