"use client";

import { Calendar, ExternalLink, Github, Sparkles } from "lucide-react";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  association?: string;
}

export default function ProjectCard({
  title,
  period,
  description,
  technologies,
  demoLink,
  githubLink,
  association,
}: ProjectCardProps) {
  const isCurrent = period.toLowerCase().includes("present");

  return (
    <div className={`group relative rounded-lg border bg-black p-4 transition-all duration-200 sm:p-6 ${
      isCurrent 
        ? "border-2 border-white hover:border-gray-300" 
        : "border-gray-800 hover:border-gray-600"
    }`}>
      {isCurrent && (
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-medium text-white">Current Project</span>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-bold break-words text-white sm:text-xl">
              {title}
            </h3>
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span>{period}</span>
            </div>
            {association && (
              <p className="mb-3 text-sm text-gray-500">
                Associated with {association}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-4"
              >
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
                <span>Live Demo</span>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-4"
              >
                <Github className="h-4 w-4 flex-shrink-0" />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
