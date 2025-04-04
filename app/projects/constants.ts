export interface Project {
  title: string;
  description: string;
  url: string;
  github?: string;
  status: "active" | "inactive";
  milestones: string[];
}

export const projects: Project[] = [
  // {
  //   title: "unemployed.tech",
  //   description: "AI resume builder for tech professionals",
  //   url: "https://unemployed.tech",
  //   github: "https://github.com/alvropena/unemployed.tech",
  //   status: "active",
  //   milestones: ["MVP"],
  // },
  {
    title: "dmv.gg",
    description: "Modern learning platform for Gen Z drivers",
    url: "https://dmv.gg",
    github: "https://github.com/alvropena/dmv.gg",
    status: "active",
    milestones: ["MVP"],
  },
  {
    title: "onley.ai",
    description: "AI agent for OnlyFans creators",
    url: "https://onley.ai",
    github: "",
    status: "active",
    milestones: ["100k+ messages"],
  },

  {
    title: "bhuma.dev",
    description: "Natural language to SQL query converter",
    url: "https://bhuma.dev",
    github: "",
    status: "inactive",
    milestones: ["MVP"],
  },
  {
    title: "dudda.app",
    description: "Marketplace connecting tutors with students",
    url: "https://dudda.app",
    github: "https://github.com/alvropena/dudda.app",
    status: "inactive",
    milestones: ["1k+ users"],
  },
];
