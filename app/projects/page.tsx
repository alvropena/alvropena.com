import { projects } from "../constants";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="max-w-sm flex flex-col gap-4">
      <h1 className="text-2xl">Projects</h1>
      {projects.map((project, index) => (
        <div key={project.title} className={index !== projects.length - 1 ? "pb-4 border-b" : ""}>
          <div className="flex items-center gap-2">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} in new window`}
              className="text-blue-500"
            >
              {project.title}
            </Link>
          </div>
          <p className="text-sm">{project.description}</p>
          {project.milestones.length > 0 && (
            <div className="flex flex-row gap-2 mt-1">
              {project.milestones.map((milestone) => (
                <Badge key={milestone} variant="secondary">
                  {milestone}
                </Badge>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
