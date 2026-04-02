"use client";

import { useState, useRef } from "react";

export default function Hero() {
  const skills = ["Python", "Machine Learning", "Data Analytics", "SQL"];
  const imageRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  
  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Pre-title */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6 animate-fade-in">
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4a574] flex-shrink-0" />
          <span className="text-[#d4a574] text-xs sm:text-sm font-medium tracking-wider uppercase">
            Data Scientist & ML Engineer
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#e8e6e3] mb-3 sm:mb-4 tracking-tight animate-slide-up">
          <span className="bg-gradient-to-r from-[#e8e6e3] via-[#e8e6e3] to-[#6b6560] bg-clip-text text-transparent">
            PORTOFOLIO
          </span>
        </h2>
        
        {/* Decorative line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[#d4a574] via-[#b8956e] to-transparent mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left: Profile Text */}
          <div className="animate-slide-up order-2 lg:order-1" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e8e6e3] mb-3 sm:mb-4 md:mb-6 leading-tight">
              Pande Gede Dani <span className="text-[#d4a574]">Wismagatha</span>, S.Kom
            </h1>
            
            <div className="w-12 sm:w-16 md:w-24 h-[2px] bg-gradient-to-r from-[#d4a574] to-[#b8956e] mb-4 sm:mb-6 rounded-full" />
            
            <p className="text-[#a09c97] text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-6 sm:mb-8">
              Data Scientist dengan pengalaman 2+ tahun di AI dan Machine Learning. 
              Melalui 900+ jam pelatihan intensif (Bangkit Academy & Microsoft), 
              saya membangun model prediktif untuk solusi berbasis data yang inovatif.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-[#2a2a28] bg-[#151515] text-[#a09c97] hover:bg-[#1a1a1a] hover:border-[#3a3a37] hover:text-[#e8e6e3] transition-all duration-300 whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <button
                onClick={() => window.open("https://linktr.ee/lvnnnx", "_blank")}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] rounded-full font-semibold text-[#0c0c0c] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#d4a574]/20 text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <span className="relative z-10">More About Me</span>
                <svg 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8956e] to-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <a
                  href="https://linkedin.com/in/kokopandan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 md:p-4 rounded-full bg-[#151515] border border-[#2a2a28] hover:bg-[#1a1a1a] hover:border-[#3a3a37] transition-all duration-300 group flex-shrink-0"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6b6560] group-hover:text-[#d4a574] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/LvnnnX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 md:p-4 rounded-full bg-[#151515] border border-[#2a2a28] hover:bg-[#1a1a1a] hover:border-[#3a3a37] transition-all duration-300 group flex-shrink-0"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6b6560] group-hover:text-[#d4a574] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Photo with 3D Tilt Effect */}
          <div className="flex justify-center lg:justify-end animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div 
              className="relative cursor-crosshair w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px]"
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main photo frame with 3D tilt */}
              <div 
                className="relative w-full aspect-square transition-transform duration-100 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glow effect behind */}
                <div 
                  className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-[#d4a574]/15 to-[#8b7355]/15 rounded-2xl blur-2xl transition-opacity duration-100"
                  style={{ opacity: 0.8 + Math.abs(rotate.x + rotate.y) * 0.01 }}
                />
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#2a2a28] bg-[#151515] shadow-2xl">
                  <img 
                    src="/images/hero_img.jpg" 
                    alt="Pande Gede Dani Wismagatha"
                    className="w-full h-full object-cover"
                    style={{ transform: 'translateZ(20px)' }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/60 via-transparent to-transparent" />
                </div>

                {/* Decorative corner accents - warm */}
                <div 
                  className="absolute -top-1.5 -left-1.5 w-5 sm:w-7 h-5 sm:h-7 border-t-2 border-l-2 border-[#d4a574] rounded-tl-lg"
                  style={{ transform: 'translateZ(40px)' }}
                />
                <div 
                  className="absolute -bottom-1.5 -right-1.5 w-5 sm:w-7 h-5 sm:h-7 border-b-2 border-r-2 border-[#b8956e] rounded-br-lg"
                  style={{ transform: 'translateZ(40px)' }}
                />
              </div>

              {/* Floating skill badges - with 3D depth, constrained within bounds */}
              <div 
                className="absolute left-0 sm:-left-2 top-1/4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#151515]/90 backdrop-blur-md border border-[#2a2a28] text-[#a09c97] text-[10px] sm:text-xs font-medium whitespace-nowrap"
                style={{ transform: 'translateZ(30px)' }}
              >
                AI & ML
              </div>
              <div 
                className="absolute right-0 sm:-right-2 bottom-1/3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#151515]/90 backdrop-blur-md border border-[#2a2a28] text-[#a09c97] text-[10px] sm:text-xs font-medium whitespace-nowrap"
                style={{ transform: 'translateZ(30px)' }}
              >
                Data Science
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}