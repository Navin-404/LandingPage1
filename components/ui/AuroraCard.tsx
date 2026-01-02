"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

interface AuroraCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const AuroraCard = ({ title, desc, icon }: AuroraCardProps) => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:border-purple-500/50">
      
      {/* --- HOVER EFFECTS LAYER --- */}
      
      {/* 1. Top "Badge" Spotlight (Mimics the top glow in your image) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-40 bg-purple-500/20 blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* 2. Bottom "Button" Glow (Mimics the bottom purple area) */}
      <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-purple-600/30 via-purple-900/10 to-transparent blur-[30px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* 3. Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex h-full flex-col p-8">
        
        {/* Icon with Hover Transition */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-white shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-500 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          {icon}
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-purple-100">
          {title}
        </h3>
        
        <p className="mb-8 text-base leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
          {desc}
        </p>

        {/* Pseudo-Button (Appears to mimic the reference image button) */}
        <div className="mt-auto flex items-center gap-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span>Learn more</span>
          <ArrowRight size={16} className="text-purple-400" />
        </div>
      </div>
    </div>
  );
}; 