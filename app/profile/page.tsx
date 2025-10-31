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
import Navbar from "@/components/navbar/navbar";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-gray-100 flex flex-col items-center">
        <div className="w-full max-w-[1700px] px-4 sm:px-6 lg:px-12 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold text-white tracking-tight">
              My Profile
            </h1>
            <div className="flex gap-3 mt-3 md:mt-0">
              <button className="relative overflow-hidden bg-accent text-white font-semibold px-5 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4" /> Export Resume
              </button>
              <button className="relative overflow-hidden bg-background border border-accent/40 text-white px-5 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Edit className="w-4 h-4" /> Edit Profile
              </button>
            </div>
          </div>

          <div className="bg-background backdrop-blur-xl border border-accent/15 rounded-3xl p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-white text-3xl font-extrabold transition-all cursor-pointer">
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
                    <span className="bg-accent/30 text-accent px-2 py-[2px] rounded-lg text-xs font-medium">
                      Top Performer
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" /> +91 98765 43210
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" /> surya.vit@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Chennai, India
                </div>
                <p className="text-accent mt-1 text-sm font-medium">
                  Open to Remote
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
              {[{ label: "Profile Score", value: "95%" }, { label: "Applications", value: "24" }, { label: "Interviews", value: "8" }, { label: "Skills", value: "32" }].map((item) => (
                <div
                  key={item.label}
                  className="bg-background/60 backdrop-blur-md border border-accent/20 rounded-2xl p-5 transition-all duration-300"
                >
                  <p className="text-2xl font-semibold text-accent">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-accent">
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
                    className="bg-background/70 backdrop-blur-md border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium hover:bg-accent/20 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-2 text-accent">
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Passionate frontend developer with 3+ years of experience in building scalable web applications. Specialized in React, TypeScript, and modern web technologies. Strong focus on performance, optimization, and clean UI. Eager to explore new technologies and build innovative digital solutions at TCS.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-accent">
                <Briefcase className="w-5 h-5" /> Work Experience
              </h3>
              <div className="space-y-4">
                {[{ role: "Senior Frontend Developer – TCS", period: "2023 – Present", desc: "Leading frontend development for enterprise SaaS applications using React and Next.js." }, { role: "Frontend Developer – StartupHub", period: "2021 – 2023", desc: "Developed responsive web interfaces and optimized UI/UX using Tailwind CSS and TypeScript." }].map((exp) => (
                  <div
                    key={exp.role}
                    className="bg-background/70 backdrop-blur-lg border border-accent/20 rounded-2xl p-5 hover:border-accent/50  transition-all duration-300"
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
    </>
  );
}
