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
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
      <header className="relative py-20 max-w-lg sm:pr-4 sm:sticky sm:top-0 sm:flex sm:max-h-screen sm:flex-col sm:justify-between ">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-zinc-50">Prawish Biharie</h1>
          <h2 className="font-medium tracking-tight text-zinc-100">
            Electrical engineer & software enthusiast.
          </h2>
          <p className="max-w-md leading-normal">
            Electrical engineer turned software pro. Bridging hardware-software
            gap, embracing innovation through continuous learning.
          </p>
        </div>

        <Navbar />

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
