export const inPageNavigation = [
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
    title: "InfinitySphere",
    description:
      "Built with the latest web development frameworks, this ecommerce platform offers a responsive and fluid user experience across devices. Through scalable architecture, it ensures smooth navigation even during peak traffic. The integration of secure payment gateways and robust backend systems guarantees a seamless transaction process.",
    tags: ["Next.js 13", "Tailwindcss", "React"],
  },
  {
    imageUrl: "",
    title: "BlogIO",
    description:
      "I am proud to present my personal website created using the dynamic Next.js framework, Tailwind CSS and Sanity.io.",
    tags: ["Next.js 13", "Tailwindcss", "React", "Sanity.io"],
  },
  {
    imageUrl: "",
    title: "API Endpoint Tester (In development)",
    description:
      "A comprehensive platform that equips developers with powerful tools to simplify testing, documenting, and managing APIs. This project aims to streamline the API lifecycle, offering a seamless user experience for efficient development and integration.",
    tags: ["React", "Tailwindcss" ],
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