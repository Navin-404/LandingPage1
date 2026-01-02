"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import HeroScene from "../canvas/HeroScene";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background Layer */}
      <HeroScene />
      
      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-semibold tracking-wider mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            AI SEARCH ERA OPTIMIZATION
          </span>

          {/* Headline with Gradient Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
            Dominate the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
              AI Search Era
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kasparro helps brands build a strong visual and informational identity. 
            Be the answer LLMs recommend. [cite: 74]
          </p>

          {/* Buttons with Glow Effects */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Optimize Presence <Zap size={20} className="fill-black" />
              </span>
            </button>
            
            <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:border-white/30">
              See How It Works <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}