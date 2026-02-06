"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-gray-800">
            <Image
              src="/profile.jpg"
              alt="Vipul"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="animate-fade-in mb-6 text-5xl font-bold text-white sm:text-7xl">
          Hi, I&apos;m <span className="text-gray-400">Vipul</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-400 sm:text-2xl">
          Systems Engineer specializing in backend development, infrastructure,
          and building scalable solutions
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
          >
            View Experience
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-800 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-900"
          >
            Download Resume
          </Link>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/vipul43"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-vipul-mohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:saifunny43@gmail.com"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
