"use client";

import React, { useState, ReactNode, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  SlidersHorizontal, 
  Clock, 
  List, 
  ChevronDown 
} from 'lucide-react';

interface StepperItemProps {
  number: number;
  active: boolean;
}

const StepperItem: React.FC<StepperItemProps> = ({ number, active }) => (
  <span
    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
      active
        ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/40'
        : 'bg-white/10 text-gray-400'
    }`}
  >
    {number}
  </span>
);

const StepperConnector: React.FC = () => (
  <div className="h-0.5 w-12 sm:w-20 bg-gray-700" />
);

interface SelectFieldProps {
  label: string;
  icon: ReactNode;
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, icon, options, value, onChange }) => (
  <div>
    <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
      {React.cloneElement(icon as React.ReactElement, { size: 16 })}
      <span>{label}</span>
    </label>
    <div className="relative">
      <select
        className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white 
                   appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400
                   transition-all duration-300 hover:border-white/30"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-gray-900">
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
        <ChevronDown size={20} className="text-gray-400" />
      </div>
    </div>
  </div>
);

const difficultyOptions = [
  'Beginner - Basic concepts',
  'Intermediate - Moderate complexity',
  'Expert - Advanced scenarios',
];

const durationOptions = [
  '15 minutes',
  '30 minutes',
  '45 minutes',
];

const durationToQuestionMap: Record<string, string[]> = {
  '15 minutes': ['15 questions'],
  '30 minutes': ['30 questions'],
  '45 minutes': ['45 questions'],
};

export default function BehavioralInterviewPage() {
  const router = useRouter();
  const [difficulty, setDifficulty] = useState(difficultyOptions[1]);
  const [duration, setDuration] = useState(durationOptions[2]);
  const [availableQuestionOptions, setAvailableQuestionOptions] = useState(durationToQuestionMap[duration]);
  const [questions, setQuestions] = useState(availableQuestionOptions[0]);

  const handleDifficultyChange = (e: ChangeEvent<HTMLSelectElement>) => setDifficulty(e.target.value);

  const handleDurationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newDuration = e.target.value;
    setDuration(newDuration);
    const newQuestionOptions = durationToQuestionMap[newDuration];
    setAvailableQuestionOptions(newQuestionOptions);
    setQuestions(newQuestionOptions[0]);
  };

  const handleQuestionChange = (e: ChangeEvent<HTMLSelectElement>) => setQuestions(e.target.value);

  const handleNextClick = () => router.push("/interview/technicalinterview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-black to-black text-white p-4 sm:p-8">
      <div className="max-w-3xl mx-auto w-full">
        <main className="mt-8">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6">
              Behavioral Interview
            </h1>
            <div className="flex items-center justify-center">
              <StepperItem number={1} active={true} />
              <StepperConnector />
              <StepperItem number={2} active={false} />
              <StepperConnector />
              <StepperItem number={3} active={false} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Interview Details</h2>
            <p className="text-gray-400 mb-6">Configure your practice session</p>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                            rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <SelectField
                label="Difficulty Level"
                icon={<SlidersHorizontal />}
                options={difficultyOptions}
                value={difficulty}
                onChange={handleDifficultyChange}
              />
              <SelectField
                label="Session Duration"
                icon={<Clock />}
                options={durationOptions}
                value={duration}
                onChange={handleDurationChange}
              />
              <SelectField
                label="Number of Questions"
                icon={<List />}
                options={availableQuestionOptions}
                value={questions}
                onChange={handleQuestionChange}
              />
            </div>
          </section>

          <footer className="flex justify-between items-center mt-10">
            <Link 
              href="/interview"
              className="flex items-center justify-center bg-transparent text-cyan-400 font-semibold py-3 px-6 
                         rounded-lg backdrop-blur-md border border-cyan-500/50 
                         hover:bg-cyan-500/10 hover:border-cyan-500
                         transition-all duration-300 transform hover:scale-105"
            >
              <ChevronLeft size={20} className="-ml-1 mr-1" />
              Previous
            </Link>

            <button 
              onClick={handleNextClick}
              className="bg-cyan-500 text-black font-semibold py-3 px-6 rounded-lg 
                         hover:bg-cyan-400 transition-all duration-300 
                         hover:shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105"
            >
              Next
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
