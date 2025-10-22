"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Brain, Layers, Award } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const handleStartLearning = () => {
    router.push("/learning/startlearn");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#050505] text-white">
      <header className="w-full text-center mt-16 px-4">
        <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-4 py-1 shadow-sm border border-white/20">
          <p className="text-sm text-blue-400 font-semibold tracking-wide">Powered by AI</p>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-blue-400 mt-4 mb-2 drop-shadow-lg">
          TalentX
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
          Adaptive Learning Platform – Master Technical Skills, Soft Skills & Aptitude with AI-Powered Personalization
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleStartLearning}
            className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            Start Learning Journey
          </button>

          <button className="px-7 py-3 bg-white/10 backdrop-blur-md border border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-white/20 hover:shadow-md transition-all duration-300">
            See How it Works
          </button>
        </div>
      </header>
      <section className="w-full max-w-6xl mt-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-400">
          Why TalentX?
        </h2>
        <p className="text-center text-gray-300 mb-14 max-w-2xl mx-auto">
          Your AI-powered learning companion adapts to your pace, identifies gaps, and accelerates your career growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-blue-400/40 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
            <Brain className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">AI-Adaptive Learning</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI analyzes your performance in real time, adjusting difficulty and recommending personalized learning paths tailored to you.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-blue-400/40 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
            <Layers className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">3-Pillar Mastery</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Master Technical, Soft, and Aptitude skills simultaneously, building the complete skill set modern employers demand.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-blue-400/40 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
            <Award className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Track & Certify</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Earn recognized certificates, monitor your progress with analytics, and showcase your continuous growth journey.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mt-24 bg-blue-950 text-white py-14 shadow-inner border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-10 px-4">
          <div className="text-center">
            <p className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">85%</p>
            <p className="text-sm opacity-90 mt-1">Faster Skill Acquisition</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">10K+</p>
            <p className="text-sm opacity-90 mt-1">Active Learners</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">500+</p>
            <p className="text-sm opacity-90 mt-1">Skills Available</p>
          </div>
        </div>
      </section>
      <section className="w-full mt-20 px-4 mb-20">
        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-3xl p-10 text-center hover:shadow-blue-400/40 transition-all duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-400">
            Ready to Transform Your Career?
          </h3>
          <p className="text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
            Join thousands of learners accelerating their growth with AI-powered adaptive learning.
          </p>
          <button
            onClick={handleStartLearning}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-all duration-300"
          >
            Start Your Journey Now
          </button>
        </div>
      </section>
      <footer className="w-full text-center text-gray-400 text-sm mb-8">
        © {new Date().getFullYear()} TalentX. All rights reserved.
      </footer>
    </div>
  );
}
