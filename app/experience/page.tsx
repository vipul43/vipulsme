import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";

export const metadata: Metadata = {
  title: "Experience | Vipul",
  description: "Professional experience and work history of Vipul",
};

const experiences = [
  {
    company: "Dognosis",
    role: "R&D Engineer, Software",
    location: "Bangalore, India",
    period: "July 2025 - Present",
    description: [
      "Working as Systems/Backend Engineer focusing on data infrastructure, EHR systems, and production stability",
      "Led migration of metrics stack from VictoriaMetrics to TimescaleDB, designing schemas, migration tools, and reliable on-prem to cloud sync pipelines",
      "Restored EHR data integrity by standardizing sample codes, enforcing constraints, and building tools for replicates and prefix management",
      "Stabilized Trainer and DogOS systems, implemented monitoring dashboards, and designed robust backup and recovery workflows",
    ],
    technologies: [
      "PHP",
      "Rust",
      "AWS",
      "GCP",
      "Backblaze",
      "Node.js",
      "TimescaleDB",
    ],
  },
  {
    company: "SubCom (Subconscious Compute)",
    role: "Systems Engineer (Kernel)",
    location: "Bangalore, India",
    period: "August 2022 - July 2025",
    description: [
      "Designed and implemented high-performance backend REST APIs in Rust with focus on low latency and reliability",
      "Provisioned and automated AWS infrastructure using Ansible to support scalable production workloads",
      "Contributed to cross-platform device management agent for Windows, macOS, and Linux",
      "Implemented monitoring and alerting using Prometheus, Grafana, and Alertmanager to ensure system observability and operational stability",
    ],
    technologies: [
      "Rust",
      "AWS",
      "Ansible",
      "Python",
      "FastAPI",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    company: "Kwanzoo",
    role: "Software Engineer Co-op",
    location: "Santa Clara, CA (Remote)",
    period: "August 2021 - May 2022",
    description: [
      "Engineered full-stack features for the Open Go-to-Market Platform using VueJS and Spring Boot",
      "Built REST APIs for CRUD operations on MySQL and ElasticSearch",
      "Collaborated with C-suite on release deployment and P1 issue resolution",
      "Authored comprehensive technical design docs",
      "Completed as split academic co-op earning 10 total credits",
    ],
    technologies: [
      "VueJS",
      "Spring Boot",
      "MySQL",
      "ElasticSearch",
      "AWS S3",
      "Java",
    ],
  },
  {
    company: "Kwanzoo",
    role: "Software Engineer Intern",
    location: "Santa Clara, CA (Remote)",
    period: "June 2021 - August 2021",
    description: [
      "Designed automated monitoring tool using Spring Boot to track corporate data from Google DV360 and AppNexus DSPs",
      "Implemented logic to perform health checks and trigger automated email logs for system anomalies",
      "Assisted senior engineers in deep-copying and synchronizing large datasets between ElasticSearch indices to ensure data integrity",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "VueJS",
      "ElasticSearch",
    ],
  },
  {
    company: "Kwanzoo",
    role: "Software Engineer Trainee",
    location: "Santa Clara, CA (Remote)",
    period: "January 2021 - February 2021",
    description: [
      "Completed intensive mentorship and technical training program focused on software engineering best practices",
      "Maintained dedicated GitHub repository to document daily progress, coding exercises, and version control workflows",
      "Gained foundational proficiency in company's development stack, preparing for live project contributions",
    ],
    technologies: ["Git", "GitHub", "Software Engineering"],
  },
  {
    company: "UST Global",
    role: "Machine Learning Intern",
    location: "Trivandrum, Kerala (Remote)",
    period: "June 2020 - July 2020",
    description: [
      "Focused on image captioning using deep learning, implementing and iteratively improving CNN-LSTM based architecture",
      "Applied transfer learning using Inception and ResNet models",
      "Experimented with dropout techniques to reduce overfitting and trained models on Flickr8k dataset",
      "Evaluated performance through loss analysis and qualitative result comparisons",
    ],
    technologies: [
      "Python",
      "Deep Learning",
      "CNN",
      "LSTM",
      "TensorFlow",
      "Keras",
    ],
  },
];

export default function ExperiencePage() {
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
            <Briefcase className="h-8 w-8 text-white" />
            <h1 className="text-4xl font-bold text-white">Experience</h1>
          </div>
          <p className="text-lg text-gray-400">
            My professional journey and work experience
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
