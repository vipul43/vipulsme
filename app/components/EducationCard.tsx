"use client";

import { useState } from "react";
import {
  Calendar,
  Award,
  ChevronDown,
  ChevronUp,
  Github,
  BookOpen,
} from "lucide-react";

interface Course {
  semester: string;
  code: string;
  title: string;
  grade: string;
  attendance: string;
  githubLink?: string;
  notionLink?: string;
}

interface EducationCardProps {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  type: string;
  courses?: Course[];
}

export default function EducationCard({
  institution,
  degree,
  field,
  period,
  grade,
  type,
  courses,
}: EducationCardProps) {
  const [showCourses, setShowCourses] = useState(false);

  const isCSCourse = (code: string) => code.startsWith("CS");

  const groupedCourses = courses?.reduce(
    (acc, course) => {
      if (!acc[course.semester]) {
        acc[course.semester] = [];
      }
      acc[course.semester].push(course);
      return acc;
    },
    {} as Record<string, Course[]>
  );

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

      {courses && courses.length > 0 && (
        <div className="mt-4 border-t border-gray-800 pt-4">
          <button
            onClick={() => setShowCourses(!showCourses)}
            className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            <span>View Coursework ({courses.length} courses)</span>
            {showCourses ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {showCourses && groupedCourses && (
            <div className="mt-4 space-y-6">
              {Object.entries(groupedCourses)
                .sort((a, b) => {
                  const semA = parseInt(a[0].split(" ")[1]);
                  const semB = parseInt(b[0].split(" ")[1]);
                  return semA - semB;
                })
                .map(([semester, semesterCourses]) => (
                  <div key={semester}>
                    <h4 className="mb-3 text-sm font-semibold text-white">
                      {semester}
                    </h4>
                    <div className="space-y-2">
                      {semesterCourses.map((course, idx) => (
                        <div
                          key={idx}
                          className={`rounded-lg border p-3 transition-colors ${
                            isCSCourse(course.code)
                              ? "border-gray-600 bg-gray-900/50"
                              : "border-gray-800 bg-black"
                          }`}
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex-1">
                                <div className="mb-1 flex items-center gap-2">
                                  <span
                                    className={`font-mono text-xs ${
                                      isCSCourse(course.code)
                                        ? "text-white"
                                        : "text-gray-400"
                                    }`}
                                  >
                                    {course.code}
                                  </span>
                                  {isCSCourse(course.code) && (
                                    <span className="rounded-full border border-gray-600 bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
                                      CS
                                    </span>
                                  )}
                                </div>
                                <p
                                  className={`text-sm ${
                                    isCSCourse(course.code)
                                      ? "text-gray-200"
                                      : "text-gray-400"
                                  }`}
                                >
                                  {course.title}
                                </p>
                              </div>
                              <div className="flex gap-4 text-xs text-gray-500">
                                <span>Grade: {course.grade}</span>
                                <span>Attendance: {course.attendance}</span>
                              </div>
                            </div>

                            {(course.githubLink || course.notionLink) && (
                              <div className="flex gap-2 border-t border-gray-800 pt-2">
                                {course.githubLink && (
                                  <a
                                    href={course.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                                  >
                                    <Github className="h-3 w-3" />
                                    <span>Assignments</span>
                                  </a>
                                )}
                                {course.notionLink && (
                                  <a
                                    href={course.notionLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                                  >
                                    <BookOpen className="h-3 w-3" />
                                    <span>Notes</span>
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
