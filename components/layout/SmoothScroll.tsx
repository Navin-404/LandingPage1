"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: any }) {
  // options for that "premium" feel
  const lenisOptions = {
    lerp: 0.1,         // Linear interpolation (lower = smoother/slower)
    duration: 1.5,     // The duration of the scroll animation
    smoothWheel: true, // Enable smooth scrolling for mouse wheel
    wheelMultiplier: 1, // How fast the scroll is
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}