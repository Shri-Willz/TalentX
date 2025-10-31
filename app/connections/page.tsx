"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Briefcase,
  BookOpen,
  Video,
  Users,
  MessageSquare,
  Bell,
  User,
  Search,
} from "lucide-react";

import Navbar from "@/components/navbar/navbar";

interface Connection {
  id: number;
  name: string;
  role: string;
  company: string;
  mutualConnections: number;
}

const allConnections: Connection[] = [
  { id: 1, name: "Dhana", role: "Senior Frontend Developer", company: "TechCorp", mutualConnections: 12 },
  { id: 2, name: "Vijay", role: "Engineering Manager", company: "StartupX", mutualConnections: 8 },
  { id: 3, name: "Sam", role: "UX Designer", company: "DesignHub", mutualConnections: 15 },
];

const pendingConnections: Connection[] = [
  { id: 4, name: "David", role: "Backend Engineer", company: "CodeBase", mutualConnections: 6 },
];

const suggestedConnections: Connection[] = [
  { id: 5, name: "Lisa Wong", role: "Product Manager", company: "NextGen Labs", mutualConnections: 10 },
  { id: 6, name: "Arjun Patel", role: "AI Researcher", company: "DeepMindX", mutualConnections: 7 },
];

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const getActiveConnections = () => {
    if (activeTab === "pending") return pendingConnections;
    if (activeTab === "suggestions") return suggestedConnections;
    return allConnections;
  };

  const filteredConnections = getActiveConnections().filter((conn) =>
    conn.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderProfile = (conn: Connection) => {
    const firstLetter = conn.name.charAt(0).toUpperCase();
    return (
      <div className="w-16 h-16 rounded-full bg-accent/30 border flex items-center justify-center text-2xl font-bold text-accent">
        {firstLetter}
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background text-white flex flex-col">
        <div className="max-w-[1500px] mx-auto w-full px-6 py-10">
          <h1 className="text-4xl font-semibold text-accent mb-2">Connections</h1>
          <p className="text-text mb-8 text-lg">Grow your professional network</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="relative w-full sm:w-3/4">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-accent">
                <Search className="w-5 h-5 animate-pulse" />
              </div>
              <input
                type="text"
                placeholder="Search connections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-gray-800 text-gray-200 rounded-3xl outline-none transition-all"
              />
            </div>

            <button className="flex items-center gap-2 bg-accent px-6 py-3 rounded-3xl text-white font-semibold mr-8 transition-all">
              <Users className="w-5 h-5 text-white" />
              Invite Collaborators
            </button>
          </div>

          <div className="flex flex-wrap gap-6 border-b border-gray-800 mb-8 text-lg">
            {[
              { key: "all", label: `All (${allConnections.length})` },
              { key: "pending", label: `Pending (${pendingConnections.length})` },
              { key: "suggestions", label: `Suggestions (${suggestedConnections.length})` },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 font-medium transition ${activeTab === tab.key
                    ? "text-accent border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-blue-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {filteredConnections.map((conn) => (
              <div
                key={conn.id}
                className="rounded-3xl bg-background backdrop-blur-md border border-gray-800 p-7  hover:bg-white/5 "
              >
                <div className="flex items-center gap-4 mb-5">
                  {renderProfile(conn)}
                  <div>
                    <h2 className="text-lg font-semibold text-white">{conn.name}</h2>
                    <p className="text-sm text-gray-400">
                      {conn.role} · {conn.company}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-6">👥 {conn.mutualConnections} mutual connections</p>
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/30 hover:to-blue-500 text-white rounded-3xl py-3 transition-all shadow-md hover:shadow-blue-500/40">
                    <MessageSquare className="w-4 h-4 text-blue-300" /> Message
                  </button>
                  <button className="flex-1 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-3xl py-3 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filteredConnections.length === 0 && (
            <div className="text-center text-gray-500 mt-12 text-lg">
              No connections found in this category.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
