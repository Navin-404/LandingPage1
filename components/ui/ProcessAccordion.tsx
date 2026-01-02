"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StepProps {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: StepProps[] = [
  {
    id: 1,
    title: "Analyze",
    desc: "We scan 50+ LLMs to map your brand's current visibility and identify critical gaps.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Optimize",
    desc: "We restructure your data into Knowledge Graphs that AI models can easily ingest and cite.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Monitor",
    desc: "Real-time tracking of brand sentiment across ChatGPT, Gemini, and Claude.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Dominate",
    desc: "Secure the top recommendation spot and become the authoritative answer.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export const ProcessAccordion = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className="w-full h-[500px] flex flex-col md:flex-row gap-4">
      {steps.map((step) => {
        const isActive = activeId === step.id;
        return (
          <div
            key={step.id}
            onMouseEnter={() => setActiveId(step.id)}
            className={`
              relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-700 ease-in-out
              ${isActive 
                ? "flex-[3] border-purple-500/50 bg-[#0f0f12] shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]" 
                : "flex-1 border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f12] hover:border-white/10"
              }
            `}
          >
            {/* Background Gradient (Active Only) */}
            <div 
              className={`absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent transition-opacity duration-700 
              ${isActive ? "opacity-100" : "opacity-0"}`} 
            />

            {/* Vertical Text (Inactive State) */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
              ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-200"}`}
            >
              <div className="rotate-[-90deg] whitespace-nowrap text-xl font-bold text-gray-500 tracking-widest uppercase flex items-center gap-4">
                <span>0{step.id}</span>
                <span className="w-8 h-[1px] bg-gray-700"></span>
                <span>{step.title}</span>
              </div>
            </div>

            {/* Expanded Content (Active State) */}
            <div className={`relative h-full flex flex-col p-8 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-auto">
                <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-900/50">
                  {step.icon}
                </div>
                <span className="text-6xl font-black text-white/5 font-sans">0{step.id}</span>
              </div>

              {/* Text Body */}
              <div className="max-w-md">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-400 leading-relaxed mb-8"
                >
                  {step.desc}
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-wider"
                >
                  Learn more <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};