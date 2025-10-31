"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  BookOpen,
  Video,
  Users,
  MessageSquare,
  Bell,
  User,
  Sparkles,
  Bookmark,
} from "lucide-react";
import Navbar from "@/components/navbar/navbar";

type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
};

export default function JobsPage() {
  const [aiActive, setAiActive] = useState(true);
  const [activeTab, setActiveTab] = useState("recommended");
  const [searchTerm, setSearchTerm] = useState("");

  const allJobs: Record<string, Job[]> = {
    recommended: [
      {
        slug: "senior-frontend-developer",
        title: "Senior Frontend Developer",
        company: "Tata Consultancy Services",
        location: "Mumbai, India",
        salary: "₹15L - ₹20L",
        tags: ["React", "TypeScript", "Tailwind"],
      },
      {
        slug: "ui-ux-developer",
        title: "UI/UX Developer",
        company: "Wipro Technologies",
        location: "Bangalore, India",
        salary: "₹10L - ₹14L",
        tags: ["Figma", "React", "CSS"],
      },
      {
        slug: "frontend-engineer",
        title: "Frontend Engineer",
        company: "Infosys",
        location: "Remote, India",
        salary: "₹12L - ₹18L",
        tags: ["Next.js", "GraphQL", "Tailwind"],
      },
      {
        slug: "react-developer",
        title: "React Developer",
        company: "HCL Tech",
        location: "Noida, India",
        salary: "₹9L - ₹13L",
        tags: ["React", "Redux", "Styled Components"],
      },
      {
        slug: "software-engineer",
        title: "Software Engineer",
        company: "Tech Mahindra",
        location: "Pune, India",
        salary: "₹11L - ₹16L",
        tags: ["React", "Node.js", "TypeScript"],
      },
      {
        slug: "product-ui-designer",
        title: "Product UI Designer",
        company: "Cognizant",
        location: "Chennai, India",
        salary: "₹10L - ₹13L",
        tags: ["Figma", "UI Design", "Prototyping"],
      },
    ],
    saved: [
      {
        slug: "full-stack-engineer",
        title: "Full Stack Engineer",
        company: "Persistent Systems",
        location: "Hyderabad, India",
        salary: "₹14L - ₹18L",
        tags: ["Node.js", "React", "PostgreSQL"],
      },
    ],
    applied: [
      {
        slug: "frontend-architect",
        title: "Frontend Architect",
        company: "Tech Mahindra",
        location: "Pune, India",
        salary: "₹18L - ₹25L",
        tags: ["React", "System Design", "AWS"],
      },
    ],
  };

  const jobs = allJobs[activeTab].filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveJob = (job: Job) => {
    alert(`Job "${job.title}" saved!`);
  };



  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <Navbar />
      <main className="flex-1 w-full max-w-[90rem] px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-3xl font-bold text-white">Job Search & Apply</h2>
            <p className="text-lg text-text mt-1">
              AI-powered job matching and smart applications
            </p>
          </div>

          <button
            onClick={() => setAiActive(!aiActive)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition duration-300 backdrop-blur-md ${
              aiActive
                ? "bg-accent hover:bg-accent/30 text-white"
                : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/70"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {aiActive ? "AI Agent Active" : "Activate AI Agent"}
          </button>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs, skills, or companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 text-gray-200 placeholder-gray-500 border border-white/10 focus:outline-none transition"
          />
        </div>

        <div className="flex gap-6 text-base mb-8 border-b border-white/10 pb-3 overflow-x-auto">
          {["recommended", "saved", "applied"].map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer capitalize pb-2 transition-all ${
                activeTab === tab
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab === "recommended"
                ? "Recommended (15)"
                : tab === "saved"
                ? "Saved (8)"
                : "Applied (12)"}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobs.map((job) => (
            <div
              key={job.slug}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition duration-300 flex flex-col justify-between hover:bg-white/10"
            >
              {/* Save Button at top-right */}
              <button
                onClick={() => handleSaveJob(job)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-gray-200"
                title="Save Job"
              >
                <Bookmark className="w-5 h-5" />
              </button>

              <div>
                <h3 className="font-semibold text-xl mb-1 text-white">{job.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{job.company}</p>

                <div className="flex items-center text-gray-400 text-sm gap-4 mb-4">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-2">{job.salary}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/10 text-accent text-xs px-3 py-1 rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <button className="w-1/2 py-2 rounded-2xl bg-white/10 text-gray-200 hover:bg-white/20 transition text-sm font-medium">
                  View Details
                </button>
                <button className="w-1/2 py-2 rounded-2xl text-white bg-accent hover:bg-accent/30 transition text-sm font-medium">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-accent w-6 h-6" />
            <h3 className="font-semibold text-xl text-white">AI Recommendation</h3>
          </div>
          <p className="text-gray-300 text-base leading-relaxed">
            Based on your profile and recent searches, these roles are the most relevant matches
            for your skills and interests.
          </p>
        </div>
      </main>
    </div>
  );
}
