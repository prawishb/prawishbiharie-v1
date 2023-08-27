import ObservableSection from "@/components/ObservableSection";
import Experience from "@/components/Experience";
import { experiences } from "@/data";

type Props = {};

const SectionExperience = (props: Props) => {
  return (
    <ObservableSection id="Experience" title="Experience" thresholdAmount={1}>
      <ul className="flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <li key={index}>
            <Experience experience={experience} />
          </li>
        ))}
      </ul>
    </ObservableSection>
  );
};

export default SectionExperience;
