"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { AuroraBackground } from "../ui/AuroraBackground"; // Import the new background

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      
      {/* Background Layer */}
      <AuroraBackground />

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* 1. Top Badge (Pill shape like 'Hundreds of Integrations') */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:border-white/20 transition-colors cursor-pointer group"
        >
          <span className="text-sm font-medium text-gray-300">AI Search Optimization</span>
          <ChevronRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
        </motion.div>

        {/* 2. Main Headline (Matches 'Dimension is the new standard...') */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Kasparro is the new <br />
          {/* Gradient Text Span matching the image style */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            standard for SEO.
          </span>
        </motion.h1>

        {/* 3. Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          The delightfully smart platform to optimize your brand for Large Language Models. 
          Be the answer AI recommends.
        </motion.p>

        {/* 4. CTA Input/Button Group (Matches the 'Join Waitlist' bar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto"
        >
          {/* Mock Input Field */}
          <div className="relative w-full group">
            <input 
              type="email" 
              placeholder="Enter your website URL..." 
              className="w-full h-12 px-5 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>
          
          {/* Gradient Button */}
          <button className="h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold whitespace-nowrap hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow duration-300 flex items-center gap-2">
            Get Started <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* 5. Bottom 'Glow' separator */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}