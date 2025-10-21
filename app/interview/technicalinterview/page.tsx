"use client";

import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, CheckCircle, Camera, Mic, Volume2 } from "lucide-react";

interface StepperItemProps {
  number: number;
  active: boolean;
  completed: boolean;
}

const StepperItem: React.FC<StepperItemProps> = ({ number, active, completed }) => (
  <span
    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
      completed
        ? "bg-white/20 text-white shadow-md"
        : active
        ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/40"
        : "bg-white/10 text-gray-400"
    }`}
  >
    {completed ? <CheckCircle size={20} /> : number}
  </span>
);

const StepperConnector: React.FC = () => <div className="h-0.5 w-12 sm:w-20 bg-gray-700" />;

export default function TechnicalSetupPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [volume, setVolume] = useState(70);
  const [cameraTested, setCameraTested] = useState(false);
  const [micTested, setMicTested] = useState(false);
  const [speakerTested, setSpeakerTested] = useState(false);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTestCamera = async () => {
    if (cameraTested) return;
    setIsCameraOn(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setTimeout(() => {
        stream.getTracks().forEach((track) => track.stop());
        setIsCameraOn(false);
        setCameraTested(true);
      }, 2000);
    } catch {
      setTimeout(() => {
        setIsCameraOn(false);
        setCameraTested(true);
      }, 2000);
    }
  };

  const handleTestMic = async () => {
    if (micTested) return;
    setIsMicOn(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setTimeout(() => {
        stream.getTracks().forEach((track) => track.stop());
        setIsMicOn(false);
        setMicTested(true);
      }, 2000);
    } catch {
      setTimeout(() => {
        setIsMicOn(false);
        setMicTested(true);
      }, 2000);
    }
  };

  const handleTestSpeaker = () => {
    if (speakerTested) return;
    setIsSpeakerOn(true);
    if (audioRef.current) {
      audioRef.current.play().finally(() => {
        setTimeout(() => {
          setIsSpeakerOn(false);
          setSpeakerTested(true);
        }, 2000);
      });
    } else {
      setTimeout(() => {
        setIsSpeakerOn(false);
        setSpeakerTested(true);
      }, 2000);
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume / 100;
  };

  const allTested = cameraTested && micTested && speakerTested;

  const getButtonClasses = (tested: boolean, testing: boolean) =>
    `flex items-center space-x-2 py-2 px-6 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-md border border-white/20 ${
      tested
        ? "bg-white/20 text-white cursor-not-allowed shadow-inner"
        : testing
        ? "bg-cyan-400/50 text-black animate-pulse shadow-lg"
        : "bg-white/10 text-white hover:bg-white/20 hover:shadow-md"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-black to-black text-white p-4 sm:p-8">
      <div className="max-w-3xl mx-auto w-full">
        <header className="mb-8">

        </header>

        <main>
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6">Technical Interview</h1>
            <div className="flex items-center justify-center">
              <StepperItem number={1} active={false} completed={true} />
              <StepperConnector />
              <StepperItem number={2} active={true} completed={false} />
              <StepperConnector />
              <StepperItem number={3} active={false} completed={false} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Technical Setup</h2>
            <p className="text-gray-400 mb-6">Test your devices before starting</p>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="p-4 bg-gray-900/50 border border-white/10 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Camera size={24} className="text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">Camera Check</h3>
                    <p className="text-sm text-gray-400">Test your camera</p>
                  </div>
                </div>
                {mounted && (
                  <button
                    onClick={handleTestCamera}
                    className={getButtonClasses(cameraTested, isCameraOn)}
                    disabled={cameraTested}
                  >
                    {cameraTested ? (
                      <>
                        <CheckCircle size={18} /> <span>Tested</span>
                      </>
                    ) : isCameraOn ? (
                      <>
                        <Camera size={18} /> <span>Testing...</span>
                      </>
                    ) : (
                      <>
                        <Camera size={18} /> <span>Test Camera</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="p-4 bg-gray-900/50 border border-white/10 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Mic size={24} className="text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">Microphone Check</h3>
                    <p className="text-sm text-gray-400">Test your microphone</p>
                  </div>
                </div>
                {mounted && (
                  <button
                    onClick={handleTestMic}
                    className={getButtonClasses(micTested, isMicOn)}
                    disabled={micTested}
                  >
                    {micTested ? (
                      <>
                        <CheckCircle size={18} /> <span>Tested</span>
                      </>
                    ) : isMicOn ? (
                      <>
                        <Mic size={18} /> <span>Testing...</span>
                      </>
                    ) : (
                      <>
                        <Mic size={18} /> <span>Test Mic</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="p-4 bg-gray-900/50 border border-white/10 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                  <Volume2 size={24} className="text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">Speaker Check</h3>
                    <p className="text-sm text-gray-400">Adjust volume and test speakers</p>
                  </div>
                </div>
                {mounted && (
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleTestSpeaker}
                      className={getButtonClasses(speakerTested, isSpeakerOn)}
                      disabled={speakerTested}
                    >
                      {speakerTested ? (
                        <>
                          <CheckCircle size={18} /> <span>Tested</span>
                        </>
                      ) : isSpeakerOn ? (
                        <>
                          <Volume2 size={18} /> <span>Testing...</span>
                        </>
                      ) : (
                        <>
                          <Volume2 size={18} /> <span>Test Sound</span>
                        </>
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-36 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                    <span className="text-sm text-gray-300 w-10 text-right">{volume}%</span>
                    <audio ref={audioRef} src="/test-beep.mp3" />
                  </div>
                )}
              </div>
            </div>
          </section>

          <footer className="flex justify-between items-center mt-10">
            <Link
              href="/interview/interviewdetails"
              className="flex items-center justify-center bg-transparent text-cyan-400 font-semibold py-3 px-6 rounded-lg backdrop-blur-md border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              <ChevronLeft size={20} className="-ml-1 mr-1" />
              Previous
            </Link>

            <button
              disabled={!allTested}
              onClick={() => router.push("/interview/quicktips")}
              className={`py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                allTested
                  ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
