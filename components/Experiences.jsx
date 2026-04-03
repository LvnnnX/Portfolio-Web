"use client";

import { useState, useRef } from "react";

export default function Experiences() {
  const [hoveredExperienceId, setHoveredExperienceId] = useState(1);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const scrollRef = useRef(null);

  const experiences = [
    {
      id: 1,
      role: "Coach Informatika",
      company: "SMAN 2 Amlapura",
      period: "2022 - 2025",
      description: "Mengajarkan skill programming dasar C++ untuk Olimpiade Sains Nasional. Memberikan kurikulum yang dinamis menyesuaikan standar Olimpiad.",
      category: "Education",
      skills: ["C++", "Olympiad Prep", "Curriculum Design"],
      photos: ["/images/work_1/1.png", "/images/work_1/2.png", "/images/work_1/3.png", "/images/work_1/4.png"]
    },
    {
      id: 2,
      role: "Anggota Komisi IV",
      company: "Dewan Perwakilan Mahasiswa (DPM) FMIPA Udayana",
      period: "Jan 2023 - Jan 2024",
      description: "Mengawasi seluruh kegiatan BEM FMIPA Udayana sebagai Supervisor.",
      category: "Leadership",
      skills: ["Supervision", "Management", "Student Org"],
      photos: ["/images/work_2/1.png"]
    },
    {
      id: 3,
      role: "PKM Team Leader",
      company: "KEMDIKBUDRISTEK",
      period: "Feb 2023 - Oct 2023",
      description: "Berhasil membawa tim lolos ke tingkat Pendanaan.",
      category: "Research",
      skills: ["Team Leadership", "Research", "Funding"],
      photos: ["/images/work_3/1.png", "/images/work_3/2.png", "/images/work_3/3.png", "/images/work_3/4.png"]
    },
    {
      id: 4,
      role: "MEWS Intern Staff",
      company: "BBMKG Wilayah III Denpasar",
      period: "Jul 2023 - Aug 2023",
      description: "Meningkatkan efisiensi kinerja dengan membuat sistem automatisasi dokumen berbasis web.",
      category: "Internship",
      skills: ["Web Development", "Automation", "Documentation"],
      photos: ["/images/work_4/1.png", "/images/work_4/2.png", "/images/work_4/3.png"]
    },
    {
      id: 5,
      role: "Machine Learning Cohort",
      company: "Bangkit Academy (Google, GoTo, Traveloka)",
      period: "Aug 2023 - Jan 2024",
      description: "Menyelesaikan 900+ jam pelatihan intensif AI, Machine Learning, dan data processing. Merancang model klasifikasi untuk proyek akhir.",
      category: "Certification",
      skills: ["Python", "TensorFlow", "ML", "Deep Learning"],
      photos: ["/images/work_5/1.png"]
    },
    {
      id: 6,
      role: "Microsoft Data Engineer",
      company: "MariBelajar",
      period: "Jan 2024 - Jun 2024",
      description: "Menyelesaikan 900+ jam pelatihan Data Engineer menggunakan Microsoft tools. Mendapatkan 6 Sertifikat Kompetensi.",
      category: "Certification",
      skills: ["Azure", "SQL", "ETL", "Data Engineering"],
      photos: ["/images/work_6/1.png", "/images/work_6/2.png", "/images/work_6/3.png", "/images/work_6/4.png", "/images/work_6/5.png", "/images/work_6/6.png"]
    },
    {
      id: 7,
      role: "Machine Learning Engineer",
      company: "Solo Project",
      period: "Jan 2025 - Aug 2025",
      description: "Membuat BOT Fruit Ninja menggunakan YOLOv8. Replika model dengan PyTorch dan hyperparameter tuning.",
      category: "Project",
      skills: ["YOLOv8", "PyTorch", "Computer Vision", "Object Detection"],
      photos: ["/images/work_7/1.png", "/images/work_7/2.png", "/images/work_7/3.png"]
    },
  ];

  const currentExp = experiences.find(e => e.id === hoveredExperienceId);

  const handleScroll = (direction) => {
    if (!scrollRef.current || !currentExp) return;
    
    const scrollAmount = 220;
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b8956e]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b8956e]" />
          <span className="text-[#d4a574] text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e6e3] mb-4 sm:mb-6">
          Work & <span className="gradient-text">Experiences</span>
        </h2>
        
        <p className="text-[#6b6560] text-base sm:text-lg max-w-2xl mb-10 sm:mb-16">
          A timeline of professional experiences, certifications, and key achievements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Timeline */}
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                onMouseEnter={() => {
                  setHoveredExperienceId(exp.id);
                  setActivePhotoIndex(0);
                }}
                className={`
                  relative group p-4 rounded-xl cursor-pointer transition-all duration-300 border
                  ${hoveredExperienceId === exp.id 
                    ? "glass border-[var(--glass-border-accent)] shadow-lg shadow-[#d4a574]/5" 
                    : "glass-light hover:bg-[var(--glass-bg-hover)]"
                  }
                `}
              >
                {/* Timeline dot */}
                <div className={`
                  absolute left-[-6px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${hoveredExperienceId === exp.id ? "bg-[#d4a574] shadow-lg shadow-[#d4a574]/50" : "bg-[#2a2a28] group-hover:bg-[#3a3a37]"}
                `} />
                
                <div className="pl-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm sm:text-base font-semibold text-[#e8e6e3] group-hover:text-[#d4a574] transition-colors leading-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-[#6b6560] font-medium whitespace-nowrap flex-shrink-0 ml-2">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#6b6560] text-sm leading-tight">
                    {exp.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Detail Card with Horizontal Scroll Poker Cards */}
          <div className="relative">
            {currentExp && (
              <div className="sticky top-8 space-y-6">
                {/* Detail Card */}
                <div className="relative p-5 sm:p-6 rounded-2xl glass-card overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/5 to-[#8b7355]/5 rounded-2xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Category badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#d4a574]/10 text-[#d4a574] border border-[#d4a574]/20 mb-4">
                      {currentExp.category}
                    </span>
                    
                    {/* Role & Company */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#e8e6e3] mb-1 leading-tight">
                      {currentExp.role}
                    </h3>
                    <p className="text-[#a09c97] text-base sm:text-lg mb-4 leading-tight">
                      {currentExp.company}
                    </p>
                    
                    {/* Period */}
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4 text-[#6b6560] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[#6b6560] text-sm">{currentExp.period}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#a09c97] leading-relaxed mb-4 text-sm sm:text-base">
                      {currentExp.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {currentExp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium glass-light whitespace-nowrap"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Horizontal Scroll Poker Cards */}
                {currentExp.photos && currentExp.photos.length > 0 && (
                  <div className="relative">
                    {/* Section Label */}
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4 text-[#d4a574] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium text-[#a09c97]">Photos</span>
                      <span className="text-xs text-[#6b6560]">({currentExp.photos.length})</span>
                    </div>

                    {/* Scroll Buttons */}
                    {currentExp.photos.length > 3 && (
                      <>
                        <button 
                          onClick={() => handleScroll('left')}
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-light flex items-center justify-center transition-all group"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6b6560] group-hover:text-[#d4a574] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleScroll('right')}
                          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-light flex items-center justify-center transition-all group"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6b6560] group-hover:text-[#d4a574] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Poker Cards Container */}
                    <div 
                      ref={scrollRef}
                      className="poker-card-container flex gap-3 sm:gap-4 pb-2 overflow-x-auto"
                      style={{ 
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                      }}
                    >
                      {currentExp.photos.map((photo, idx) => (
                        <div 
                          key={idx}
                          className={`
                            poker-card relative w-40 sm:w-48 h-52 sm:h-64 rounded-xl overflow-hidden 
                            glass-light cursor-pointer flex-shrink-0
                            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#d4a574]/10
                            ${activePhotoIndex === idx ? 'active ring-2 ring-[#d4a574]/50' : ''}
                          `}
                          onClick={() => setActivePhotoIndex(idx)}
                          style={{
                            transform: `rotate(${(idx - activePhotoIndex) * 2}deg)`,
                            transformOrigin: 'bottom center',
                          }}
                        >
                          {/* Card shadow/depth effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/5 to-transparent" />
                          
                          {/* Image */}
                          <img 
                            src={photo} 
                            alt={`${currentExp.company} photo ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          
                          {/* Card number indicator */}
                          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0c0c0c]/80 border border-[#2a2a28] flex items-center justify-center">
                            <span className="text-[9px] sm:text-[10px] font-medium text-[#a09c97]">{idx + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Dot indicators */}
                    {currentExp.photos.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {currentExp.photos.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActivePhotoIndex(idx)}
                            className={`
                              w-2 h-2 rounded-full transition-all duration-300
                              ${activePhotoIndex === idx 
                                ? "bg-[#d4a574] w-6" 
                                : "bg-[#2a2a28] hover:bg-[#3a3a37]"
                              }
                            `}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}