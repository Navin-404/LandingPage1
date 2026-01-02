"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProcessCardProps {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const ProcessCard = ({ step, title, desc, icon }: ProcessCardProps) => {
  return (
    <div className="group relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]">
      
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* 1. Top Spotlight (The glowing light source from top) */}
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 h-[250px] w-[250px] bg-purple-500/30 blur-[80px] rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      
      {/* 2. Full Gradient Wash (The active purple background) */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/10 to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex h-full flex-col p-8">
        
        {/* Top Header: Icon + Step Badge */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors duration-500 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-400 group-hover:scale-110">
            {icon}
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-500 backdrop-blur-md transition-colors group-hover:border-purple-500/30 group-hover:bg-purple-500/20 group-hover:text-purple-200">
            {step}
          </span>
        </div>

        {/* Text Content (Shifts up on hover to make room for button) */}
        <div className="mt-auto transition-transform duration-500 group-hover:-translate-y-4">
          <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-purple-50">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
            {desc}
          </p>
        </div>

        {/* Reveal Button (Like the reference image) */}
        <div className="absolute bottom-8 left-8 right-8 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-transform active:scale-95">
            See what you get <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};