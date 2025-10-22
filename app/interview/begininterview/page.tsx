"use client";

import { useEffect, useState } from "react";
import {
  MicOff,
  Camera,
  Settings,
  AlertTriangle,
  Sparkles,
  Clock,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function InterviewPage() {
  const router = useRouter();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [sessionId, setSessionId] = useState("");
  const [cameraIcon, setCameraIcon] = useState(true);
  const [showEndModal, setShowEndModal] = useState(false);

  useEffect(() => {
    const id = Math.floor(10000000 + Math.random() * 90000000).toString();
    setSessionId(id);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCameraIcon((prev) => !prev), 1500);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0c10] via-[#111217] to-[#0b0c10] text-white flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <header className="flex justify-between items-center px-6 py-3 border-b border-gray-800 backdrop-blur-md bg-white/5 z-10">
        <div className="text-red-500 font-semibold flex items-center gap-2">
          <span className="text-lg animate-pulse">●</span> Recording
        </div>
        <div className="text-gray-400 text-sm">Session: {sessionId}</div>
        <div className="flex items-center gap-3">
          <div className="bg-white/10 text-sm px-3 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
            <Clock size={14} /> {formatTime(timeElapsed)}
          </div>
          <button
            onClick={() => setShowEndModal(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-semibold shadow-lg transition-all duration-200"
          >
            End Interview
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col lg:flex-row z-10">
        <section className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-800 p-6 relative backdrop-blur-md bg-white/5 rounded-none lg:rounded-tr-3xl">
          <div className="text-center">
            <div className="mx-auto mb-3 bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center text-cyan-300 text-4xl shadow-lg backdrop-blur-md">
              <Sparkles className="animate-pulse" size={36} />
            </div>
            <h1 className="text-2xl font-bold mb-2 tracking-wide">
              AI Interviewer
            </h1>
            <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
              Hello! Welcome to your behavioral interview practice session. I'm
              your AI interviewer today. Are you ready to begin?
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-cyan-300">
              <Sparkles size={18} /> Interview Transcript
            </h2>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-sm shadow-lg border border-white/10">
              <div className="text-cyan-400 font-semibold mb-1">Interviewer</div>
              <p className="text-gray-200 leading-relaxed">
                Hello! Welcome to your behavioral interview practice session.
                I'm your AI interviewer today. Are you ready to begin?
              </p>
              <p className="text-gray-500 text-xs mt-1">00:00</p>
            </div>
          </div>
        </section>

        <aside className="lg:w-[340px] border-t lg:border-t-0 lg:border-l border-gray-800 p-6 flex flex-col justify-between backdrop-blur-md bg-white/5 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center bg-white/10 border border-white/10 rounded-3xl h-48 relative shadow-xl backdrop-blur-lg">
              {cameraIcon ? (
                <Camera className="text-cyan-400 w-12 h-12 animate-pulse" />
              ) : (
                <Video className="text-purple-400 w-12 h-12 animate-pulse" />
              )}
              <p className="text-sm text-gray-300 mt-2">Your camera feed</p>
              <span className="absolute top-3 right-3 bg-green-600/80 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                Face Detected
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl flex-1 backdrop-blur-sm transition-all duration-200">
                <MicOff size={16} /> Mute
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl flex-1 backdrop-blur-sm transition-all duration-200">
                <Camera size={16} /> Camera
              </button>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-2 rounded-xl backdrop-blur-sm transition-all duration-200">
              <Settings size={16} /> Settings
            </button>

            <button className="w-full flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 py-2 rounded-xl text-sm transition-all duration-200">
              <AlertTriangle size={16} /> Report Issue
            </button>

            <div className="text-sm text-gray-400 space-y-1 mt-6 backdrop-blur-sm bg-white/10 rounded-xl p-4 shadow-inner text-center">
              <p className="font-medium">Time Elapsed: {formatTime(timeElapsed)}</p>
              <p>Questions Asked: 1 / 10</p>
              <p>
                Confidence Score: <span className="text-green-400 font-semibold">Good</span>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center text-sm shadow-lg border border-white/10">
            <p className="text-gray-300">
              Speaking Pace
              <br />
              <span className="text-green-400 font-semibold">
                Your pace is good. Keep it steady.
              </span>
            </p>
          </div>
        </aside>
      </main>

      {showEndModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 max-w-sm w-full text-center border border-white/10 shadow-xl">
            <h2 className="text-lg font-semibold mb-2">End Interview Session?</h2>
            <p className="text-gray-300 text-sm mb-5">
              Are you sure you want to end this interview session? You’ll be able to view your performance analysis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setShowEndModal(false)}
                className="bg-white/10 hover:bg-white/20 text-white py-2 rounded-md flex-1 transition-all"
              >
                Continue Interview
              </button>
              <button
                onClick={() => router.push("/interview/end")}
                className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md flex-1 transition-all"
              >
                End & View Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
