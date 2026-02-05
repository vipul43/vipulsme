import { Metadata } from "next";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Vipul | Systems Engineer",
  description:
    "Systems Engineer specializing in backend development, infrastructure, and building scalable solutions",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}
