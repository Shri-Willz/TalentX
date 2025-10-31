"use client";
import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Edit,
  Download,
  Award,
  Briefcase,
  Sparkles,
  Video,
  BookOpen,
  Users,
  MessageSquare,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 flex flex-col items-center">
     <nav className="flex justify-between items-center w-full px-8 py-4 border-b border-white/10 sticky top-0 bg-black/40 backdrop-blur-md z-50">
  
  <div className="flex items-center gap-3">
    <Sparkles className="w-8 h-8 text-blue-500" />
    <h1 className="font-bold text-2xl tracking-wide">TalentX</h1>
  </div>
  <div className="flex-1 flex justify-center items-center gap-10 text-gray-400 text-lg md:text-xl">
    <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-all duration-200">
      <Briefcase className="w-6 h-6" /> Jobs
    </div>
    <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-all duration-200">
      <Video className="w-6 h-6" /> Interview
    </div>
    <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-all duration-200">
      <BookOpen className="w-6 h-6" /> Learn
    </div>
    <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-all duration-200">
      <Users className="w-6 h-6" /> Connections
    </div>
    <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-all duration-200">
      <MessageSquare className="w-6 h-6" /> Messages
    </div>
  </div>
</nav>


      <div className="w-full max-w-[1700px] px-4 sm:px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            My Profile
          </h1>
          <div className="flex gap-3 mt-3 md:mt-0">
            <button className="relative overflow-hidden bg-[#00E0FF] text-black font-semibold px-5 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_#00E0FF] hover:scale-105">
              <Download className="w-4 h-4" /> Export Resume
            </button>
            <button className="relative overflow-hidden bg-[#0d0d0d]/60 border border-[#00E0FF]/40 text-[#00E0FF] px-5 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_#00E0FF] hover:scale-105 backdrop-blur-md">
              <Edit className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        </div>

        <div className="bg-[#0d0d0d]/50 backdrop-blur-xl border border-[#00E0FF]/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,224,255,0.08)] transition-all duration-300 hover:shadow-[0_0_80px_rgba(0,224,255,0.15)]">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00E0FF] to-[#0066FF] flex items-center justify-center text-black text-3xl font-extrabold shadow-[0_0_30px_#00E0FF]/40 hover:scale-105 transition-all cursor-pointer">
                S
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Surya V IT</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Senior Frontend Developer
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-400">
                  <span>3+ Years Experience</span>
                  <span>•</span>
                  <span>Available For Work</span>
                  <span className="bg-[#00E0FF]/20 text-[#00E0FF] px-2 py-[2px] rounded-lg text-xs font-medium">
                    Top Performer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00E0FF]" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00E0FF]" /> surya.vit@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00E0FF]" /> Chennai, India
              </div>
              <p className="text-[#00E0FF] mt-1 text-sm font-medium">
                Open to Remote
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
            {[{ label: "Profile Score", value: "95%" }, { label: "Applications", value: "24" }, { label: "Interviews", value: "8" }, { label: "Skills", value: "32" }].map((item) => (
              <div
                key={item.label}
                className="bg-[#111111]/60 backdrop-blur-md border border-[#00E0FF]/20 rounded-2xl p-5 hover:border-[#00E0FF]/50 hover:shadow-[0_0_25px_rgba(0,224,255,0.3)] transition-all duration-300"
              >
                <p className="text-2xl font-semibold text-[#00E0FF]">
                  {item.value}
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#00E0FF]">
              <Award className="w-5 h-5" /> Top Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Next.js",
                "Node.js",
                "REST APIs",
                "GraphQL",
                "PostgreSQL",
                "AWS",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#0d0d0d]/70 backdrop-blur-md border border-[#00E0FF]/20 text-[#00E0FF] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#00E0FF]/20 hover:text-white hover:shadow-[0_0_15px_#00E0FF] transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-2 text-[#00E0FF]">
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Passionate frontend developer with 3+ years of experience in building scalable web applications. Specialized in React, TypeScript, and modern web technologies. Strong focus on performance, optimization, and clean UI. Eager to explore new technologies and build innovative digital solutions at TCS.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#00E0FF]">
              <Briefcase className="w-5 h-5" /> Work Experience
            </h3>
            <div className="space-y-4">
              {[{ role: "Senior Frontend Developer – TCS", period: "2023 – Present", desc: "Leading frontend development for enterprise SaaS applications using React and Next.js." }, { role: "Frontend Developer – StartupHub", period: "2021 – 2023", desc: "Developed responsive web interfaces and optimized UI/UX using Tailwind CSS and TypeScript." }].map((exp) => (
                <div
                  key={exp.role}
                  className="bg-[#0d0d0d]/70 backdrop-blur-lg border border-[#00E0FF]/20 rounded-2xl p-5 hover:border-[#00E0FF]/50 hover:shadow-[0_0_25px_rgba(0,224,255,0.25)] transition-all duration-300"
                >
                  <p className="font-medium text-white text-lg">{exp.role}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="text-sm text-gray-400 mt-1">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
