"use client";

import { Calendar, ExternalLink, Github } from "lucide-react";

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
  return (
    <div className="group relative rounded-lg border border-gray-800 bg-black p-6 transition-all duration-200 hover:border-gray-600">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{period}</span>
            </div>
            {association && (
              <p className="mb-3 text-sm text-gray-500">
                Associated with {association}
              </p>
            )}
          </div>

          <div className="flex gap-2 self-start">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-gray-200"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-gray-200"
              >
                <Github className="h-4 w-4" />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>

        <p className="leading-relaxed text-gray-300">{description}</p>

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
