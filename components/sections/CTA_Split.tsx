"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export const CTA_Split = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: TEXT PARAGRAPH --- */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              READY TO DEPLOY
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              Make your brand <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI-Native.
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              Stop losing traffic to zero-click searches. Equip your brand with the structured data and authority signals needed to rank #1 in LLM responses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                Start Optimizing <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all">
                Talk to Sales
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: ANIMATED WORKFLOW --- */}
          <div className="relative h-[500px] w-full bg-gradient-to-br from-[#0a0a0a] to-black rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Glow Source */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

            {/* --- THE ANIMATION CONTAINER --- */}
            <div className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* 1. Central Node (YOUR BRAND) */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-20 w-24 h-24 rounded-2xl bg-[#111] border border-white/20 flex flex-col items-center justify-center shadow-2xl"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mb-2">K</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Brand</span>
                
                {/* Scanning Line Effect */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-purple-500/50 shadow-[0_0_10px_#a855f7]"
                />
              </motion.div>

              {/* 2. Orbiting Nodes (AI Models) */}
              {[
                { name: "ChatGPT", x: 0, y: -120, color: "bg-green-500" },
                { name: "Gemini", x: 100, y: 80, color: "bg-blue-500" },
                { name: "Claude", x: -100, y: 80, color: "bg-orange-500" },
              ].map((node, i) => (
                <React.Fragment key={i}>
                  {/* The Node Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="absolute z-10 w-20 h-14 rounded-xl bg-[#1a1a1a] border border-white/10 flex flex-col items-center justify-center shadow-xl"
                    style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                  >
                    <div className={`w-2 h-2 rounded-full ${node.color} mb-1 animate-pulse`} />
                    <span className="text-[10px] font-medium text-gray-300">{node.name}</span>
                  </motion.div>

                  {/* Connection Line (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
                    <motion.path
                      d={`M 0 0 L ${node.x} ${node.y}`} // This assumes center is 0,0. We need to offset in parent or use specific coords. 
                      // For simplicity in this layout, we use absolute positioning logic. 
                      // Actually, let's use a simpler visual trick: Beams radiating from center.
                    />
                    {/* Drawing a line from Center (0,0) to Node (x,y) */}
                    <line 
                      x1="50%" y1="50%" 
                      x2={`calc(50% + ${node.x}px)`} 
                      y2={`calc(50% + ${node.y}px)`} 
                      stroke="rgba(255,255,255,0.1)" 
                      strokeWidth="2" 
                    />
                    
                    {/* Data Packet Animation */}
                    <motion.circle r="3" fill="white">
                      <animateMotion 
                        dur={`${2 + i}s`} 
                        repeatCount="indefinite"
                        path={`M 50% 50% L calc(50% + ${node.x}px) calc(50% + ${node.y}px)`} // SVG path logic varies, using simple CSS transform below instead
                      />
                    </motion.circle>
                  </svg>
                  
                  {/* Better Data Packet (Pure Framer Motion) */}
                  <motion.div
                    animate={{ 
                      x: [0, node.x],
                      y: [0, node.y],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.5 
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                  />
                </React.Fragment>
              ))}

              {/* 3. Orbit Ring (Visual Decoration) */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5 border-dashed animate-[spin_20s_linear_infinite]" />
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-6 left-6 right-6 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center px-4 gap-3 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-gray-400">Optimization pipeline active...</span>
              <span className="ml-auto text-xs font-mono text-purple-400">98% Sync</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};