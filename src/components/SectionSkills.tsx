import Section from "./ui/Section";

type Props = {};

const SectionSkills = (props: Props) => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="">
          <h5 className="text-zinc-100 font-semibold text-lg mb-2">
            Languages
          </h5>
          <ul className="flex flex-col gap-1">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>C++</li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-zinc-100 font-semibold text-lg mb-2">
            Front-End
          </h5>
          <ul className="flex flex-col gap-1">
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-zinc-100 font-semibold text-lg mb-2">Back-End</h5>
          <ul className="flex flex-col gap-1">
            <li>Express</li>
            <li>Php</li>
            <li>SQL</li>
            <li>Postgres</li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-zinc-100 font-semibold text-lg mb-2">Other</h5>
          <ul className="flex flex-col gap-1">
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default SectionSkills;
