import { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import EducationCard from "../components/EducationCard";
import CertificationCard from "../components/CertificationCard";
import Navigation from "../components/Navigation";

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
    courses: [
      {
        semester: "Semester 1",
        code: "MA1010",
        title: "Calculus",
        grade: "D",
        attendance: "VG",
        credits: 4,
      },
      {
        semester: "Semester 1",
        code: "PH1010",
        title: "Physics 1",
        grade: "D",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 1",
        code: "CY1010",
        title: "Theoretical and Inorganic Chemistry",
        grade: "E",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 1",
        code: "ID1010",
        title: "Ecology and Environment",
        grade: "B",
        attendance: "G",
        credits: 2,
      },
      {
        semester: "Semester 1",
        code: "ID1030",
        title: "Concepts in Engineering Design",
        grade: "C",
        attendance: "G",
        credits: 2,
      },
      {
        semester: "Semester 1",
        code: "ME1130",
        title: "Engineering Drawing",
        grade: "D",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 1",
        code: "ME1150",
        title: "Workshop Practice I",
        grade: "C",
        attendance: "G",
        credits: 2,
      },
      {
        semester: "Semester 1",
        code: "PH1130",
        title: "Physics Laboratory",
        grade: "B",
        attendance: "VG",
        credits: 2,
      },
      {
        semester: "Semester 1",
        code: "GN1000",
        title: "Life Skills",
        grade: "Y",
        attendance: "VG",
        credits: 0,
      },
      {
        semester: "Semester 2",
        code: "MA1020",
        title: "Vector Calculus and Linear Algebra",
        grade: "E",
        attendance: "G",
        credits: 4,
      },
      {
        semester: "Semester 2",
        code: "PH1020",
        title: "Physics II",
        grade: "D",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 2",
        code: "CY1020",
        title: "Thermodynamics, Kinetics and Organic Reactions",
        grade: "B",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 2",
        code: "ME1020",
        title: "Engineering Thermodynamics",
        grade: "C",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 2",
        code: "CE1020",
        title: "Engineering Mechanics",
        grade: "D",
        attendance: "G",
        credits: 4,
      },
      {
        semester: "Semester 2",
        code: "CS1020",
        title: "Introduction to Programming",
        grade: "C",
        attendance: "G",
        credits: 4,
      },
      {
        semester: "Semester 2",
        code: "ME1160",
        title: "Workshop Practice II",
        grade: "A",
        attendance: "VG",
        credits: 2,
      },
      {
        semester: "Semester 2",
        code: "CY1140",
        title: "Chemistry Laboratory",
        grade: "A",
        attendance: "VG",
        credits: 2,
      },
      {
        semester: "Semester 2",
        code: "GN1002",
        title: "National Sports Organisation",
        grade: "Y",
        attendance: "G",
        credits: 0,
      },
      {
        semester: "Semester 3",
        code: "BT2010",
        title: "Life Sciences",
        grade: "B",
        attendance: "VG",
        credits: 2,
      },
      {
        semester: "Semester 3",
        code: "MA2040",
        title: "Probability, Stochastic Processes, and Statistics",
        grade: "C",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 3",
        code: "EE2070",
        title: "Digital Systems",
        grade: "B",
        attendance: "VG",
        credits: 4,
      },
      {
        semester: "Semester 3",
        code: "HS2031",
        title: "Principles of Economics",
        grade: "B",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 3",
        code: "CS2010",
        title: "Logic for Computing",
        grade: "D",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 3",
        code: "CS2030",
        title: "Data Structures and Algorithms",
        grade: "B",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 3",
        code: "CS2130",
        title: "Data Structures and Algorithms Laboratory",
        grade: "B",
        attendance: "VG",
        credits: 2,
      },
      {
        semester: "Semester 3",
        code: "EE2170",
        title: "Digital Circuits Laboratory",
        grade: "A",
        attendance: "VG",
        credits: 2,
      },
      {
        semester: "Semester 4",
        code: "CS2020",
        title: "Discrete Mathematics for Computer Science",
        grade: "B",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 4",
        code: "CS2040",
        title: "Design and Analysis of Algorithms",
        grade: "B",
        attendance: "VG",
        credits: 4,
      },
      {
        semester: "Semester 4",
        code: "CS2060",
        title: "Computer Organisation",
        grade: "B",
        attendance: "G",
        credits: 3,
        githubLink: "https://github.com/vipul43/RISC_V_architecture_design",
      },
      {
        semester: "Semester 4",
        code: "CS2080",
        title: "Artificial Intelligence",
        grade: "A",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 4",
        code: "CS2180",
        title: "Artificial Intelligence Laboratory",
        grade: "A",
        attendance: "VG",
        credits: 2,
        githubLink: "https://github.com/vipul43/CS2180_AI_LAB",
      },
      {
        semester: "Semester 4",
        code: "HS2303",
        title: "Introduction to Philosophy: Indian and Western",
        grade: "B",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 4",
        code: "MA2032",
        title: "Numerical Analysis",
        grade: "A",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 5",
        code: "HS2000",
        title: "Professional Ethics",
        grade: "A",
        attendance: "G",
        credits: 2,
      },
      {
        semester: "Semester 5",
        code: "CS3010",
        title: "Operating Systems",
        grade: "A",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 5",
        code: "CS3030",
        title: "Paradigms of Programming",
        grade: "B",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 5",
        code: "CS3050",
        title: "Theory of Computation",
        grade: "A",
        attendance: "VG",
        credits: 4,
      },
      {
        semester: "Semester 5",
        code: "CS3110",
        title: "Operating Systems Laboratory",
        grade: "A",
        attendance: "VG",
        credits: 2,
        githubLink: "https://github.com/vipul43/CS3110_OS_LAB",
      },
      {
        semester: "Semester 5",
        code: "CS3130",
        title: "Paradigms of Programming Laboratory",
        grade: "S",
        attendance: "VG",
        credits: 2,
        githubLink: "https://github.com/vipul43/CS3130_POPL_LAB",
      },
      {
        semester: "Semester 5",
        code: "HS4605",
        title: "Foundations of Linguistics",
        grade: "A",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 5",
        code: "CS5005",
        title: "Parallel Programming",
        grade: "B",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 6",
        code: "CS3020",
        title: "Database Management Systems",
        grade: "A",
        attendance: "G",
        credits: 3,
        notionLink:
          "https://ambiguous-bike-0c8.notion.site/9fd5518fb7674852a9dccd5b8959b302?v=14e7c81a041b40db966751a91f784d24",
      },
      {
        semester: "Semester 6",
        code: "CS3040",
        title: "Compiler Design",
        grade: "B",
        attendance: "VG",
        credits: 3,
        notionLink:
          "https://ambiguous-bike-0c8.notion.site/195a52405fb44c3baabac2b10d3c66c3?v=517452c90f6d4e24a55de23779fe57fb",
      },
      {
        semester: "Semester 6",
        code: "CS3120",
        title: "Database Management System Laboratory",
        grade: "C",
        attendance: "G",
        credits: 2,
        githubLink: "https://github.com/vipul43/CS3120_DBMS_LAB",
        notionLink:
          "https://ambiguous-bike-0c8.notion.site/2a910f8518814ca49746025c6869079c?v=9b3ee695060a4439b147346a4a13238e",
      },
      {
        semester: "Semester 6",
        code: "CS3140",
        title: "Compiler Design Laboratory",
        grade: "D",
        attendance: "VG",
        credits: 2,
        notionLink:
          "https://ambiguous-bike-0c8.notion.site/024c8521d7c24303aae57d94525bd977?v=3e62fe54ee3f4d23b0d6b72e74481c99",
      },
      {
        semester: "Semester 6",
        code: "ID3801",
        title: "Open Ended Lab/Project",
        grade: "S",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 6",
        code: "CS5008",
        title: "Reinforcement Learning",
        grade: "A",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 6",
        code: "CS5007",
        title: "Deep Learning",
        grade: "C",
        attendance: "G",
        credits: 3,
        githubLink: "https://github.com/vipul43/CS5007_DL",
        notionLink:
          "https://ambiguous-bike-0c8.notion.site/8239b0b1e32a4ef29fa2f37f7ca507a9?v=3210aaadac194ab8810bb3a82e241042",
      },
      {
        semester: "Semester 6",
        code: "CS3100",
        title: "Internship",
        grade: "Y",
        attendance: "VG",
        credits: 0,
      },
      {
        semester: "Semester 7",
        code: "CS4110",
        title: "Project I",
        grade: "B",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 7",
        code: "CS4010",
        title: "Computer Networks",
        grade: "E",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 7",
        code: "CS4150",
        title: "Computer Networks Laboratory",
        grade: "E",
        attendance: "G",
        credits: 2,
      },
      {
        semester: "Semester 7",
        code: "CS5617",
        title: "Software Engineering",
        grade: "C",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 7",
        code: "EE5005",
        title: "Digital Image Processing",
        grade: "E",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 7",
        code: "CS5616",
        title: "Computational Complexity",
        grade: "U",
        attendance: "G",
        credits: 3,
      },
      {
        semester: "Semester 8",
        code: "CS4120",
        title: "Project II",
        grade: "D",
        attendance: "VG",
        credits: 7,
      },
      {
        semester: "Semester 8",
        code: "HS4606",
        title: "Media, Identity and the Self",
        grade: "E",
        attendance: "VG",
        credits: 3,
      },
      {
        semester: "Semester 8",
        code: "HS5006",
        title: "Introduction to Film Studies",
        grade: "E",
        attendance: "VG",
        credits: 3,
      },
    ],
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

const certifications = {
  specialization: "Deep Learning Specialization",
  provider: "Coursera - DeepLearning.AI",
  period: "June 2020 - August 2020",
  credentialUrl:
    "https://www.coursera.org/account/accomplishments/specialization/QJUU86LNVPLC",
  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      instructors: ["Andrew Ng", "Kian Katanforoosh", "Younes Bensouda Mourri"],
      completedDate: "June 11, 2020",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/VJDGUUAM98QQ",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      issuer: "DeepLearning.AI",
      instructors: ["Andrew Ng", "Kian Katanforoosh", "Younes Bensouda Mourri"],
      completedDate: "June 16, 2020",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/JJ2LV4DD7A33",
    },
    {
      title: "Structuring Machine Learning Projects",
      issuer: "DeepLearning.AI",
      instructors: ["Andrew Ng", "Younes Bensouda Mourri", "Kian Katanforoosh"],
      completedDate: "June 26, 2020",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/SH7BW8L3D2C4",
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "DeepLearning.AI",
      instructors: ["Andrew Ng", "Kian Katanforoosh", "Younes Bensouda Mourri"],
      completedDate: "August 2, 2020",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/2AXX6UHWXQ9Y",
    },
    {
      title: "Sequence Models",
      issuer: "DeepLearning.AI",
      instructors: ["Andrew Ng", "Kian Katanforoosh", "Younes Bensouda Mourri"],
      completedDate: "August 6, 2020",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/Z8PLXZYDSV2L",
    },
  ],
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
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

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Professional Certifications
          </h2>
          <CertificationCard {...certifications} />
        </div>
      </div>
    </div>
  );
}
