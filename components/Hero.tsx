"use client";
import Image from "next/image";
import Link from "next/link";

const HERO_IMG = "https://framerusercontent.com/images/B62L3MNhpOQWkViHFIzjWaZIuk.jpg?width=2000";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#1c1f1a]">
      {/* Background Image - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMG}
          alt="Advaitha Ayurveda Clinical Setting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1f1a]/90 via-[#1c1f1a]/50 to-[#1c1f1a]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[0.8rem] font-medium mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a8c49c] inline-block" />
          Authentic Ayurvedic Healing
        </div>

        <h1 className="font-serif text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.02] font-normal text-white max-w-[1100px] tracking-tight mb-8">
          Heal Naturally with <span className="italic">Authentic Ayurveda</span>
        </h1>

        <p className="text-[1.1rem] md:text-[1.25rem] text-white/70 max-w-[700px] leading-relaxed mb-10">
          Personalized Ayurvedic treatments, Panchakarma therapies, and holistic wellness programs designed for modern living.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact-us" className="px-10 py-4 rounded-full bg-[#5d8a4f] text-white font-medium hover:bg-[#496e3d] transition-all">
            Book Appointment
          </Link>
          <Link href="/treatments" className="px-10 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-[#1c1f1a] transition-all">
            Explore Treatments
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 mt-20">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "5,000+", label: "Success Stories" },
            { value: "4.9/5", label: "Patient Rating" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-serif text-[2.4rem] text-white">{stat.value}</span>
              <span className="text-[0.8rem] text-white/50 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
