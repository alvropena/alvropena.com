import { projects } from "../constants";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="max-w-sm flex flex-col gap-4">
        <Link
          href="/"
          className="text-blue-600 text-lg flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </Link>
        <h1 className="text-2xl">Projects</h1>
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex items-center gap-2">
              <p className="text-lg mb-0">{project.title}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} in new window`}
                className="inline-block align-middle"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <p className="text-lg">{project.description}</p>
            {project.milestones.length > 0 && (
              <p className="text-lg">Milestones: {project.milestones.join(', ')}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
