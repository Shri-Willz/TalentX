"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Download,
  RefreshCcw,
  Check,
  X,
  Users,
  Share2,
  Zap,
  BarChart2,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";
const ScoreCircle = ({ score }: { score: number }) => {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-44 h-44 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          className="text-gray-700"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-green-400 transition-all duration-1000 ease-out"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-white">{score}</span>
        <span className="text-sm text-gray-400">of 100</span>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, score }: { skill: string; score: number }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-300">{skill}</span>
      <span className="text-sm font-medium text-gray-400">{score}%</span>
    </div>
    <div className="w-full bg-gray-700/40 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: `${score}%` }}
      ></div>
    </div>
  </div>
);

const InfoCard = ({
  title,
  items,
  iconType,
  icon,
}: {
  title: string;
  items: string[];
  iconType: "check" | "x";
  icon?: React.ReactNode;
}) => (
  <div className="backdrop-blur-lg bg-gray-800/60 rounded-2xl p-6 shadow-lg border border-gray-700/40 flex flex-col space-y-3">
    <div className="flex items-center space-x-2 mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start space-x-2">
          <div className="flex-shrink-0 mt-1">
            {iconType === "check" ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <X className="w-5 h-5 text-red-500" />
            )}
          </div>
          <span className="text-gray-300 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ActionCard = ({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full p-4 text-left rounded-xl backdrop-blur-md bg-gray-800/50 hover:bg-gray-700/60 transition-all duration-200 border border-gray-700/40 flex items-center space-x-4"
  >
    <div className="flex-shrink-0 p-2 bg-gray-700/70 rounded-lg">{icon}</div>
    <div>
      <div className="font-semibold text-white">{title}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </div>
  </button>
);

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("assessment");
  const [sessionId, setSessionId] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);


  useEffect(() => {
    setSessionId(`SESSION-${Date.now()}`);
    const timer = setInterval(() => setElapsedTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Interview AI Report", 14, 20);
    doc.setFontSize(12);
    doc.text(`Session ID: ${sessionId}`, 14, 30);
    doc.text(`Elapsed Time: ${elapsedTime}s`, 14, 38);
    doc.text("Overall Score: 78/100", 14, 46);
    doc.text("You performed well in Communication and Problem Solving.", 14, 54);
    doc.save("Interview_Report.pdf");
  };

  const score = 78;
  const skills = [
    { name: "Communication", score: 90 },
    { name: "Technical Depth", score: 60 },
    { name: "Problem Solving", score: 75 },
    { name: "Professionalism", score: 80 },
  ];
  const summary =
    "You've shown a strong foundation in core concepts and a good ability to structure your thoughts. Focus on providing concrete examples and slow down slightly.";
  const strengths = [
    "Clear communication style",
    "Strong STAR method usage",
    "Good eye contact & professionalism",
    "Critical thinking demonstrated",
  ];
  const improvements = [
    "Add metrics to your answers",
    "Reduce filler words",
    "Slightly fast speaking pace",
    "Explain long-term impact",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">


        <div className="fixed top-4 right-4 flex items-center space-x-3 z-50">
  <button
    onClick={handleDownloadPDF}
    className="flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-md bg-gray-700/50 text-white rounded-lg text-sm font-medium hover:bg-gray-600/70 transition-colors"
  >
    <Download size={16} />
    Download Report
  </button>
  <button
    onClick={() => (window.location.href = "/interview")}
    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
  >
    <RefreshCcw size={16} />
    Practice Again
  </button>
</div>

        </header>
        <div className="text-sm text-gray-400 mb-6 flex flex-col md:flex-row md:space-x-6">
          <p>Session ID: {sessionId}</p>
          <p>Elapsed Time: {elapsedTime}s</p>
        </div>
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-8 lg:col-span-1">
            <div className="backdrop-blur-md bg-gray-800/60 rounded-2xl p-6 text-center shadow-lg border border-gray-700/40">
              <h2 className="text-lg font-semibold text-white mb-4">Overall Score</h2>
              <ScoreCircle score={score} />
              <div className="text-3xl font-bold text-green-400 mt-4">Good</div>
              <p className="text-gray-400 mt-1 text-sm">
                You're in the top 15% of all sessions.
              </p>
            </div>

            <div className="backdrop-blur-md bg-gray-800/60 rounded-2xl p-6 shadow-lg border border-gray-700/40">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart2 /> Performance Breakdown
              </h3>
              <div className="space-y-4">
                {skills.map((s) => (
                  <SkillBar key={s.name} skill={s.name} score={s.score} />
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6 overflow-x-auto space-x-2">
              {["assessment", "communication", "content", "technical", "video"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 text-sm font-medium whitespace-nowrap rounded-t-lg ${
                      activeTab === tab
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                )
              )}
            </div>

            <div className="space-y-6">
              {activeTab === "assessment" && (
                <>
                  <div className="backdrop-blur-md bg-gray-800/60 p-6 rounded-lg border border-gray-700/40 shadow">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap /> AI Summary
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{summary}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard
                      title="Strengths"
                      items={strengths}
                      iconType="check"
                      icon={<Check className="text-green-400" />}
                    />
                    <InfoCard
                      title="Areas for Improvement"
                      items={improvements}
                      iconType="x"
                      icon={<X className="text-red-400" />}
                    />
                  </div>
                </>
              )}

              {activeTab === "communication" && (
                <InfoCard
                  title="Communication Insights"
                  items={[
                    "Good articulation",
                    "Maintained eye contact",
                    "Clear expression of ideas",
                  ]}
                  iconType="check"
                  icon={<Users className="text-blue-400" />}
                />
              )}

              {activeTab === "content" && (
                <InfoCard
                  title="Content Quality"
                  items={[
                    "Good structure in answers",
                    "Use more concrete examples",
                    "Organized flow of thoughts",
                  ]}
                  iconType="check"
                  icon={<BarChart2 className="text-blue-400" />}
                />
              )}

              {activeTab === "technical" && (
                <InfoCard
                  title="Technical Performance"
                  items={[
                    "Strong fundamentals",
                    "Focus on deeper explanations",
                    "Better example-based answers",
                  ]}
                  iconType="check"
                  icon={<Zap className="text-blue-400" />}
                />
              )}

              {activeTab === "video" && (
                <div className="backdrop-blur-md bg-gray-800/60 p-6 rounded-lg border border-gray-700/40 shadow">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Video /> Video Playback
                  </h3>
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-gray-500">
                    (Video Playback Area)
                  </div>
                </div>
              )}
            </div>

        
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <RefreshCcw /> Recommended Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ActionCard
                  icon={<RefreshCcw className="text-blue-400" />}
                  title="Practice Again"
                  description="Try another interview to improve."
                  onClick={() => (window.location.href = "/interview")}
                />
                <ActionCard
                  icon={<Users className="text-blue-400" />}
                  title="Try Different Role"
                  description="Explore other positions."
                />
                <ActionCard
                  icon={<Share2 className="text-blue-400" />}
                  title="Share Results"
                  description="Get feedback from mentors."
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
