"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search as SearchIcon,
  Filter as FilterIcon,
  User,
  Home,
  MessageSquare,
  User as UserIcon,
} from "lucide-react";

type Job = {
  slug: string;
  title: string;
  company: string;
  match: string;
  type: string;
  description: string;
};

export default function JobsPage() {
  const router = useRouter();

  const [jobs] = useState<Job[]>([
    {
      slug: "software-engineer-tcs",
      title: "Software Engineer",
      company: "TCS",
      match: "92% Match",
      type: "Full-time",
      description:
        "As a Software Engineer at TCS, you will design, develop and deploy scalable software solutions across multiple industry domains. You will collaborate with cross-functional teams, mentor junior engineers, and continuously seek performance improvements."
    },
    {
      slug: "data-analyst-wipro",
      title: "Data Analyst",
      company: "Wipro",
      match: "88% Match",
      type: "Remote",
      description:
        "Join Wipro as a Data Analyst, where you will interpret large datasets, build dashboards and reports, provide actionable business insights and partner with stakeholders to drive decisions."
    },
    {
      slug: "ux-ui-designer-infosys",
      title: "UX/UI Designer",
      company: "Infosys",
      match: "75% Match",
      type: "Full-time",
      description:
        "At Infosys, the UX/UI Designer role will require designing intuitive and accessible user interfaces, conducting user research, building prototypes in Figma, conducting usability testing and iterating on design solutions."
    },
    {
      slug: "frontend-developer-cognizant",
      title: "Frontend Developer",
      company: "Cognizant",
      match: "85% Match",
      type: "Entry level",
      description:
        "We’re looking for a Frontend Developer at Cognizant to build responsive web applications using React/Next.js, optimize performance, work with designers and backend teams to deliver polished UX."
    },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("");

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === "" || job.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [jobs, searchTerm, activeFilter]);

  const handleApplyClick = (job: Job) => {
    router.push(`/jobs/${job.slug}`);
  };

  const handleAuraRecommendations = () => alert("Fetching Aura's job recommendations...");
  const handleViewAll = () => {
    setActiveFilter("");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-6 sm:px-6 md:px-8 lg:px-16 xl:px-32">
      <div className="w-full max-w-screen-xl relative">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Jobs</h1>
          <div className="flex items-center gap-4">
            <FilterIcon
              className="w-5 h-5 text-gray-400 cursor-pointer"
              onClick={() => setActiveFilter("")}
            />
            <User className="w-6 h-6 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search jobs with Aura AI"
            className="w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none sm:py-3 md:py-4"
          />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-500 w-5 h-5 sm:top-3 md:top-4"/>
        </div>

        <div className="flex justify-around mb-6 text-sm flex-wrap gap-2">
          {["Remote", "Entry level", "Full-time"].map(filter => (
            <button
              key={filter}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm md:text-base transition ${
                activeFilter === filter ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveFilter(filter === activeFilter ? "" : filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="bg-blue-600 text-white mb-6 rounded-2xl p-5 md:p-6">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            Meet Aura, Your AI Job Assistant
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-3">
            Let Aura find the perfect job for you.
          </p>
          <button
            onClick={handleAuraRecommendations}
            className="bg-white text-blue-600 w-full font-medium rounded-full py-2 sm:py-3 md:py-4 hover:bg-gray-100 transition"
          >
            Get Aura's Recommendations
          </button>
        </div>

        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm sm:text-base md:text-lg text-gray-400">
            Recommended for you
          </h2>
          <button
            onClick={handleViewAll}
            className="text-blue-500 text-xs sm:text-sm md:text-base hover:underline"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
          {filteredJobs.map(job => (
            <div
              key={job.slug}
              className="bg-gray-900 rounded-2xl p-4 flex flex-col justify-between hover:bg-gray-800 transition"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl">{job.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{job.company}</p>
                <p className="text-xs sm:text-sm md:text-base text-blue-400 mt-1">{job.match}</p>
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 sm:py-2 md:py-3 rounded-full text-sm sm:text-base md:text-base hover:bg-blue-700 transition w-full"
                onClick={() => handleApplyClick(job)}
              >
                Apply
              </button>
            </div>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">No jobs found.</p>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-3 text-sm text-gray-400 sm:text-base md:text-base">
          <div className="flex flex-col items-center cursor-pointer">
            <Home className="w-5 h-5 text-blue-500 md:w-6 md:h-6" />
            <span className="text-xs sm:text-sm md:text-base text-blue-500">Home</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <SearchIcon className="w-5 h-5 text-blue-500 md:w-6 md:h-6" />
            <span className="text-xs sm:text-sm md:text-base text-blue-500">Search</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <UserIcon className="w-5 h-5 text-gray-400 md:w-6 md:h-6" />
            <span className="text-xs sm:text-sm md:text-base">Profile</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <MessageSquare className="w-5 h-5 text-gray-400 md:w-6 md:h-6" />
            <span className="text-xs sm:text-sm md:text-base">Messages</span>
          </div>
        </div>

      </div>
    </div>
  );
}