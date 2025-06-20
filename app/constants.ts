export interface Project {
  title: string;
  description: string;
  url: string;
  github?: string;
  image: string;
  status: "active" | "inactive";
  milestones: string[];
}

export const projects: Project[] = [
  // {
  //   title: "Unemployed.tech",
  //   description: "AI Resume Builder for Tech Professionals",
  //   url: "https://unemployed.tech",
  //   github: "https://github.com/alvropena/unemployed.tech",
  //   image: "https://picsum.photos/800/200?random=5",
  //   status: "active",
  //   milestones: ["MVP"],
  // },
  {
    title: "GetMyPermit",
    description: "Modern learning platform for Gen Z drivers",
    url: "https://getmypermit.app",
    github: "https://github.com/alvropena/getmypermit.app",
    image: "https://picsum.photos/800/200?random=1",
    status: "active",
    milestones: ["3K+ users", "$300 MRR"],
  },
  {
    title: "Onley AI",
    description: "OnlyFans AI Agent for creators",
    url: "https://onley.ai",
    github: "",
    image: "https://picsum.photos/800/200?random=2",
    status: "inactive",
    milestones: ["100K+ messages sent"],
  },
  {
    title: "Bhuma",
    description: "Natural language to SQL query converter",
    url: "https://bhuma.dev",
    github: "",
    image: "https://picsum.photos/800/200?random=3",
    status: "inactive",
    milestones: ["MVP"],
  },
  {
    title: "Dudda",
    description: "Marketplace connecting tutors with students",
    url: "https://dudda.app",
    github: "https://github.com/alvropena/dudda.app",
    image: "https://picsum.photos/800/200?random=4",
    status: "inactive",
    milestones: ["1K+ users"],
  },
];
