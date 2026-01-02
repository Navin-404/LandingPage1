"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter, Linkedin, Disc } from "lucide-react"; // Assuming Disc for Discord

export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Bottom Glow (Grounds the page) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      {/* 2. Grid Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- TOP ROW: LOGO & NEWSLETTER --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          
          {/* Left: Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                K
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Kasparro</span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8 leading-relaxed">
              The visual identity layer for Large Language Models. We ensure you are the brand AI recommends.
            </p>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-green-400 uppercase tracking-wider">All Systems Operational</span>
            </div>
          </div>

          {/* Right: Newsletter Input */}
          <div className="lg:pl-20">
            <h3 className="text-white font-bold mb-4">Stay ahead of the algorithm</h3>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 h-10 w-10 bg-white text-black rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Join 4,000+ marketers. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* --- MIDDLE ROW: LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-t border-white/5 pt-16">
          {[
            { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Community", "Help Center"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"] },
          ].map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-2 group text-sm font-medium">
                      <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-2 text-purple-500">•</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- BOTTOM ROW: SOCIALS & COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Kasparro Inc. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin, Disc].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- MASSIVE WATERMARK (The "Signature" Effect) --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none">
        <h1 className="text-[15vw] font-bold text-white/[0.03] text-center leading-[0.8] tracking-tighter whitespace-nowrap">
          KASPARRO
        </h1>
      </div>

    </footer>
  );
}