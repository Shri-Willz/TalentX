"use client";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { BoltIcon } from "@heroicons/react/24/solid";

const jobList = [
  {
    slug: "software-engineer-tcs",
    title: "Software Engineer",
    company: "TCS",
    type: "Full-time",
    description:
      "As a Software Engineer at TCS, you will design, develop and deploy enterprise-scale software solutions across multiple industry domains. You will collaborate with cross-functional teams including product, design, QA and operations, mentor junior engineers, and continuously seek performance improvements and innovation. Skills: Java/Node.js, microservices, AWS/GCP, CI/CD pipelines, strong problem-solving mindset and excellent communication.",
  },
  {
    slug: "data-analyst-wipro",
    title: "Data Analyst",
    company: "Wipro",
    type: "Remote",
    description:
      "Join Wipro as a Data Analyst and be responsible for interpreting large datasets, building dashboards and predictive models, providing actionable business insights to various stakeholders, partnering with business teams to drive data-driven decisions, ensuring data quality, automating reporting and identifying trends. Skills: SQL, Python, Tableau/PowerBI, strong analytical mindset.",
  },
  {
    slug: "ux-ui-designer-infosys",
    title: "UX/UI Designer",
    company: "Infosys",
    type: "Full-time",
    description:
      "At Infosys, we are seeking a UX/UI Designer to craft intuitive and accessible user interfaces for our products. You will conduct user research, build prototypes in Figma or Adobe XD, perform usability testing, iterate on design solutions, and collaborate closely with engineering and product teams to ensure consistency and practicality. Skills: UI/UX principles, prototyping, interaction design, user research, teamwork.",
  },
  {
    slug: "frontend-developer-cognizant",
    title: "Frontend Developer",
    company: "Cognizant",
    type: "Entry level",
    description:
      "We are looking for a Frontend Developer at Cognizant to build responsive web applications using React/Next.js. You’ll work closely with designers and backend teams, ensure high performance, optimize web apps, write clean maintainable code, and stay up to date with new web technologies. Skills: JavaScript/TypeScript, React, Next.js, HTML/CSS, REST APIs.",
  },
];

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const job = jobList.find((j) => j.slug === slug);
  const [applied, setApplied] = useState(false);

  const handleApplyNow = () => {
    setApplied(true);
    setTimeout(() => {
      router.push("/jobs");
    }, 700);
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <h1 className="text-2xl font-bold">Job not found</h1>
        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-500 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p className="text-gray-400">
          {job.company} · {job.type}
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl flex justify-between items-center transition-all hover:scale-[1.02] hover:bg-white/20 cursor-pointer">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🤖</span>
            <div>
              <h2 className="font-bold text-white text-lg">AI Interview Coach</h2>
              <p className="text-gray-300 text-sm">Smart mock interview with real-time feedback</p>
            </div>
          </div>
          <span className="text-blue-400 font-bold text-2xl">{">"}</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl flex justify-between items-center transition-all hover:scale-[1.02] hover:bg-white/20 cursor-pointer">
          <div className="flex items-center space-x-3">
            <BoltIcon className="h-6 w-6 text-yellow-300" />
            <div>
              <h2 className="font-bold text-white text-lg">Aptitude Booster</h2>
              <p className="text-gray-300 text-sm">Quick test to measure your skills</p>
            </div>
          </div>
          <span className="text-blue-400 font-bold text-2xl">{">"}</span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <div className="bg-gray-800 p-4 rounded-xl text-gray-300">
          {job.description.split("Skills:")[0].trim()}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">About the company</h2>
        <p className="text-gray-300">
          {job.company} is a leading organization committed to innovation,
          strong culture and delivering value to customers. We are passionate
          about using technology to drive business impact and support our
          employees’ growth.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Required Skills</h2>
        <div className="flex flex-wrap gap-2">
          {job.description
            .split("Skills:")
            .pop()
            ?.split(",")
            .map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {skill.trim()}
              </span>
            )) || <p className="text-gray-400">Not specified</p>}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => router.push("/jobs")}
          className="text-gray-400 hover:text-white transition"
        >
          Back
        </button>

        {applied ? (
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-500 font-semibold">Applied</span>
          </div>
        ) : (
          <button
            onClick={handleApplyNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
          >
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
}
