import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import MarqueeStrip from "@/components/MarqueeStrip";
import FinalCTA from "@/components/FinalCTA";

const categories = [
  { 
    name: "Arthritis & Joint Pain", 
    desc: "Expert management of chronic joint inflammation through clinical Ayurveda.", 
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600" 
  },
  { 
    name: "Migraine", 
    desc: "Root-cause relief for chronic headaches through neural stabilization.", 
    img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600" 
  },
  { 
    name: "Stress & Anxiety", 
    desc: "Holistic mental wellness programs to restore nervous system balance.", 
    img: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=600" 
  },
  { 
    name: "Diabetes Support", 
    desc: "Metabolic management and complication prevention through clinical Ayurveda.", 
    img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600" 
  },
  { 
    name: "Skin Disorders", 
    desc: "Deep blood purification for psoriasis, eczema, and chronic acne.", 
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600" 
  },
  { 
    name: "Digestive Issues", 
    desc: "Restoring Agni to treat IBS, acid reflux, and chronic constipation.", 
    img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600" 
  },
  { 
    name: "Obesity Management", 
    desc: "Sustainable weight loss through metabolic correction protocols.", 
    img: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=600" 
  },
  { 
    name: "Sleep Disorders", 
    desc: "Natural therapy for insomnia to restore nightly vitality.", 
    img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600" 
  }
];

const faqs = [
  { 
    q: "Are Ayurvedic treatments safe along with my current medicines?", 
    a: "Yes, our doctors specialize in integrative care and will coordinate treatments that complement your existing medical protocols safely.",
    color: "bg-[#e6ede2]"
  },
  { 
    q: "How soon can I expect to see results?", 
    a: "While chronic conditions take time, most patients feel a significant shift in energy and symptom relief within the first 14-21 days of treatment.",
    color: "bg-[#fdfcf8]"
  },
  { 
    q: "Do you offer home-visit treatments?", 
    a: "Our primary clinical therapies like Panchakarma are done in our Malleshwaram facility for hygiene and clinical precision.",
    color: "bg-[#cddcc5]"
  }
];

export default function TreatmentsPage() {
  return (
    <main className="overflow-x-hidden pt-20 bg-[#fdfcf8]">
      <InnerHero
        tag="Clinical Ayurveda"
        title="Natural Healing for Modern Health Challenges"
        desc="From chronic pain to metabolic disorders, we combine ancient protocols with clinical precision to treat the root cause."
        img="https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=1600"
      />
      
      <MarqueeStrip />

      {/* Visual Treatment Categories Grid */}
      <section className="px-6 md:px-10 py-24 bg-white">
        <div className="max-w-[1360px] mx-auto">
          <div className="mb-16">
            <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">Treatment Categories</p>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#1c1f1a]">Healing Specializations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item) => (
              <div key={item.name} className="group relative rounded-3xl overflow-hidden aspect-[4/5] border border-black/5">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f1a] via-[#1c1f1a]/40 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-serif text-[1.4rem] text-white mb-3 leading-tight">{item.name}</h3>
                  <p className="text-[0.85rem] text-white/70 leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Colorful FAQ Section */}
      <section className="px-6 md:px-10 py-24 bg-[#1c1f1a]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-widest mb-6 text-left">Your Questions Answered</p>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white mb-10 text-left">Everything You Need to Know</h2>
              
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 hidden lg:block relative">
                <Image 
                  src="https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=800" 
                  alt="Healing Environment" 
                  fill
                  className="object-cover" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] ${faq.color} border border-black/5 hover:-translate-y-2 transition-all duration-500`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#5d8a4f] text-white flex items-center justify-center font-serif italic">?</div>
                    <h3 className="font-serif text-[1.4rem] text-[#1c1f1a] leading-tight">{faq.q}</h3>
                  </div>
                  <p className="text-[#555a50] leading-relaxed pl-12">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
