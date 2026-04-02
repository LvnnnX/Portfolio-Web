"use client";

import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const projectList = [
    { 
      id: 1, 
      emoji: "🦼", 
      title: "Voice Recognition Electric Wheelchair", 
      slug: "voice-recognition-wheelchair",
      category: "Hardware",
      description: "Electric wheelchair controlled via voice recognition for accessibility",
      year: "2024"
    },
    { 
      id: 2, 
      emoji: "🍎", 
      title: "Fruit Ninja Bot", 
      slug: "fruit-ninja-bot",
      category: "Computer Vision",
      description: "AI-powered bot using YOLOv8 for real-time game playing",
      year: "2025"
    },
    { 
      id: 3, 
      emoji: "🎓", 
      title: "High School Educator", 
      slug: "high-school-educator",
      category: "Education",
      description: "Olympiad programming education with C++ for national competitions",
      year: "2023"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="w-full min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a574]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          {/* Marquee effect — constrained to prevent horizontal scroll */}
          <div className="overflow-hidden mb-6 sm:mb-8 -mx-4 sm:-mx-0">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="text-5xl sm:text-6xl md:text-8xl font-black text-[#1a1a1a] tracking-widest mx-4 flex-shrink-0">
                PROJECTS ◆ PROJECTS ◆ PROJECTS ◆ PROJECTS ◆ 
              </span>
              <span className="text-5xl sm:text-6xl md:text-8xl font-black text-[#1a1a1a] tracking-widest mx-4 flex-shrink-0">
                PROJECTS ◆ PROJECTS ◆ PROJECTS ◆ PROJECTS ◆ 
              </span>
            </div>
          </div>

          {/* Title section */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b8956e]" />
            <span className="text-[#d4a574] text-sm font-medium tracking-wider uppercase">
              Selected Works
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e6e3] mb-4 sm:mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-[#6b6560] text-base sm:text-lg max-w-2xl">
            A collection of projects showcasing expertise in AI, Machine Learning, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projectList.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/project/${project.slug}`}
              className="group relative block"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card */}
              <div className={`
                relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden 
                bg-[#151515] border border-[#2a2a28] backdrop-blur-sm 
                transition-all duration-500 
                group-hover:border-[#3a3a37] group-hover:shadow-xl group-hover:shadow-[#d4a574]/5
                ${hoveredProject === project.id ? 'translate-y-[-4px]' : ''}
              `}>
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/3 to-transparent" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                  {/* Emoji icon with subtle glow */}
                  <div className={`
                    text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 transition-all duration-500 
                    group-hover:scale-110 group-hover:drop-shadow-lg
                    ${hoveredProject === project.id ? 'opacity-100' : 'opacity-80'}
                  `}>
                    {project.emoji}
                  </div>
                  
                  {/* Category & Year */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#d4a574]/10 text-[#d4a574] border border-[#d4a574]/20 whitespace-nowrap">
                      {project.category}
                    </span>
                    <span className="text-[#6b6560] text-[10px] sm:text-xs">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e8e6e3] mb-2 group-hover:text-[#d4a574] transition-colors leading-tight px-2">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6b6560] text-xs sm:text-sm leading-relaxed px-2">
                    {project.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-[#d4a574]/90 via-[#b8956e]/60 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-all duration-500
                `}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-6">
                      <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0c0c0c] text-[#d4a574] rounded-full font-semibold text-xs sm:text-sm group-hover:translate-y-0 translate-y-4 transition-all duration-500 whitespace-nowrap">
                        View Project
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CSS for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}