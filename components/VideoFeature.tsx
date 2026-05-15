import Image from "next/image";

const ESSENCE_BG = "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=2000";

export default function VideoFeature() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#1c1f1a]">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ESSENCE_BG}
          alt="The Essence of Ayurveda"
          fill
          className="object-cover opacity-70"
          sizes="100vw"
        />
        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f1a] via-[#1c1f1a]/20 to-[#1c1f1a]/80" />
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-widest mb-6">The Essence of Ayurveda</p>
          <h2 className="font-serif text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1] text-white mb-8">
            Nature&apos;s Flow <br/> <span className="italic">is Your Healing</span>
          </h2>
          <div className="w-20 h-px bg-white/30 mx-auto mb-8" />
          <p className="text-[1.1rem] text-white/70 max-w-[500px] mx-auto leading-relaxed">
            We source our medicated oils and herbs from the purest natural reserves, ensuring every drop carries the life-force of ancient wisdom.
          </p>
        </div>
      </div>
    </section>
  );
}
