import ObservableSection from "@/components/ObservableSection";

type Props = {};

const SectionAbout = (props: Props) => {
  return (
    <ObservableSection id="About" title="About">
      <div className="flex flex-col gap-4">
        <p>
          {`Hello, I'm Prawish Biharie, a seasoned professional who made a smooth transition from electrical engineering to software engineering, capitalizing on my 3+ years of experience. My background equips me with an analytical mindset and strong problem-solving skills, which I honed in electrical engineering, giving me a unique edge in crafting innovative solutions that bridge the gap between hardware and software realms.`}
        </p>
        <p>{`With an unwavering passion for continuous learning, I constantly explore new methodologies, languages, and tools to stay at the forefront of the dynamic software landscape. This proactive approach ensures that my skills remain finely tuned and pertinent, allowing me to offer fresh perspectives and tackle challenges effectively in this ever-evolving field.`}</p>
      </div>
    </ObservableSection>
  );
};

export default SectionAbout;
