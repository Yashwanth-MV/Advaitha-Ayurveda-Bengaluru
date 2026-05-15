import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import MarqueeStrip from "@/components/MarqueeStrip";
import FinalCTA from "@/components/FinalCTA";

const therapies = [
  { name: "Abhyanga", desc: "Full-body clinical massage using medicated herbal oils to improve circulation and lymphatic drainage.", img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600" },
  { name: "Shirodhara", desc: "A continuous stream of warm oil on the forehead to stabilize the nervous system and treat insomnia.", img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600" },
  { name: "Virechana", desc: "Clinical purgation therapy to eliminate excess Pitta and toxins from the liver and gallbladder.", img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600" },
  { name: "Basti", desc: "Medicated enema therapy, the most powerful protocol for balancing Vata and treating joint pain.", img: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=600" },
  { name: "Nasya", desc: "Administration of herbal drops through the nose to cleanse the sinuses and improve mental clarity.", img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600" },
  { name: "Swedana", desc: "Herbal steam therapy to open the body's channels and facilitate the elimination of toxins.", img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600" }
];

const benefits = [
  "Systemic Detoxification",
  "Deep Stress Reduction",
  "Enhanced Immunity",
  "Optimized Digestion",
  "Superior Mental Clarity"
];

export default function PanchakarmaPage() {
  return (
    <main className="overflow-x-hidden pt-20 bg-[#fdfcf8]">
      <InnerHero
        tag="Clinical Detox"
        title="Deep Detoxification & Rejuvenation Through Panchakarma"
        desc="Reset your body's biological clock through the five sacred actions of Ayurvedic clinical detoxification."
        img="https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=1600"
      />
      
      <MarqueeStrip />

      {/* What is Panchakarma Section */}
      <section className="px-6 md:px-10 py-24 bg-white">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-6">Ancient Wisdom</p>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#1c1f1a] mb-8 leading-tight">What is Panchakarma?</h2>
              <p className="text-[1.1rem] text-[#555a50] leading-relaxed mb-8">
                Panchakarma is not just a massage; it is a five-fold clinical protocol designed to reach deep into the tissues and eliminate the accumulated toxins (Ama) that cause chronic disease. It is a biological reset for your entire system.
              </p>
              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit) => (
                  <span key={benefit} className="px-5 py-2.5 rounded-full bg-[#f4f7f2] border border-[#cddcc5]/50 text-[#3a5731] text-[0.85rem] font-medium">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative">
              <Image 
                src="https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=1000" 
                alt="Panchakarma Experience" 
                fill
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Cards Section */}
      <section className="px-6 md:px-10 py-24 bg-[#f4f7f2]">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#1c1f1a] mb-6">Our Core Therapies</h2>
            <p className="text-[#555a50]">Authentic clinical protocols performed by expert therapists under medical supervision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((item) => (
              <div key={item.name} className="group bg-white rounded-3xl overflow-hidden border border-[#cddcc5]/30 hover:border-[#5d8a4f] transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-[1.5rem] text-[#1c1f1a] mb-3">{item.name}</h3>
                  <p className="text-[0.9rem] text-[#555a50] leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest">
                    Medical Grade Therapy
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 md:px-10 py-24 bg-[#1c1f1a] text-white">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-[2.5rem] text-[#a8c49c]">Your Detox Journey</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-12 left-0 right-0 h-[1px] bg-white/10 hidden md:block" />
            
            <div className="relative pt-12">
              <div className="w-12 h-12 rounded-full bg-[#5d8a4f] text-white flex items-center justify-center font-serif italic text-xl absolute -top-6 left-0 border-4 border-[#1c1f1a]">01</div>
              <h4 className="font-serif text-[1.3rem] mb-4">Purvakarma</h4>
              <p className="text-white/40 text-[0.9rem] leading-relaxed">Preparation phase involving internal and external oleation to loosen toxins from tissues.</p>
            </div>
            
            <div className="relative pt-12">
              <div className="w-12 h-12 rounded-full bg-[#5d8a4f] text-white flex items-center justify-center font-serif italic text-xl absolute -top-6 left-0 border-4 border-[#1c1f1a]">02</div>
              <h4 className="font-serif text-[1.3rem] mb-4">Pradhanakarma</h4>
              <p className="text-white/40 text-[0.9rem] leading-relaxed">The main clinical actions (Virechana, Basti, etc.) that eliminate the toxins from the body.</p>
            </div>
            
            <div className="relative pt-12">
              <div className="w-12 h-12 rounded-full bg-[#5d8a4f] text-white flex items-center justify-center font-serif italic text-xl absolute -top-6 left-0 border-4 border-[#1c1f1a]">03</div>
              <h4 className="font-serif text-[1.3rem] mb-4">Paschatkarma</h4>
              <p className="text-white/40 text-[0.9rem] leading-relaxed">Rejuvenation and dietary protocols to rebuild strength and lock in the healing benefits.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
