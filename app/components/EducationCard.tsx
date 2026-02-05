"use client";

import { Calendar, Award } from "lucide-react";

interface EducationCardProps {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  type: string;
}

export default function EducationCard({
  institution,
  degree,
  field,
  period,
  grade,
  type,
}: EducationCardProps) {
  return (
    <div className="group relative rounded-lg border border-gray-800 bg-black p-6 transition-all duration-200 hover:border-gray-600">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-xs text-gray-300">
              {type}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">{institution}</h3>
          <p className="mb-1 text-lg text-gray-300">{degree}</p>
          <p className="text-sm text-gray-400">{field}</p>
        </div>

        <div className="flex flex-col gap-2 sm:text-right">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Award className="h-4 w-4" />
            <span className="font-medium">{grade}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
