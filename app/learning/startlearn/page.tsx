"use client";

import React from "react";
import {
  Code2,
  Lightbulb,
  Target,
  ChevronRight,
  Award,
  Bell,
  Clock,
  Lock,
  CheckCircle,
} from "lucide-react";

type PillButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "subtle";
  onClick?: () => void;
};

function PillButton({ children, variant = "primary", onClick }: PillButtonProps) {
  const base =
    "w-full text-sm px-4 py-2 rounded-full font-medium transition-transform shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    ghost: "bg-white/10 border border-blue-500 text-blue-300 hover:bg-white/20 focus:ring-blue-200",
    subtle: "bg-white/10 text-gray-300 hover:bg-white/20",
  };
  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function LearningPage() {
  const pillars = [
    {
      title: "Technical Skills",
      icon: <Code2 className="text-blue-400" />,
      progress: 81,
      primary: "Continue Python Course",
      secondary: "Start AWS Learning Path",
      view: "View All Skills",
      skills: [
        { name: "React", value: 85 },
        { name: "JavaScript", value: 78 },
        { name: "Node.js", value: 72 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="text-indigo-400" />,
      progress: 72,
      primary: "Continue Leadership Module",
      secondary: "Start Time Management",
      view: "View All Skills",
      skills: [
        { name: "Communication", value: 72 },
        { name: "Leadership", value: 65 },
        { name: "Problem-Solving", value: 80 },
      ],
    },
    {
      title: "Aptitude & Problem-Solving",
      icon: <Target className="text-pink-400" />,
      progress: 73,
      primary: "Daily Challenge",
      secondary: "Take Practice Test",
      view: "View All Areas",
      skills: [
        { name: "Logical Reasoning", value: 75 },
        { name: "Numerical", value: 68 },
        { name: "Verbal", value: 71 },
      ],
    },
  ];

  const learningModules = [
    { title: "Python Basics", progress: 100, status: "Completed" },
    { title: "OOP Concepts", progress: 70, status: "In progress" },
    { title: "Advanced Python Patterns", progress: 0, status: "Locked" },
    { title: "Performance Optimization", progress: 0, status: "Locked" },
  ];

  const suggestions = [
    {
      title: "AI Insight: Communication Gaps",
      badge: "+25% interview performance",
      desc: "Your AI analysis shows improvement needed in communication. Review personalized notes to strengthen clarity and confidence.",
      cta: "View Notes",
    },
    {
      title: "AI Insight: AWS Demand High",
      badge: "+25% job matches",
      desc: "Python skills strong but AWS is trending. Check AI suggestions and strategies to align with top job markets.",
      cta: "View Notes",
    },
    {
      title: "AI Insight: Aptitude Growth",
      badge: "Expert in 4 weeks",
      desc: "Numerical aptitude can improve quickly. Follow the AI learning streak and daily practice goals shared below.",
      cta: "View Notes",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] p-4 sm:p-6 md:p-10 flex flex-col items-center text-white relative">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-blue-400">
          Your AI Learning Coach
        </h1>
        <div className="flex items-center gap-4">
          <button className="relative p-2 bg-white/10 rounded-full shadow hover:bg-white/20 transition">
            <Bell className="text-blue-400" />
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm shadow hover:bg-blue-700 transition flex items-center gap-2">
            <Clock size={16} /> Learning Agent Active
          </button>
        </div>
      </header>

      {/* Learning Hub */}
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/10 hover:shadow-xl transition">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Your Learning Hub</h2>
            <p className="text-sm text-gray-400 mb-4">
              Welcome to your personalized learning dashboard. Track your learning streak, master skills, and follow AI-driven recommendations to accelerate growth.
            </p>
            <PillButton variant="primary">Start Learning Journey</PillButton>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
              78%
            </div>
            <span className="text-xs text-gray-400 mt-2">Mastery Progress</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center">
          {[{ label: "Courses", value: "8" },
            { label: "Learning Streak", value: "18 days" },
            { label: "Total Hours", value: "127" },
            { label: "Goal Progress", value: "85%" }].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-sm hover:shadow-md transition">
              <p className="text-lg font-semibold text-blue-400">{item.value}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Pillars */}
      <section className="w-full max-w-6xl mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-md p-5 border border-white/10 hover:shadow-lg hover:scale-[1.02] transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-full">{pillar.icon}</div>
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <div className="ml-auto text-sm text-gray-400">{pillar.progress}%</div>
            </div>
            <div className="mb-3 text-sm text-gray-300 space-y-2">
              {pillar.skills.map((skill, idx) => (
                <div className="flex items-center justify-between" key={idx}>
                  <div className="flex-1 pr-3">
                    <div className="text-sm mb-1">{skill.name}</div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-right text-xs">{skill.value}%</div>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 mb-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: `${pillar.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 mb-3">Progress: {pillar.progress}%</p>
            <div className="space-y-2">
              <PillButton variant="primary">
                {pillar.primary} <ChevronRight size={14} />
              </PillButton>
              <PillButton variant="ghost">{pillar.secondary}</PillButton>
              <PillButton variant="subtle">{pillar.view}</PillButton>
            </div>
          </div>
        ))}
      </section>

      {/* Learning Path Section */}
      <section className="w-full max-w-6xl mt-10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-md p-6 border border-white/10 hover:shadow-lg transition">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-white">
            Current Learning Path: <span className="text-blue-400">Python</span>
          </h3>
          <div className="text-sm text-gray-400">Estimated completion: 8 weeks</div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {learningModules.map((module, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 border border-white/20">
                  {module.progress === 100 ? (
                    <CheckCircle className="text-green-500" />
                  ) : module.progress > 0 ? (
                    <div className="text-xs text-blue-400">{module.progress}%</div>
                  ) : (
                    <Lock className="text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{module.title}</p>
                      <p className="text-xs text-gray-400">{module.status}</p>
                    </div>
                    <div className="w-32 text-right text-sm text-blue-400">
                      {module.progress}%
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="font-semibold mb-2 text-white">Path Actions</h4>
            <p className="text-sm text-gray-400 mb-3">
              Manage your current learning path efficiently. Continue where you left off, track your streak, or unlock advanced lessons guided by AI insights.
            </p>
            <div className="space-y-2">
              <PillButton variant="primary">Resume Path</PillButton>
              <PillButton variant="ghost">View Notes</PillButton>
              <PillButton variant="subtle">Unlock Next Module</PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* AI Suggestions */}
      <section className="w-full max-w-6xl mt-10 mb-20">
        <h3 className="text-lg font-semibold text-white mb-4">
          Personalized Suggestions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {suggestions.map((card, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-full">
                  <Award className="text-blue-400" />
                </div>
                <h4 className="font-semibold text-white">{card.title}</h4>
              </div>
              <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {card.badge}
              </span>
              <p className="text-sm text-gray-400 mb-4">{card.desc}</p>
              <div className="flex gap-2">
                <PillButton variant="primary">{card.cta}</PillButton>
                <PillButton variant="ghost">Save</PillButton>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
