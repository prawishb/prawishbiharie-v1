export const navLinks = [
  {name: "About", hashPath: "#about"},
  {name: "Skills", hashPath: "#skills"},
  {name: "Projects", hashPath: "#projects"},
  {name: "Experience", hashPath: "#experience"},
  {name: "Contact", hashPath: "#contact"},
] as const;

export const projects: Project[] = [
  {
    imageUrl: "/personal-website.png",
    title: "Personal Website",
    description:
      "THIS is it! I am proud to present my personal website created using the dynamic Next.js framework and the versatile Tailwind CSS.",
    tags: ["Next.js 13", "Tailwindcss", "React"],
  },
  {
    imageUrl: "",
    title: "BlogIO",
    description:
      "I am proud to present my personal website created using the dynamic Next.js framework, Tailwind CSS and Sanity.io.",
    tags: ["Next.js 13", "Tailwindcss", "React", "Sanity.io"],
  },
];

export const experiences: Experience[] = [
  {
    name: "Software Engineer Intern",
    place: "Natin-MBO",
    date: "MAY — AUG 2021",
    description: "Developed a C++ desktop application designed to streamline MySQL database management. Leveraging my expertise in C++ programming, this application empowers users to effortlessly interact with their MySQL databases, simplifying data manipulation and enhancing workflow efficiency.",
    tags: ["C++", "MySQL"]
  }
]