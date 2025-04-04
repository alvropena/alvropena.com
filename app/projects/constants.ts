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
  {
    title: "dmv.gg",
    description: "modern learning platform for gen z drivers",
    url: "https://dmv.gg",
    github: "https://github.com/alvropena/dmv.gg",
    image: "https://picsum.photos/800/200?random=1",
    status: "active",
    milestones: ["mvp"],
  },
  {
    title: "unemployed.tech",
    description: "ai resume builder for tech professionals",
    url: "https://unemployed.tech",
    github: "https://github.com/alvropena/unemployed.tech",
    image: "https://picsum.photos/800/200?random=5",
    status: "active",
    milestones: ["mvp"],
  },
  {
    title: "onley.ai",
    description: "ai agent for onlyfans creators",
    url: "https://onley.ai",
    github: "",
    image: "https://picsum.photos/800/200?random=2",
    status: "active",
    milestones: ["100k+ messages"],
  },
  {
    title: "bhuma.dev",
    description: "natural language to sql query converter",
    url: "https://bhuma.dev",
    github: "",
    image: "https://picsum.photos/800/200?random=3",
    status: "inactive",
    milestones: ["mvp"],
  },
  {
    title: "dudda.app",
    description: "marketplace connecting tutors with students",
    url: "https://dudda.app",
    github: "https://github.com/alvropena/dudda.app",
    image: "https://picsum.photos/800/200?random=4",
    status: "inactive",
    milestones: ["1k+ users"],
  },
];
