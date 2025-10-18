"use client";

import React, { useState } from "react";
import { Search, Filter, User, Home, MessageSquare, User as UserIcon } from "lucide-react";

type Job = {
  title: string;
  company: string;
  match: string;
};

export default function JobsPage() {
  const [jobs] = useState<Job[]>([
    { title: "Software Engineer", company: "TCS", match: "92% Match" },
    { title: "Data Analyst", company: "Wipro", match: "88% Match" },
    { title: "UX/UI Designer", company: "Infosys", match: "75% Match" },
    { title: "Frontend Developer", company: "Cognizant", match: "85% Match" },
    { title: "Backend Developer", company: "HCL", match: "90% Match" },
    { title: "Full Stack Developer", company: "Accenture", match: "87% Match" },
    { title: "DevOps Engineer", company: "IBM", match: "82% Match" },
    { title: "QA Tester", company: "Tech Mahindra", match: "78% Match" },
    { title: "Cloud Engineer", company: "Capgemini", match: "80% Match" },
    { title: "AI/ML Engineer", company: "Infosys", match: "89% Match" },
    { title: "Mobile App Developer", company: "Mindtree", match: "76% Match" },
    { title: "Cybersecurity Analyst", company: "HCL", match: "84% Match" },
    { title: "Business Analyst", company: "Wipro", match: "81% Match" },
  ]);

  const handleApply = (job: Job) => alert(`Applied to ${job.title} at ${job.company}`);
  const handleAuraRecommendations = () => alert("Fetching Aura's job recommendations...");
  const handleFilter = (filter: string) => alert(`Filter applied: ${filter}`);
  const handleViewAll = () => alert("Showing all jobs...");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-6 sm:px-6 md:px-8 lg:px-16 xl:px-32">
      <div className="w-full max-w-screen-xl relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Jobs</h1>
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-400 cursor-pointer" onClick={() => handleFilter("open")} />
            <User className="w-6 h-6 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search jobs with Aura AI"
            className="w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none sm:py-3 md:py-4"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5 sm:top-3 md:top-4" />
        </div>

        {/* Filters */}
        <div className="flex justify-around mb-6 text-sm flex-wrap gap-2">
          {["Remote", "Entry level", "Full-time"].map((filter) => (
            <button
              key={filter}
              className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 text-xs sm:text-sm md:text-base"
              onClick={() => handleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Aura AI Card */}
        <div className="bg-blue-600 text-white mb-6 rounded-2xl p-5 md:p-6">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Meet Aura, Your AI Job Assistant</h2>
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

        {/* Recommended Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm sm:text-base md:text-lg text-gray-400">Recommended for you</h2>
          <button onClick={handleViewAll} className="text-blue-500 text-xs sm:text-sm md:text-base hover:underline">
            View All
          </button>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-4 flex flex-col justify-between hover:bg-gray-800 transition"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl">{job.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{job.company}</p>
                <p className="text-xs sm:text-sm md:text-base text-blue-400 mt-1">{job.match}</p>
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 sm:py-2 md:py-3 rounded-full text-sm sm:text-base md:text-base hover:bg-blue-700 transition w-full"
                onClick={() => handleApply(job)}
              >
                Apply
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-3 text-sm text-gray-400 sm:text-base md:text-base">
          <div className="flex flex-col items-center cursor-pointer">
            <Home className="w-5 h-5 text-blue-500 md:w-6 md:h-6" />
            <span className="text-xs sm:text-sm md:text-base text-blue-500">Home</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <Search className="w-5 h-5 text-blue-500 md:w-6 md:h-6" />
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
