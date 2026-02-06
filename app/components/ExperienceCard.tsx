"use client";

import { Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export default function ExperienceCard({
  company,
  role,
  location,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="group relative rounded-lg border border-gray-800 bg-black p-4 transition-all duration-200 hover:border-gray-600 sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:gap-4">
        <div>
          <h3 className="mb-1 text-lg font-bold text-white sm:text-xl">
            {role}
          </h3>
          <p className="text-base text-gray-300 sm:text-lg">{company}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <ul className="mb-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-sm leading-relaxed text-gray-300">
            <span className="mr-2 text-gray-500">•</span>
            {item}
          </li>
        ))}
      </ul>

      {technologies && technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-800 pt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
