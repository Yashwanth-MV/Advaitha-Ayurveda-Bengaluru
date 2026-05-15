import Image from "next/image";
import Link from "next/link";

const BG = "https://framerusercontent.com/images/SsMhFzkA5mlXqEPGn4jQyUUtzw.jpg?width=1440";
const AVATARS = [
  "https://framerusercontent.com/images/KcfmSEilTwwKqgLv04ce3PipeWo.jpg?width=200",
  "https://framerusercontent.com/images/JeImIiYqmx3vRTtzC1NdZEQZs.jpg?width=200",
  "https://framerusercontent.com/images/W7UcCQcUtMZOXw3Kf4lIl5V7Rbk.jpg?width=200",
  "https://framerusercontent.com/images/dJNEZ1lEcOWtHbME0SkLrn9rwR8.jpg?width=200",
];

export default function CTABanner() {
  return (
    <section className="px-6 md:px-10 py-6 md:py-8">
      <div className="max-w-[1360px] mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden min-h-[420px] md:min-h-[500px] flex flex-col items-center justify-center text-center px-6 md:px-12 py-16">
          <Image
            src={BG}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1f1a]/60 via-[#1c1f1a]/50 to-[#1c1f1a]/70" />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-[680px]">
            <h2 className="font-serif text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] leading-[1.1] text-white font-normal">
              Natural Medicine Created With Care to Elevate Your Health, Energy, And Inner Harmony
            </h2>

            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <Link
                href="/book-consultation"
                className="px-6 py-3 rounded-full bg-[#5d8a4f] text-white text-[0.9rem] font-medium hover:bg-[#496e3d] transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>

            <div className="flex flex-col items-center gap-3 mt-2">
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="40px" />
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-[0.8rem]">The natural choice women continue to recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
