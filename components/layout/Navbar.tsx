"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Animation variants for staggered list items
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div 
          className={`mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
            scrolled 
              ? "max-w-4xl rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-lg h-14" 
              : "max-w-7xl h-16 bg-transparent"
          }`}
        >
          
          {/* Logo */}
          <div className="flex items-center gap-2 pl-2 md:pl-0 z-50 relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              K
            </div>
            <span className="font-bold text-white tracking-tight text-lg">Kasparro</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Changelog"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block pr-1">
            <button className="text-xs font-bold text-white px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all hover:scale-105">
              Book Demo
            </button>
          </div>

          {/* Hamburger Icon (Z-Index ensures it stays above the menu) */}
          <div className="md:hidden pr-1 z-50 relative">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-[#050505]/95 backdrop-blur-[20px] flex flex-col pt-32 px-8"
          >
            {/* Background Glow Orb */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

            <motion.div 
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-8"
            >
              {["Services", "About", "Changelog", "Contact"].map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4"
                  >
                    <span className="group-hover:text-purple-400 transition-colors">{item}</span>
                    <ChevronRight className="text-gray-600 group-hover:text-purple-400 transition-colors" size={24} />
                  </Link>
                </motion.div>
              ))}
              
              {/* Premium Mobile CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <button className="w-full relative h-14 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                   <span className="relative z-10 flex items-center justify-center gap-2">
                     Book a Demo <ArrowRight size={20} />
                   </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Footer Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-10 text-gray-500 text-sm"
            >
              <p>© 2026 Kasparro Inc.</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Email</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}