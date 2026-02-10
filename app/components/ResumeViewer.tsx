"use client";

import { Download } from "lucide-react";
import Navigation from "./Navigation";

export default function ResumeViewer() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-gray-800 bg-black shadow-2xl">
          <div className="border-b border-gray-800 px-6 py-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Resume</h1>
                <p className="mt-1 text-sm text-gray-400">Download my resume</p>
              </div>

              <a
                href="/resume.pdf"
                download="Vipul_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-gray-200"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </a>
            </div>
          </div>

          <div className="p-6">
            <div className="relative overflow-hidden rounded-lg bg-black">
              <iframe
                src="/resume.pdf#toolbar=0"
                className="h-[calc(100vh-250px)] min-h-[600px] w-full"
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
