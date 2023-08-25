import Section from "./ui/Section";
import Experience from "./Experience";

import { experiences } from "@/lib/data";

type Props = {};

const SectionExperience = (props: Props) => {
  return (
    <Section id="experience" title="Experience">
      <ul className="flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <li key={index}>
            <Experience experience={experience} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default SectionExperience;
