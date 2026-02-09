"use client";

import { Linkedin, Github, Mail, ExternalLink, Calendar } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  isEmail?: boolean;
}

function ContactItem({ icon, label, value, href, isEmail }: ContactItemProps) {
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-4 rounded-lg border border-gray-800 bg-black p-6 transition-all duration-200 hover:border-gray-600"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-sm text-gray-400">{label}</p>
        <p className="truncate font-medium text-white">{value}</p>
      </div>
      <ExternalLink className="h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-white" />
    </a>
  );
}

export default function ContactCard() {
  const contacts = [
    {
      icon: <Linkedin className="h-6 w-6 text-black" />,
      label: "LinkedIn",
      value: "Sai Vipul Mohan Veludandi",
      href: "https://www.linkedin.com/in/sai-vipul-mohan/",
    },
    {
      icon: <Github className="h-6 w-6 text-black" />,
      label: "GitHub",
      value: "vipul43",
      href: "https://github.com/vipul43/",
    },
    {
      icon: <Mail className="h-6 w-6 text-black" />,
      label: "Email",
      value: "saifunny43@gmail.com",
      href: "mailto:saifunny43@gmail.com",
      isEmail: true,
    },
    {
      icon: <Calendar className="h-6 w-6 text-black" />,
      label: "Schedule a Meeting",
      value: "Book a time on my calendar",
      href: "https://calendar.app.google/JKqxdWP65X9QTNZA6",
    },
  ];

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <ContactItem key={contact.label} {...contact} />
      ))}
    </div>
  );
}
