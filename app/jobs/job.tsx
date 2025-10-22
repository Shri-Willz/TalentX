import React, { useState } from "react";
import { Search, Filter } from "lucide-react";

type Job = {
  title: string;
  company: string;
  match: string;
};

export default function JobsPage() {
  const [jobs] = useState<Job[]>([
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      match: "92% Match",
    },
    {
      title: "Data Analyst",
      company: "Global Innovations Ltd.",
      match: "88% Match",
    },
    {
      title: "UX/UI Designer",
      company: "Creative Minds Agency",
      match: "75% Match",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    remote: false,
    entryLevel: false,
    fullTime: false,
  });

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    
    const matchesRemote = filters.remote ? job.title.toLowerCase().includes("remote") : true;
    const matchesEntryLevel = filters.entryLevel ? job.title.toLowerCase().includes("entry") : true;
    const matchesFullTime = filters.fullTime ? job.title.toLowerCase().includes("full-time") : true;

    return matchesSearch && matchesRemote && matchesEntryLevel && matchesFullTime;
  });

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-6">
      <section className="w-full max-w-md">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Jobs</h1>
          <Filter className="w-5 h-5" aria-label="Filter jobs" />
        </header>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search jobs with Aura AI"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none"
            aria-label="Search jobs"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" aria-hidden="true" />
        </div>

        <nav className="flex justify-around mb-6 text-sm" aria-label="Job filters">
          <button
            onClick={() => setFilters((prev) => ({ ...prev, remote: !prev.remote }))}
            className={`px-3 py-1 rounded-full ${
              filters.remote ? "bg-blue-600" : "bg-gray-800"
            }`}
            aria-pressed={filters.remote}
          >
            Remote
          </button>
          <button
            onClick={() => setFilters((prev) => ({ ...prev, entryLevel: !prev.entryLevel }))}
            className={`px-3 py-1 rounded-full ${
              filters.entryLevel ? "bg-blue-600" : "bg-gray-800"
            }`}
            aria-pressed={filters.entryLevel}
          >
            Entry level
          </button>
          <button
            onClick={() => setFilters((prev) => ({ ...prev, fullTime: !prev.fullTime }))}
            className={`px-3 py-1 rounded-full ${
              filters.fullTime ? "bg-blue-600" : "bg-gray-800"
            }`}
            aria-pressed={filters.fullTime}
          >
            Full-time
          </button>
        </nav>

        <section className="bg-blue-600 text-white mb-6 rounded-2xl p-5" aria-label="Aura AI assistant">
          <h2 className="font-semibold text-lg mb-2">Meet Aura, Your AI Job Assistant</h2>
          <p className="text-sm text-blue-100 mb-3">Let Aura find the perfect job for you.</p>
          <button className="bg-white text-blue-600 w-full font-medium rounded-full py-2">
            Get Aura's Recommendations
          </button>
        </section>

        <h2 className="text-sm text-gray-400 mb-3">Recommended for you</h2>
        <section className="space-y-4" aria-label="Job listings">
          {filteredJobs.length === 0 ? (
            <p className="text-gray-500 text-center">No jobs match your search and filters.</p>
          ) : (
            filteredJobs.map((job) => (
              <article
                key={job.title}
                className="bg-gray-900 rounded-2xl p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-base">{job.title}</h3>
                  <p className="text-sm text-gray-400">{job.company}</p>
                  <p className="text-xs text-blue-400 mt-1">{job.match}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Apply
                </button>
              </article>
            ))
          )}
        </section>

        <nav
          className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-3 text-sm text-gray-400"
          aria-label="Bottom navigation"
        >
          <span className="text-blue-500" aria-current="page">
            Home
          </span>
          <span className="text-blue-500">Search</span>
          <span>Profile</span>
          <span>Messages</span>
        </nav>
      </section>
    </main>
  );
}
