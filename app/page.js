"use client";

import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const sectionFromURL = params.get("section");

    if (sectionFromURL) {
      setActiveSection(sectionFromURL);
    }
  }, []);

  const navItems = [
    { id: "hero", label: "PROFILE" },
    { id: "projects", label: "PROJECTS" },
    { id: "experiences", label: "EXPERIENCES" },
  ];

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);

  return (
    <main className="flex h-screen w-full text-[#e8e6e3] overflow-hidden relative">
      {/* ═══════════════════════════════════════════════════════════
          MODERN TECH GRADIENT BACKGROUND
      ═══════════════════════════════════════════════════════════ */}
      <div className="tech-gradient-bg">
        {/* Grid overlay */}
        <div className="tech-grid-overlay" />
        
        {/* Animated glow orbs */}
        <div className="tech-glow tech-glow-1" />
        <div className="tech-glow tech-glow-2" />
        <div className="tech-glow tech-glow-3" />
      </div>

      {/* Left-side Vertical Timeline Navigation — floating, centered, transparent */}
      <nav className="hidden lg:flex flex-col absolute left-[56px] top-1/2 -translate-y-1/2 z-50 overflow-hidden">
        <div className="relative flex flex-col items-start">
          {/* 
            Layout math (each item: py-4=16px top + 32px dot-container + 16px bottom = 64px):
            Item 0 dot center: 16 + 16 = 32px
            Item 1 dot center: 64 + 16 + 16 = 96px  
            Item 2 dot center: 128 + 16 + 16 = 160px
            Line: top=32px, height=128px (32→160)
            Active: only to NEXT dot (64px), not all the way down
          */}
          <div className="absolute left-[15px] top-[32px] w-[2px] h-[128px] bg-[#1a1a1a] rounded-full" />

          {/* Active segment: short line from active dot to next dot only */}
          {activeIndex >= 0 && activeIndex < navItems.length - 1 && (
            <div
              className="absolute left-[15px] w-[2px] bg-gradient-to-b from-[#d4a574] via-[#d4a574]/60 to-[#d4a574]/10 transition-all duration-700 ease-out rounded-full"
              style={{
                top: `${32 + activeIndex * 64}px`,
                height: `64px`,
              }}
            />
          )}

          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const isPast = index < activeIndex;

            return (
              <a
                key={item.id}
                href={`/?section=${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                  window.history.pushState(null, "", `/?section=${item.id}`);
                }}
                className="relative flex items-center gap-4 py-4 group z-10"
              >
                {/* Timeline dot — larger, perfectly centered on the line */}
                <div className="relative flex items-center justify-center w-[32px] h-[32px] flex-shrink-0">
                  {/* Outer ring */}
                  <div
                    className={`
                      w-4 h-4 rounded-full border-2 transition-all duration-500 ease-out
                      ${isActive
                        ? "border-[#d4a574] bg-[#d4a574] shadow-lg shadow-[#d4a574]/40 scale-110"
                        : isPast
                          ? "border-[#d4a574]/50 bg-[#d4a574]/20"
                          : "border-[#2a2a28] bg-[#151515] group-hover:border-[#d4a574]/40"
                      }
                    `}
                  >
                    {/* Inner pulse for active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-[#d4a574] animate-timeline-pulse" />
                    )}
                  </div>
                </div>

                {/* Label — bigger, to the right */}
                <span
                  className={`
                    text-[11px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap
                    font-mono transition-all duration-300
                    ${isActive
                      ? "text-[#d4a574]"
                      : isPast
                        ? "text-[#6b6560] group-hover:text-[#8a837c]"
                        : "text-[#3a3a37] group-hover:text-[#4a4a48]"
                    }
                  `}
                >
                  {item.label}
                </span>

                {/* Hover glow */}
                {!isActive && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#d4a574]/5 rounded-lg" />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 flex flex-row items-center justify-around h-14 border-t border-[#2a2a28] glass-nav z-50 safe-area-bottom">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`/?section=${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.id);
                window.history.pushState(null, "", `/?section=${item.id}`);
              }}
              className={`
                relative flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300
                ${isActive ? "text-[#d4a574]" : "text-[#4a4a48]"}
              `}
            >
              {/* Mobile dot */}
              <div
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${isActive ? "bg-[#d4a574] shadow-sm shadow-[#d4a574]/50" : "bg-[#2a2a28]"}
                `}
              />
              <span className="text-[8px] font-semibold tracking-[0.1em] uppercase font-mono">
                {item.label}
              </span>
              {/* Active top line */}
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow relative z-10 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] min-h-0 pb-16 lg:pb-0">
        <div className="min-h-full">
          {activeSection === "hero" && <Hero />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "experiences" && <Experiences />}
        </div>
      </div>
    </main>
  );
}
