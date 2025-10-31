"use client";
import React from "react";
import {
  Sparkles,
  User,
  BookOpen,
  Briefcase,
  GraduationCap,
  Wrench,
  Folder,
  Award,
  Plus,
  FileText,
  Edit,
  Download,
} from "lucide-react";

export default function ResumeMaker() {
  const sections = [
    { title: "Personal Information", status: "Completed", icon: User },
    { title: "Work Experience", status: "Completed", icon: Briefcase },
    { title: "Education", status: "Completed", icon: GraduationCap },
    { title: "Skills", status: "Not completed", icon: Wrench },
    { title: "Projects", status: "Not completed", icon: Folder },
    { title: "Certifications", status: "Not completed", icon: Award },
  ];

  return (
    <main className="min-h-screen w-full bg-[#0B0B0F] text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4 border-b border-white/10 sticky top-0 bg-black/40 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-blue-500" />
          <h1 className="font-bold text-xl tracking-wide">TalentX</h1>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Jobs</a>
          <a href="#" className="hover:text-blue-400 transition">Learn</a>
          <a href="#" className="hover:text-blue-400 transition">Interview</a>
          <a href="#" className="hover:text-blue-400 transition">Connections</a>
          <a href="#" className="hover:text-blue-400 transition">Messages</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-blue-500 transition-all">
            <User className="w-5 h-5 text-gray-300" />
          </div>
        </div>
      </nav>

      
      <div className="w-full px-4 md:px-10 py-12 flex flex-col lg:flex-row gap-10 lg:gap-12 max-w-[1600px] mx-auto">
        <section className="flex-1">
          <h2 className="text-3xl font-semibold text-white mb-2">Resume Maker</h2>
          <p className="text-gray-400 mb-10">
            Create and customize your professional resume with AI assistance.
          </p>

          <div className="flex flex-col gap-4">
            {sections.map(({ title, status, icon: Icon }, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-black/40 border border-white/10 rounded-2xl p-5 hover:border-blue-500 hover:bg-black/60 backdrop-blur-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-base font-semibold text-white">{title}</h3>
                    <p
                      className={`text-sm ${
                        status === "Completed" ? "text-green-400" : "text-gray-400"
                      }`}
                    >
                      {status}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 hover:text-white transition-all duration-300">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            ))}

            <button className="flex items-center justify-center gap-2 py-3 mt-3 text-blue-400 border border-white/10 rounded-2xl hover:border-blue-500 hover:bg-blue-600/20 backdrop-blur-md transition-all duration-300">
              <Plus className="w-5 h-5" />
              Add Custom Section
            </button>
          </div>
        </section>

     
        <aside className="lg:w-[40%] bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500 transition-all duration-300 flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-semibold text-white text-lg">Resume Preview</h3>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 hover:text-white transition-all duration-300">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/40 text-purple-300 hover:text-white transition-all duration-300">
                <Edit className="w-4 h-4" />
                Edit Resume
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center border border-white/10 rounded-xl bg-black/30 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
            <FileText className="w-12 h-12 text-gray-500" />
          </div>

          
          <div className="mt-6 border-t border-white/10 pt-5 text-sm text-gray-400">
            <h4 className="font-medium text-white mb-2">AI Tips</h4>
            <ul className="list-disc list-inside space-y-1 leading-relaxed">
              <li>Use action verbs in your experience</li>
              <li>Quantify your achievements</li>
              <li>Tailor resume for each job</li>
              <li>Keep it concise (1–2 pages)</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
