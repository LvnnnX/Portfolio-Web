import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const projectDatabase = {
    "voice-recognition-wheelchair": {
      id: 1,
      emoji: "🦼",
      title: "Voice Recognition Electric Wheelchair",
      role: "Team Leader - Machine Learning",
      period: "2024",
      category: "Hardware & AI",
      description: "Proyek ini mengembangkan kursi roda dengan kendali suara untuk penderita quadriplegia. Saya membuat inovasi ini bersama lima rekan tim. Saya bertugas sebagai ketua tim. Tantangan utama saya meliputi manajemen tim dan komunikasi. Setiap anggota memiliki gaya kerja berbeda. Saya menggunakan pendekatan personal untuk menyatukan tim. Manajemen waktu juga menjadi tantangan besar. Kami harus membagi waktu antara proyek dan kewajiban akademis. Kami membuat jadwal rapat rutin untuk mengatasi masalah tersebut. Kami menggunakan alat manajemen proyek. Kami menetapkan peran jelas bagi setiap anggota. Cara ini membuat tim lebih teratur. Setiap orang memahami tanggung jawab masing-masing. Pengalaman ini menunjukkan pentingnya komunikasi dan kemampuan beradaptasi. Kami belajar melihat kegagalan prototipe sebagai bagian dari proses belajar.",
      techStack: ["Python", "Machine Learning", "Speech Recognition", "IoT", "Arduino"],
    },
    "fruit-ninja-bot": {
      id: 2,
      emoji: "🍎",
      title: "Fruit Ninja Bot",
      role: "Machine Learning Engineer",
      period: "2025",
      category: "Computer Vision",
      description: "Proyek ini membuat skrip otomatisasi permainan Fruit Ninja. Saya mengintegrasikan YOLOv8 dan Bettercam. Tujuan proyek adalah membangun bot pendeteksi dan pemotong buah secara langsung. Tantangan utama melibatkan pencarian model YOLOv8 paling efisien. Saya harus mengatasi penurunan bingkai per detik saat program berjalan. Saya menguji 13 model berbeda. Saya mengatur parameter secara manual untuk menyeimbangkan akurasi dan kecepatan komputasi. Integrasi YOLOv8 dan Bettercam menimbulkan hambatan teknis. Saya memastikan sistem mendeteksi koordinat objek secara akurat dan responsif. Saya memfokuskan upaya pada optimasi model untuk menyelesaikan masalah ini. Saya memakai tipe model lebih ringan dengan akurasi tinggi. Saya meneliti cara terbaik memproses bingkai data untuk model tersebut. Pengalaman ini mengajarkan saya pentingnya optimasi algoritme. Visi komputer membutuhkan akurasi deteksi. Visi komputer memerlukan kecepatan dan efisiensi sistem secara menyeluruh.",
      techStack: ["Python", "YOLOv8", "OpenCV", "Computer Vision", "Automation"],
    },
    "high-school-educator": {
      id: 3,
      emoji: "🎓",
      title: "High School Educator",
      role: "Programming Instructor",
      period: "2022 - 2025",
      category: "Education",
      description: [
        "Saya bertugas sebagai Pengajar Bahasa Pemrograman dan Pelatih Olimpiade Informatika di SMA N 2 Amlapura dari tahun 2022 hingga 2025. Peran ini menuntut saya untuk mengajar materi teknis. Saya mengubah pendekatan pengajaran untuk mempertahankan motivasi siswa. Setiap siswa memiliki gaya belajar unik. Saya menyajikan materi secara jelas dan menarik. Tantangan terbesar melibatkan penjagaan semangat siswa saat mereka menghadapi tekanan persiapan kompetisi.Saya merancang kurikulum fleksibel untuk mengatasi masalah tersebut.",
        "Saya menyusun silabus khusus kompetisi. Silabus ini memberikan fondasi pengetahuan kuat bagi siswa. Saya melengkapi materi dengan strategi lomba. Metode ini membantu siswa merasa lebih siap. Pengalaman ini membuktikan pentingnya komunikasi dan empati. Peran pendidik mencakup penyampaian ilmu. Pendidik harus tampil sebagai motivator. Pendidik wajib memahami kebutuhan setiap siswa. Kesuksesan siswa mencerminkan kemampuan kita beradaptasi. Keberhasilan mereka membutuhkan dukungan berkelanjutan kita."
      ],
      techStack: ["C++", "Mathematics", "Programming", "Problem Solving"],
    }
  };

  const project = projectDatabase[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#e8e6e3] mb-4">Project Not Found</h1>
          <Link href="/?section=projects" className="text-[#d4a574] hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#e8e6e3] overflow-y-auto">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#8b7355]/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto">
        {/* Back button */}
        <Link 
          href="/?section=projects" 
          className="inline-flex items-center gap-2 text-[#6b6560] hover:text-[#d4a574] font-medium transition-colors mb-12 group"
        >
          <svg 
            className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m7-7l-7 7 7 7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          {/* Category & Period */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#d4a574]/10 text-[#d4a574] border border-[#d4a574]/20">
              {project.category}
            </span>
            <span className="text-[#6b6560] text-sm">{project.period}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e6e3] mb-4">
            {project.title}
          </h1>
          
          {/* Role */}
          <p className="text-xl text-[#a09c97]">
            Role: <span className="text-[#d4a574] font-medium">{project.role}</span>
          </p>
        </div>

        {/* Main Image */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-[#151515] border border-[#2a2a28]">
          <img 
            src={`/images/pr${project.id}-full.png`} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#e8e6e3] mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#d4a574] rounded-full" />
              About This Project
            </h2>
            {Array.isArray(project.description) ? (
              <div className="space-y-6">
                {project.description.map((para, idx) => (
                  <p key={idx} className="text-[#a09c97] leading-relaxed text-lg">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-[#a09c97] leading-relaxed text-lg">
                {project.description}
              </p>
            )}
          </div>

          {/* Tech Stack Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-12 p-6 rounded-2xl bg-[#151515] border border-[#2a2a28] backdrop-blur-sm">
              <h3 className="text-lg font-bold text-[#e8e6e3] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#1a1a1a] text-[#a09c97] border border-[#2a2a28]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Emoji Preview */}
              <div className="mt-8 pt-6 border-t border-[#2a2a28] text-center">
                <div className="text-6xl">{project.emoji}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}