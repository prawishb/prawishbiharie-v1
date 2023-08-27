import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";

import SectionAbout from "./(sections)/SectionAbout";
import SectionSkills from "./(sections)/SectionSkills";
import SectionProjects from "./(sections)/SectionProjects";
import SectionExperience from "./(sections)/SectionExperience";
import SectionContact from "./(sections)/SectionContact";
import Link from "next/link";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
      <header className="relative py-12 sm:py-20 max-w-lg sm:pr-4 sm:sticky sm:top-0 sm:flex sm:max-h-screen sm:flex-col sm:justify-between ">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-zinc-50">Prawish Biharie</h1>
          <h2 className="font-medium tracking-tight text-zinc-100">
            Electrical engineer & software enthusiast.
          </h2>
          <p className="max-w-md leading-normal">
            Electrical engineer turned software pro. Bridging hardware-software
            gap, embracing innovation through continuous learning.
          </p>

          <Link
            href="/"
            className="bg-blue-600 text-zinc-100 text-sm font-medium w-fit inline-flex items-center justify-center h-9 px-4 py-2 rounded hover:bg-blue-600/90"
          >
            Download Resume
          </Link>
        </div>

        <Navbar />

        {/* <SocialMedia /> */}
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
