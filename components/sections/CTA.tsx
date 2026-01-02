"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] p-[1px] shadow-2xl">
          
          {/* --- ANIMATED BORDER GRADIENT --- */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

          {/* --- MAIN CARD CONTENT --- */}
          <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-[#050505] px-6 py-24 text-center">
            
            {/* 1. Internal Ambient Glow (The "Holographic" feel) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            {/* 2. Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />

            {/* --- TEXT & BUTTONS --- */}
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md">
                <Zap size={14} className="fill-purple-400 text-purple-400" />
                <span className="text-sm font-bold uppercase tracking-wider text-purple-200">
                  Ready to deploy?
                </span>
              </div>

              {/* Headline */}
              <h2 className="mb-6 text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
                Shape your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                  Digital Future.
                </span>
              </h2>

              <p className="mb-10 max-w-xl text-lg text-gray-400">
                Join forward-thinking brands dominating the AI search landscape. 
                Get started today.
              </p>

              {/* Big Action Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-5 text-lg font-bold text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)]"
              >
                <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                <span className="relative z-10">Start Optimizing Now</span>
                <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};