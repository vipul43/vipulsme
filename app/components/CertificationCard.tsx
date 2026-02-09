"use client";

import {
  Award,
  ExternalLink,
  Calendar,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  instructors: string[];
  completedDate: string;
  credentialUrl: string;
}

interface CertificationCardProps {
  specialization: string;
  provider: string;
  period: string;
  credentialUrl: string;
  certifications: Certification[];
}

export default function CertificationCard({
  specialization,
  provider,
  period,
  credentialUrl,
  certifications,
}: CertificationCardProps) {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div className="group relative rounded-lg border border-gray-800 bg-black p-4 transition-all duration-200 hover:border-gray-600 sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-xs text-gray-300">
              Professional Certificate
            </span>
          </div>
          <h3 className="mb-1 text-lg font-bold text-white sm:text-xl">
            {specialization}
          </h3>
          <p className="mb-1 text-sm text-gray-300 sm:text-base">{provider}</p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
        </div>
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-4"
        >
          <Award className="h-4 w-4" />
          <span>View Certificate</span>
        </a>
      </div>

      <div className="mt-4 border-t border-gray-800 pt-4">
        <button
          onClick={() => setShowCourses(!showCourses)}
          className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-300 transition-colors hover:text-white"
        >
          <span>View Courses ({certifications.length} courses)</span>
          {showCourses ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {showCourses && (
          <div className="mt-4 space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-800 bg-gray-900/30 p-3 transition-colors hover:border-gray-700 sm:p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h5 className="mb-2 text-sm font-semibold text-white sm:text-base">
                      {cert.title}
                    </h5>
                    <div className="space-y-1 text-xs text-gray-400 sm:text-sm">
                      <div className="flex items-center gap-2">
                        <User className="h-3.5 w-3.5 flex-shrink-0" />
                        <span>{cert.instructors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                        <span>{cert.completedDate}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-gray-800 px-3 py-1.5 text-xs whitespace-nowrap text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    <span>Certificate</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
