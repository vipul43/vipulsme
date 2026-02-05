import { Metadata } from "next";
import ResumeViewer from "../components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Vipul",
  description: "View and download Vipul's resume",
};

export default function ResumePage() {
  return <ResumeViewer />;
}
