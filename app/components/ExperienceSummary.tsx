"use client";

import { Briefcase, Calendar, TrendingUp } from "lucide-react";

export default function ExperienceSummary() {
  // Calculate years of experience from August 2022 to present
  const startDate = new Date("2022-08-01");
  const currentDate = new Date();
  const yearsOfExperience = (
    (currentDate.getTime() - startDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  ).toFixed(1);

  return (
    <div className="mb-8 rounded-lg border-2 border-white bg-black p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white">
            <Briefcase className="h-8 w-8 text-black" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              {yearsOfExperience}+ Years
            </h2>
            <p className="text-lg text-gray-400">Professional Experience</p>
            <p className="mt-2 text-sm text-gray-500">
              Full-time roles at Dognosis & SubCom
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-center sm:text-right">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 sm:justify-end">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>August 2022 - Present</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 sm:justify-end">
            <TrendingUp className="h-4 w-4 flex-shrink-0" />
            <span>Systems & Backend Engineering</span>
          </div>
        </div>
      </div>
    </div>
  );
}
