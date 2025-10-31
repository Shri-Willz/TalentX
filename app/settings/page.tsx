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
import Navbar from "@/components/navbar/navbar";

export default function SettingsPage() {
  return (
    <>
      <Navbar />
        <main className="flex-1 w-full felx-col max-w-[120rem] mx-auto px-6 md:px-16 py-12 text-white">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2 tracking-tight">Settings</h2>
          <p className="text-gray-400 text-base">
            Manage your account, preferences, and AI agent configuration
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-3">
                <User className="text-blue-500 w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">Profile Settings</h3>
              </div>
              <button className="px-5 py-2.5 bg-accent hover:bg-accent/30 rounded-full text-sm font-medium">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">AI Agent Preferences</h3>
              </div>
              <button className="px-5 py-2.5 bg-accent hover:bg-accent/30 rounded-full text-sm font-medium">
                Configure AI
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Bell className="text-accent w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">Notifications</h3>
              </div>
              <button className="px-5 py-2.5 bg-accent hover:bg-accent/30 rounded-full text-sm font-medium ">
                Manage Notifications
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Lock className="text-accent w-7 h-7" />
                <h3 className="font-semibold text-lg md:text-xl">Privacy & Security</h3>
              </div>
              <button className="px-5 py-2.5 bg-accent hover:bg-accent/30 rounded-full text-sm font-medium ">
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
