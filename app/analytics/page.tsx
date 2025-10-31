"use client";
import React from "react";
import {
  Sparkles,
  Briefcase,
  BookOpen,
  Video,
  Users,
  MessageSquare,
  Bell,
  User,
  Activity,
  Clock,
  Target,
} from "lucide-react";
import Navbar from "@/components/navbar/navbar";

export default function AnalyticsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-gray-100 flex flex-col">
        <section className="flex flex-col items-center w-full px-8 py-14">
          <div className="w-full max-w-6xl text-center">
            <h2 className="text-3xl font-semibold mb-2">Career Analytics</h2>
            <p className="text-gray-400 mb-12">
              Comprehensive insights across all modules
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-accent" />
                  <h3 className="font-medium text-lg">Career Readiness</h3>
                </div>
                <p className="text-3xl font-bold text-white">87%</p>
                <p className="text-sm text-green-400 mt-1">+5% this month</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                  <h3 className="font-medium text-lg">Skills Mastered</h3>
                </div>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-sm text-gray-400">Last 90 days</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-accent" />
                  <h3 className="font-medium text-lg">Applications</h3>
                </div>
                <p className="text-3xl font-bold text-white">45</p>
                <p className="text-sm text-gray-400">25% conversion rate</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="font-medium text-lg">Learning Time</h3>
                </div>
                <p className="text-3xl font-bold text-white">42h</p>
                <p className="text-sm text-gray-400">This month</p>
              </div>
            </div>

            <div className="w-full mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-8 px-4 hover:bg-blue-500/10 hover:border-accent/40 transition-all duration-300 shadow-md hover:shadow-blue-500/30">
              <h4 className="text-lg font-semibold text-white mb-2">
                Detailed Analytics Coming Soon
              </h4>
              <p className="text-gray-400">
                Comprehensive charts and insights across job search, learning, and interview performance.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
