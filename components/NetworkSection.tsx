import Image from "next/image";
import Link from "next/link";

const FEATURE_IMG = "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=900";

const features = [
  { title: "Holistic", desc: "Escape the stresses of modern life and find peace through our alternative healing methods." },
  { title: "Personalized", desc: "Unlock the hidden secrets of alternative medicine and experience a new level of vitality." },
  { title: "Mind-Body", desc: "Transform your health and wellbeing with our truly holistic natural approach to medicine." },
  { title: "Body Renewal", desc: "Rejuvenate your body and spirit with natural therapies that restore balance and wellbeing." },
];

export default function NetworkSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src={FEATURE_IMG}
              alt="Natural Medicine"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-2xl px-5 py-3 shadow-lg z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e6ede2] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2C9 2 5 5.5 5 9C5 11.2 6.8 13 9 13C11.2 13 13 11.2 13 9C13 5.5 9 2 9 2Z" fill="#5d8a4f"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.75rem] text-[#777d72]">Satisfaction Rate</p>
                  <p className="text-[1rem] font-semibold text-[#1c1f1a] font-serif">98%</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">Our Approach</p>
            <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] text-[#1c1f1a] mb-5">
              Natural Medicine Network
            </h2>
            <p className="text-[1rem] text-[#555a50] leading-relaxed mb-10">
              We focus on the connection between the mind and body and the power of alternative therapies to promote healing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {features.map((f) => (
                <div key={f.title}
                  className="p-5 rounded-2xl bg-[#f4f7f2] border border-[#cddcc5]/50 hover:border-[#a8c49c] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5d8a4f]" />
                    <h4 className="font-serif text-[1rem] font-semibold text-[#1c1f1a] group-hover:text-[#5d8a4f] transition-colors">{f.title}</h4>
                  </div>
                  <p className="text-[0.85rem] text-[#666b61] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <Link href="/about-us"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#5d8a4f] text-white text-[0.875rem] font-medium hover:bg-[#496e3d] transition-all duration-300"
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
