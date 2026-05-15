"use client";

export default function VisionMission() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#f4f7f2] p-12 md:p-16 rounded-[3rem] border border-[#cddcc5]/50 group hover:border-[#5d8a4f] transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5d8a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="font-serif text-[2.2rem] text-[#1c1f1a] mb-6">Our Mission</h3>
            <p className="text-[1.1rem] text-[#555a50] leading-relaxed">
              To provide personalized, evidence-based Ayurvedic therapies that empower individuals to reclaim their natural state of wellness. We bridge ancient wisdom with modern discipline to offer results-oriented clinical care.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#1c1f1a] p-12 md:p-16 rounded-[3rem] text-white group hover:bg-[#252822] transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a8c49c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3 className="font-serif text-[2.2rem] text-white mb-6">Our Vision</h3>
            <p className="text-[1.1rem] text-white/70 leading-relaxed">
              To be the gold standard in authentic Ayurvedic clinical care, recognized globally for restoring metabolic health and holistic balance through traditional protocols and compassionate expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
