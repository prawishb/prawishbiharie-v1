import Link from "next/link";
import ObservableSection from "@/components/ObservableSection";

type Props = {};

const SectionContact = (props: Props) => {
  return (
    <ObservableSection id="Contact" title="Contact">
      <p>
        {`I'm actively seeking a web developer role that challenges me to grow,
        collaborate, and make a meaningful impact. If you're looking for a
        dedicated developer ready to bring fresh ideas to the table, let's
        connect and explore the possibilities together.`}
      </p>
      <h5 className="font-medium text-zinc-200 mt-4">
        The best way to reach me is by email at{" "}
        <Link href="mailto:prawishbiharie@gmail.com" className="text-blue-600">
          prawishbiharie@gmail.com
        </Link>
      </h5>
    </ObservableSection>
  );
};

export default SectionContact;
