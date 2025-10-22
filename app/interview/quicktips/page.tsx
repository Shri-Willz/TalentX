"use client";

import React from "react";
import Link from "next/link";
import { Check, ChevronLeft, Eye, Mic, BarChart2, UserCheck } from "lucide-react";

// Reusable InfoItem component
const InfoItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) => (
  <li className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md shadow-md">
      {React.cloneElement(icon, { size: 20, className: "text-cyan-400" })}
    </div>
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </li>
);

// Stepper Component
const Stepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { number: 1, title: "Welcome" },
    { number: 2, title: "Device Setup" },
    { number: 3, title: "Interview" },
  ];

  return (
    <div className="flex items-center justify-center w-full max-w-3xl mx-auto mb-10 px-4 sm:px-0">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center text-center">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step.number < currentStep
                  ? "bg-white/20 text-white shadow-md"
                  : step.number === currentStep
                  ? "bg-cyan-500 text-black ring-4 ring-cyan-500/30 shadow-lg"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {step.number < currentStep ? <Check size={20} /> : step.number}
            </div>
            <span
              className={`mt-2 text-xs sm:text-sm ${
                step.number === currentStep ? "text-white font-semibold" : "text-gray-400"
              }`}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 sm:mx-4 ${
                step.number < currentStep ? "bg-cyan-500" : "bg-white/10"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Main Page Component
export default function QuickTipsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#111827] via-black to-black text-white p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <main>
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
            Technical Interview
          </h1>

          <Stepper currentStep={3} />

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl mb-8 w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
              Quick Tips
            </h2>
            <ul className="space-y-5">
              <InfoItem
                icon={<Eye />}
                title="Make eye contact"
                description="Look at the camera when speaking, not at the screen"
              />
              <InfoItem
                icon={<Mic />}
                title="Speak clearly and pace yourself"
                description="Take your time to think before answering"
              />
              <InfoItem
                icon={<BarChart2 />}
                title="Use the STAR method"
                description="Situation, Task, Action, Result - structure your answers"
              />
              <InfoItem
                icon={<UserCheck />}
                title="Provide specific examples"
                description="Use real experiences with concrete outcomes"
              />
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl mb-8 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-cyan-500 shadow-md">
                <Check size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  You're all set!
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Click "Begin Interview" when you're ready to start
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex flex-col sm:flex-row justify-between items-center mt-6 w-full space-y-4 sm:space-y-0">
          <Link
            href="/interview/technicalinterview"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft size={20} className="inline-block mr-2" />
            Previous
          </Link>

          <Link
            href="begininterview"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-cyan-500/80 backdrop-blur-md border border-white/20 text-black font-semibold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
          >
            Begin Interview
          </Link>
        </footer>
      </div>
    </div>
  );
}
