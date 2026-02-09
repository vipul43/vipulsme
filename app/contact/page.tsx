import { Metadata } from "next";
import ContactCard from "../components/ContactCard";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Contact | Vipul",
  description: "Get in touch with Vipul via LinkedIn, GitHub, or Email",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-gray-800 bg-black shadow-2xl">
          <div className="border-b border-gray-800 px-6 py-8">
            <h1 className="mb-2 text-3xl font-bold text-white">Get in Touch</h1>
            <p className="text-gray-400">
              Feel free to reach out through any of these platforms
            </p>
          </div>

          <div className="p-6">
            <ContactCard />
          </div>

          <div className="border-t border-gray-800 px-6 py-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Coding Profiles
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <a
                href="https://leetcode.com/u/vipul43/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-center text-sm text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800 hover:text-white"
              >
                LeetCode
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/vipul43?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-center text-sm text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800 hover:text-white"
              >
                GeeksforGeeks
              </a>
              <a
                href="https://www.codechef.com/users/vipul43/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-center text-sm text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800 hover:text-white"
              >
                CodeChef
              </a>
              <a
                href="https://codeforces.com/profile/vipul_mohan/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-center text-sm text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800 hover:text-white"
              >
                Codeforces
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
