import Link from "next/link";

import Navbar from "@/components/Navbar";
import SectionAbout from "@/components/SectionAbout";
import SectionSkills from "@/components/SectionSkills";
import SectionProjects from "@/components/SectionProjects";
import SectionExperience from "@/components/SectionExperience";
import SectionContact from "@/components/SectionContact";
import SocialMedia from "@/components/SocialMedia";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
      {/* <Navbar /> */}
      <header className="py-8 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-zinc-50">Prawish Biharie</h1>
          <h2 className="font-medium tracking-tight text-zinc-100">
            Electrical engineer & software enthusiast.
          </h2>
          <p className="max-w-md leading-normal">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>

          <Link
            href="#"
            target="_blank"
            className="inline-block w-fit py-2 px-4 rounded bg-blue-600 text-blue-50 transition-all ease-in-out duration-300"
          >
            Download My Resume
          </Link>
        </div>

        <SocialMedia />
      </header>

      <main className="py-20 flex flex-col gap-24">
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionExperience />
        <SectionContact />
      </main>
    </div>
  );
};

export default HomePage;
