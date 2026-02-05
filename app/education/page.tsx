import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import EducationCard from "../components/EducationCard";

export const metadata: Metadata = {
  title: "Education | Vipul",
  description: "Educational background and qualifications of Vipul",
  metadataBase: new URL("https://vipuls.me"),
};

const education = [
  {
    institution: "Indian Institute of Technology, Palakkad",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "July 2018 - June 2022",
    grade: "7.39/10",
    type: "Undergraduate",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate Education",
    field: "MPC - Maths, Physics and Chemistry",
    period: "March 2016 - March 2018",
    grade: "970/1000",
    type: "Higher Secondary",
  },
];

export default function EducationPage() {
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
            <GraduationCap className="h-8 w-8 text-white" />
            <h1 className="text-4xl font-bold text-white">Education</h1>
          </div>
          <p className="text-lg text-gray-400">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
}
