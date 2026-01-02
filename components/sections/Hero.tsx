"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import HeroScene from "../canvas/HeroScene";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      
      {/* 1. BACKGROUND */}
      <HeroScene />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2 z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-indigo-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none -translate-y-[60%] z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none" />

      {/* --- CONTENT --- */}
      {/* ADDED pt-32 to push content down on mobile so it doesn't hit the navbar */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center px-4 pt-24 md:pt-0">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 transition-colors hover:bg-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[10px] font-bold text-gray-300 tracking-[0.2em] uppercase">
            AI Search Era Optimization
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          Dominate the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            AI Search Era.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light px-4"
        >
          Kasparro helps brands build a strong visual and informational identity. 
          Be the answer <span className="text-gray-200 font-medium border-b border-white/10 pb-0.5">LLMs recommend</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="group relative w-full sm:w-auto h-11 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_-5px_rgba(236,72,153,0.4)] transition-all hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
            <span className="relative text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
              Optimize Presence <ArrowRight size={16} />
            </span>
          </button>

          <button className="group w-full sm:w-auto h-11 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-200 transition-all hover:bg-white/10 hover:border-white/20 hover:text-white flex items-center justify-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <Play size={10} className="fill-current ml-0.5" />
            </span>
            <span className="text-sm font-medium tracking-wide">See How It Works</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}