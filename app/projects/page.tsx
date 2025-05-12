import { projects } from "../constants";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="max-w-sm flex flex-col gap-4">
        Projects
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex items-center gap-2">
              <p className="text-lg mb-0">{project.title}</p>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} in new window`}
                className="inline-block align-middle"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-lg">{project.description}</p>
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
    </div>
  );
}
