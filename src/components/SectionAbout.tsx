import Section from "./ui/Section";

type Props = {};

const SectionAbout = (props: Props) => {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4">
        <p>
          {`Hello, I'm Prawish Biharie, a seasoned professional who seamlessly
          transitioned from the world of electrical engineering to embrace my
          true passion for software engineering. With over 3 years of dedicated
          experience in software engineering, I've honed my skills and insights
          to craft innovative solutions that bridge the gap between hardware and
          software realms.`}
        </p>

        <p>
          {`Having started my career in electrical engineering, I've carried
          forward the analytical mindset and problem-solving prowess that
          defined my earlier experiences. This unique blend of disciplines
          allows me to approach software development from a fresh perspective,
          often uncovering novel ways to tackle challenges.`}
        </p>

        <p>
          {`As an advocate for lifelong learning, I thrive on staying at the
          forefront of technological advancements. My passion for software
          engineering propels me to continuously explore new methodologies,
          languages, and tools, ensuring that my skills remain finely tuned and
          relevant in a rapidly evolving landscape.`}
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
