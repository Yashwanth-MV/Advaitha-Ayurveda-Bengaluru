import Image from "next/image";
import Link from "next/link";

const BG_IMG = "https://framerusercontent.com/images/Pp7BCFuM0CfcYiIoBZtb8LbUf48.jpg?width=1600";

export default function FinalCTA() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto rounded-[3rem] overflow-hidden relative min-h-[550px] flex items-center justify-center text-center px-6">
        {/* Background Image - Optimized */}
        <Image 
          src={BG_IMG} 
          alt="Ayurveda Healing" 
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1360px"
        />
        
        {/* Dark Overly to ensure readability */}
        <div className="absolute inset-0 bg-[#1c1f1a]/60 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-[700px] mx-auto">
          <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-[0.2em] mb-6">Start Your Journey</p>
          <h2 className="font-serif text-[2.8rem] md:text-[4.2rem] text-white leading-[1.05] mb-10">
            Reclaim Your Health with <br className="hidden md:block"/> <span className="italic opacity-90">Authentic Ayurveda</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book-consultation"
              className="px-10 py-4 rounded-full bg-[#5d8a4f] text-white font-medium hover:bg-[#496e3d] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#5d8a4f]/30"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
