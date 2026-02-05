import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactCard from "../components/ContactCard";

export const metadata: Metadata = {
  title: "Contact | Vipul",
  description: "Get in touch with Vipul via LinkedIn, GitHub, or Email",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

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
        </div>
      </div>
    </div>
  );
}
