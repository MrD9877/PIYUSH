"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function Curtain() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".morph-me", {
      duration: 0.2,
      delay: 0.2,
      attr: { d: "M0,0H1920V560.5s-403.5-149-960-149S0,560.5,0,560.5Z" },
    }).to(".morph-me", {
      duration: 0.2,
      attr: { d: "M0,0H1920V1.5H0Z" },
    });
  }, []);
  return (
    <div className="fixed top-0 h-svh w-screen z-[1000] pointer-events-none">
      <svg className="morph" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <path className="morph-me" d="M0,0H1920V1080.5s-403.5-1-960-1-960,1-960,1Z" fill="black"></path>
      </svg>
    </div>
  );
}
