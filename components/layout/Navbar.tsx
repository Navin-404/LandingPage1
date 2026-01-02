"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-0" : "py-2"}`}>
      <div className={`max-w-4xl mx-auto px-6 h-14 flex items-center justify-between rounded-full border transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-lg" : "bg-transparent border-transparent"}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
            K
          </div>
          <span className="font-bold text-white tracking-tight">Kasparro</span>
        </div>

        {/* Centered Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Changelog"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <button className="text-sm font-medium text-white px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all">
          Book Demo
        </button>
      </div>
    </nav>
  );
}