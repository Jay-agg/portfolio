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
  "Engineering high-performance apps",
  "Enhancing scalability with Kubernetes",
  "I design event-driven systems with Kafka",
  "I create GenAI workflows using Python & LangChain",
  "Turning ideas into production-ready apps",
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
    name: "twitter",
    url: "https://x.com/jayantftx",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/jayantaggarwall/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "nodejs",
    "python",
    "golang",
    "langchain",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
  ],
  databases: ["mysql", "mongodb"],
  devops: ["git", "aws", "docker", "kubernetes", "kafka", "firebase"],
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
  SNIPE: [
    {
      title: "Snipe",
      description:
        "Created immersive web games for SoapCentral by SportsKeeda with 10,000+ daily active users. Led platform development of LXP Core, adopted by 100+ schools with 98% uptime. Built using Next.js, TypeScript, Firebase, and React Query while collaborating closely with distributed teams.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          SDE Intern
        </div>
      ),
    },
  ],
  M2R: [
    {
      title: "M2R Technomations LLP",
      description:
        "Developed a Human Resource Management System (HRMS) that streamlined onboarding for 10+ hires. Resolved 50+ bugs, enhancing performance and stability. Integrated RESTful APIs with backend engineers, improving data retrieval speed by 30% and ensuring seamless data flow.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Development Intern
        </div>
      ),
    },
  ],
};


