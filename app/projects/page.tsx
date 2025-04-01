"use client";

import { projects } from "./constants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-fit flex flex-col items-center justify-center p-4">
      <main className="flex flex-col items-center gap-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Projects
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors h-full">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4">
                    <CardTitle className="text-lg font-medium">
                      {project.title}
                    </CardTitle>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        project.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </span>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-4 pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.milestones.map((milestone, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full"
                        >
                          {milestone}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHubLogoIcon className="h-4 w-4" />
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
