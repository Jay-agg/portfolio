export const METADATA = {
  author: "Jayant Aggarwal",
  title: "Portfolio | Jayant Aggarwal",
  description:
    "Jayant Aggarwal is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://jayantaggarwal.vercel.app/",
  twitterHandle: "@jayantftx",
  keywords: [
    "Jayant Aggarwal",
    "Full Stack Engineer",
    "React Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),

  image:
    "https://res.cloudinary.com/de6jcj5yx/image/upload/v1719612964/ztmgacaqf6i32ppjx5eb.png",

  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Experience",
    ref: "experience",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: jayantaggarwal021@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/jayant-aggarwal-418910248/",
  },
  {
    name: "github",
    url: "https://github.com/Jay-agg",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/jayantaggarwall/",
  },
  {
    name: "twitter",
    url: "https://x.com/jayantftx",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Skechy",
    image: "/projects/Sketchy.png",
    blurImage: "/projects/SketchyDrawboard.png",
    description: "Realtime collaboraive dashboard",
    gradient: ["#142D46", "#2E4964"],
    url: "https://skechy.vercel.app/",
    tech: ["next", "typescript", "react", "tailwindcss", "shadcn"],
  },
  {
    name: "MockAI",
    image: "/projects/MockAIHome.png",
    blurImage: "/projects/MockAIFeedback.png",
    description: "AI powered mock interview application",
    gradient: ["#000066", "#6699FF"],
    url: "https://aceyourinterview.vercel.app/",
    tech: ["react", "shadcn", "javascript", "next"],
  },

  {
    name: "NetflixGPT",
    image: "/projects/netflix.png",
    blurImage: "/projects/netflix.png",
    description: "Netflix clone with AI integration",
    gradient: ["#F14658", "#DC2537"],
    url: "https://netflixgpt-ten.vercel.app/",
    tech: ["react", "redux", "tailwindcss", "firebase"],
  },
  {
    name: "FoodVilla",
    image: "/projects/foodvilla.jpeg",
    blurImage: "/projects/foodvilla.jpeg",
    description:
      "A multinational restaurant aggregator , built on live swiggy API",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://foodvilla-jayant.netlify.app/",
    tech: ["redux", "react", "tailwindcss"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "M2R Technomations",
//     title: "Frontend Developer",
//     location: "Gurugram, Haryana",
//     range: "June 24' - August 24'",
//     responsibilities: [
//       "Led creation of a HRMS platform for a UK based client.",
//       "Fixed 50+ Bugs in the pre existing codebase.",
//       "Collaborated with backend engineers to integrate REST api in the project..",
//     ],
//   },
// ];

export const WORK_CONTENTS = {
  M2R: [
    {
      title: "M2R Technomations LLP",
      description:
        "Led creation of a HRMS platform for a UK based client. Fixed 50+ Bugs in the pre existing codebase. Collaborated with backend engineers to integrate REST api in the project.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
