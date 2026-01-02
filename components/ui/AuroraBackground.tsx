"use client";
import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* 1. The Main Gradient Mesh */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[120%] h-[100%] 
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
        from-indigo-900/50 via-[#050505] to-[#050505] opacity-70 blur-[100px]" 
      />

      {/* 2. Animated Orbs mimicking the 'Dimension' look */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen"
      />

      {/* 3. The "Sunset" glow from the bottom of the text (Orange/Pink accent) */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-[100px] mix-blend-screen"
      />
    </div>
  );
};