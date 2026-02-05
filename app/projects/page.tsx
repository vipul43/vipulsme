import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FolderGit2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Vipul",
  description: "Personal and academic projects by Vipul",
  metadataBase: new URL("https://vipuls.me"),
};

const projects = [
  {
    title: "Kiwis.club - AI-Powered Insights from your Email",
    period: "November 2025 - Present",
    description:
      "Developed a privacy-first platform that leverages AI to surface financial insights and upcoming payments from emails; designed a 'Private by design' architecture where sensitive data never leaves the secure processing pipeline. Engineered a cost-efficient inference engine by self-hosting Qwen2.5-7B (quantized) via Docker on CPU, avoiding the projected $1,400/month cost of external APIs while maintaining strict data isolation. Designed a distributed producer-consumer system in Golang to concurrently ingest emails, implementing keyword pre-filtering to reduce context window usage by 90% and parsing data with near-zero hallucination.",
    technologies: ["Go", "Docker", "Local LLMs", "Qwen2.5-7B"],
    demoLink: "https://kiwis.club/",
    githubLink: "https://github.com/vipul43/kiwis-worker",
  },
  {
    title: "Blood Donation Tracking System",
    period: "January 2022 - Present",
    description:
      "A comprehensive system to track donated blood, and its components during various phases. Donors can track their donated blood, like what components the blood is divided into, where each component is now at, in which hospital it is used, how many lives are saved, also share it on social media, get reminded of regular donation periods, donation campaigns, donation requirements.",
    technologies: ["Web Development", "Database", "Tracking System"],
    demoLink: "https://project-blip.onrender.com",
    githubLink: "https://github.com/vipul43/project-blip",
  },
  {
    title: "Face Mask Detector",
    period: "February 2021 - May 2021",
    description:
      "Designed and trained deep learning models to solve Object Detection and Image Classification problem statements on Face Mask 12k and AIZOO datasets. The model achieved around 99% accuracy. Provided user interface to the trained models using Flask framework.",
    technologies: ["Deep Learning", "Object Detection", "Flask", "Python"],
    githubLink: "https://github.com/pulavartivinay/Face_Mask_Detection",
    association: "Indian Institute of Technology, Palakkad",
  },
  {
    title: "Hospital Management System",
    period: "February 2021 - May 2021",
    description:
      "Built Hospital Management System from scratch following the Database Management System principles. Starting from requirement specifications, ERD, populating the database, designing views, functions, and procedures to designing the Web Application using HTML, PHP, and serving it using Apache.",
    technologies: ["Database", "PHP", "HTML", "Apache", "MySQL"],
    githubLink: "https://github.com/pulavartivinay/Hospital/",
    association: "Indian Institute of Technology, Palakkad",
  },
  {
    title: "Image Description",
    period: "February 2021 - May 2021",
    description:
      "Designed and trained deep learning models to solve Multi-Label Classification, Multi-Modal Classification and Image Description problem statements on PASCAL 50S dataset.",
    technologies: ["Deep Learning", "Multi-Label Classification", "Python"],
    githubLink: "https://github.com/vipul43/CS5007_DL",
    association: "Indian Institute of Technology, Palakkad",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <FolderGit2 className="h-8 w-8 text-white" />
            <h1 className="text-4xl font-bold text-white">Projects</h1>
          </div>
          <p className="text-lg text-gray-400">
            Personal and academic projects showcasing my work
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
