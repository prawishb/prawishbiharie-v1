import Link from "next/link";
import Section from "@/components/Section";
import Image from "next/image";
import Navbar from "@/components/Navbar";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-zinc-50">
            Prawish Biharie
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-zinc-100 sm:text-xl">
            Electrical engineer & software enthusiast.
          </h2>
          <p className="max-w-xs leading-normal">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>

          <div>
            <Link
              href="#"
              target="_blank"
              className="inline-block py-2 px-4 border rounded hover:bg-blue-600/20 border-blue-600 text-blue-600 transition-all ease-in-out duration-300"
            >
              Download My CV
            </Link>
          </div>
        </div>

        <Navbar />
      </header>

      <main className="py-20 flex flex-col gap-24">
        <Section id="about" className="flex flex-col gap-4">
          <p>
            Hello, I&apos;m Prawish Biharie, a seasoned professional who
            seamlessly transitioned from the world of electrical engineering to
            embrace my true passion for software engineering. With over 3 years
            of dedicated experience in software engineering, I&apos;ve honed my
            skills and insights to craft innovative solutions that bridge the
            gap between hardware and software realms.
          </p>

          <p>
            Having started my career in electrical engineering, I&apos;ve
            carried forward the analytical mindset and problem-solving prowess
            that defined my earlier experiences. This unique blend of
            disciplines allows me to approach software development from a fresh
            perspective, often uncovering novel ways to tackle challenges.
          </p>

          <p>
            As an advocate for lifelong learning, I thrive on staying at the
            forefront of technological advancements. My passion for software
            engineering propels me to continuously explore new methodologies,
            languages, and tools, ensuring that my skills remain finely tuned
            and relevant in a rapidly evolving landscape.
          </p>
        </Section>

        <Section id="skills">
          <div className="grid grid-cols-4">
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
              <h5 className="text-zinc-100 font-semibold text-lg mb-2">
                Back-End
              </h5>
              <ul className="flex flex-col gap-1">
                <li>Express</li>
                <li>Php</li>
                <li>SQL</li>
                <li>Postgres</li>
              </ul>
            </div>

            <div className="">
              <h5 className="text-zinc-100 font-semibold text-lg mb-2">
                Other
              </h5>
              <ul className="flex flex-col gap-1">
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects">
          <ul className="flex flex-col gap-4">
            <li className="bg-zinc-800 p-4 rounded flex flex-row gap-4">
              <div className="w-40 aspect-video bg-zinc-600 rounded flex-shrink-0"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-100">Personal Website</h3>
                <p className="text-sm line-clamp-3">
                  &quot;THIS&quot; is it! I am proud to present my personal
                  website created using the dynamic <strong>Next.js</strong>{" "}
                  framework and the versatile <strong>Tailwind CSS</strong>.
                </p>
                <ul className="flex text-xs gap-2">
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    Next.js 13
                  </li>
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    Tailwindcss
                  </li>
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    React
                  </li>
                </ul>
              </div>
            </li>

            <li className="bg-zinc-800 p-4 rounded flex flex-row gap-4">
              <div className="w-40 aspect-video bg-zinc-600 rounded flex-shrink-0"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-100">BlogIO</h3>
                <p className="text-sm line-clamp-3">
                  I am proud to present my personal website created using the
                  dynamic <strong>Next.js</strong> framework,{" "}
                  <strong>Tailwind CSS</strong> and <strong>Sanity.io</strong>.
                </p>
                <ul className="flex text-xs gap-2">
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    Next.js 13
                  </li>
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    Tailwindcss
                  </li>
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    React
                  </li>
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    Sanity.io
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Section>

        <Section id="experience">
          <ul className="flex flex-col gap-4">
            <li className="bg-zinc-800 p-4 rounded flex flex-row gap-4">
              <div className="w-40 h-full flex-shrink-0 text-sm">
                <p>MAY — AUG 2021</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-zinc-100">Software Engineer Intern</h3>
                  <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
                  <p className="text-sm">Natin-MBO</p>
                </div>
                <p className="text-sm line-clamp-3">
                  Developed a C++ desktop application designed to streamline
                  MySQL database management. Leveraging my expertise in C++
                  programming, this application empowers users to effortlessly
                  interact with their MySQL databases, simplifying data
                  manipulation and enhancing workflow efficiency.
                </p>
                <ul className="flex text-xs gap-2">
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    C++
                  </li>
                  <li className="bg-blue-400 text-blue-900 px-2 py-1 rounded">
                    MySQL
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Section>

        <Section id="contact">
          <p>
            I&apos;m actively seeking a web developer role that challenges me to
            grow, collaborate, and make a meaningful impact. If you&apos;re
            looking for a dedicated developer ready to bring fresh ideas to the
            table, let&apos;s connect and explore the possibilities together.
          </p>
          <h5 className="font-medium text-zinc-200 mt-4">
            The best way to reach me is by email at{" "}
            <Link
              href="mailto:prawishbiharie@gmail.com"
              className="text-blue-600"
            >
              prawishbiharie@gmail.com
            </Link>
          </h5>
        </Section>
      </main>
    </div>
  );
};

export default HomePage;
