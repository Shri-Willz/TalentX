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
  Lock,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 border-b border-white/10 sticky top-0 bg-black/40 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-blue-500" />
          <h1 className="font-bold text-xl tracking-wide">TalentX</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-400 text-base">
          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <Briefcase className="w-5 h-5" /> Jobs
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <BookOpen className="w-5 h-5" /> Learn
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <Video className="w-5 h-5" /> Interview
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <Users className="w-5 h-5" /> Connections
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer">
            <MessageSquare className="w-5 h-5" /> Messages
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Bell className="text-gray-400 w-5 h-5 cursor-pointer hover:text-blue-400 transition" />
          <User className="text-gray-400 w-6 h-6 cursor-pointer hover:text-white transition" />
        </div>
      </nav>
      <main className="flex-1 w-full max-w-[120rem] mx-auto px-6 md:px-16 py-12">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2 tracking-tight">Settings</h2>
          <p className="text-gray-400 text-base">
            Manage your account, preferences, and AI agent configuration
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <User className="text-blue-500 w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">Profile Settings</h3>
              </div>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Sparkles className="text-blue-500 w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">AI Agent Preferences</h3>
              </div>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                Configure AI
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Bell className="text-blue-500 w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">Notifications</h3>
              </div>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                Manage Notifications
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Lock className="text-blue-500 w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">Privacy & Security</h3>
              </div>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
