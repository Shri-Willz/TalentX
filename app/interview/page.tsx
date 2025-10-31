"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Brain, Clock, BarChart3, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";

export default function InterviewPractice() {
  const router = useRouter();

  const interviewTypes = [
    {
      title: "Behavioural Interview",
      desc: "Tell me about a time when...",
      level: "Beginner",
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Technical Interview",
      desc: "Solve coding challenges & explain",
      level: "Intermediate",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "System Design",
      desc: "Design scalable systems",
      level: "Advanced",
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Case Study",
      desc: "Business problem solving",
      level: "Advanced",
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "HR Round",
      desc: "Culture fit & expectations",
      level: "Beginner",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Company-Specific",
      desc: "Interview pattern for specific company",
      level: "All Levels",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background text-white px-4 sm:px-8 md:px-16 py-10">

        <section className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-sans font-bold mb-4 tracking-tight">
            Master Your Interviews <span className="text-accent">with AI</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Practice with an AI interviewer, get detailed insights, and boost your confidence.
          </p>
          <Link href="/interview/begininterview">
            <Button className="bg-accent hover:bg-accent/5 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-accent/30 transition-all duration-300">
              Start Interview Session
            </Button>
          </Link>
        </section>

        <section className="flex flex-wrap justify-center gap-8 mb-20">
          {[
            { value: "87%", label: "Users improve after 4+ sessions" },
            { value: "12+", label: "Feedback parameters analyzed" },
            { value: "45min", label: "Average session duration" },
          ].map((stat, i) => (
            <div
              key={i}
              className="backdrop-blur-md bg-accent/5 border border-accent/10 p-8 rounded-2xl w-64 text-center hover:scale-105 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              <p className="text-4xl font-bold text-accent">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="max-w-6xl mx-auto mb-24">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-100">
            Choose Interview Type
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {interviewTypes.map((item, i) => (
              <div
                key={i}
                className="group backdrop-blur-lg bg-accent/5 border border-accent/20 p-8 rounded-2xl hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-5">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{item.level}</span>
                  <button
                    onClick={() => router.push("/interview/interviewdetails")}
                    className="bg-accent hover:bg-accent/5 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
                  >
                    Start Practice
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto text-center mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Past Sessions</h3>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-12 rounded-2xl text-gray-400 hover:shadow-lg hover:shadow-accent/20 transition flex flex-col items-center">
            <Camera className="w-10 h-10 text-accent mb-4" />
            <p className="text-gray-300 text-lg font-medium">No sessions yet</p>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              Start your first AI interview practice session to see your progress here.
            </p>
            <button
              onClick={() => router.push("/interview-practice/interviewdetails")}
              className="mt-6 bg-accent hover:bg-accent/10 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Start First Session
            </button>
          </div>
        </section>

        <footer className="text-center text-gray-600 text-sm mt-10 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} TalentX — All rights reserved.
        </footer>
      </div>
    </>   
  );
}
