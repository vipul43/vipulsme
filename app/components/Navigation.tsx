"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  GraduationCap,
  FolderGit2,
  FileText,
  Mail,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl font-bold text-black transition-colors hover:bg-gray-200"
          >
            V
          </Link>

          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors ${
                    isActive
                      ? "bg-white text-black"
                      : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
