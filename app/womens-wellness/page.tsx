import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import MarqueeStrip from "@/components/MarqueeStrip";
import FinalCTA from "@/components/FinalCTA";

const categories = [
  { 
    name: "PCOS / PCOD", 
    desc: "Expert management of polycystic ovarian syndrome through metabolic correction.", 
    img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600" 
  },
  { 
    name: "Fertility Wellness", 
    desc: "Natural conception support through deep uterine cleansing and reproductive nourishment.", 
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600" 
  },
  { 
    name: "Menstrual Health", 
    desc: "Root-cause treatment for irregular cycles, painful menstruation, and PMS.", 
    img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600" 
  },
  { 
    name: "Pregnancy Support", 
    desc: "Nurturing Ayurvedic care to ensure a healthy pregnancy and optimal development.", 
    img: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=600" 
  },
  { 
    name: "Menopause Support", 
    desc: "Smoothing the transition through hormonal changes using natural stabilizers.", 
    img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600" 
  },
  { 
    name: "Postpartum Recovery", 
    desc: "Specialized recovery programs to restore mother's health and vitality after childbirth.", 
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600" 
  }
];

const faqs = [
  { 
    q: "Can Ayurveda help with irregular periods?", 
    a: "Yes, Ayurvedic protocols are exceptionally effective at identifying the Dosha imbalance causing menstrual irregularity and restoring the natural rhythm of your cycle.",
    color: "bg-[#e6ede2]"
  },
  { 
    q: "Is it safe to take Ayurvedic medicines during fertility treatments?", 
    a: "We specialize in integrated wellness. Our doctors coordinate with your fertility specialist to ensure our herbal support complements your medical journey safely.",
    color: "bg-[#fdfcf8]"
  },
  { 
    q: "How long is the postpartum recovery program?", 
    a: "Our traditional postpartum programs typically span 45-60 days, focusing on uterine recovery, energy restoration, and mental wellness.",
    color: "bg-[#cddcc5]"
  }
];

export default function WomensWellnessPage() {
  return (
    <main className="overflow-x-hidden pt-20 bg-[#fdfcf8]">
      <InnerHero
        tag="Sacred Wellness"
        title="Holistic Ayurvedic Care for Every Stage of Womanhood"
        desc="From puberty through motherhood and menopause, we nurture the feminine spirit through authentic clinical Ayurveda."
        img="https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=1600"
      />
      
      <MarqueeStrip />

      {/* Visual Specialization Grid */}
      <section className="px-6 md:px-10 py-24 bg-white">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">Our Specializations</p>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#1c1f1a]">Care Designed for You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item) => (
              <div key={item.name} className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f1a] via-[#1c1f1a]/40 to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="font-serif text-[1.6rem] text-white mb-4 leading-tight">{item.name}</h3>
                  <p className="text-[0.95rem] text-white/70 leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hormonal Balance Section */}
      <section className="px-6 md:px-10 py-24 bg-[#f4f7f2]">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden relative">
                <Image 
                  src="https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=1000" 
                  alt="Hormonal Balance" 
                  fill
                  className="object-cover" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-8 rounded-full shadow-2xl flex items-center justify-center text-center hidden md:flex z-10">
                <p className="font-serif italic text-[#3a5731] leading-tight">Authentic Women&apos;s Care</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-6">Educational Section</p>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-tight mb-8">Restoring Your Hormonal Harmony</h2>
              <p className="text-[1.1rem] text-[#555a50] leading-relaxed mb-10">
                In Ayurveda, a woman&apos;s health is closely tied to the balance of Apana Vata. Our programs focus on metabolic correction to ensure your hormonal cycles are vibrant sources of energy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#5d8a4f]" />
                  <p className="text-[1rem] font-medium text-[#1c1f1a]">Personalized Hormonal Analysis</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#5d8a4f]" />
                  <p className="text-[1rem] font-medium text-[#1c1f1a]">Customized Herbal Protocols</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Colorful FAQ Section (Matching Treatments) */}
      <section className="px-6 md:px-10 py-24 bg-[#1c1f1a]">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-widest mb-6 text-left">Healing Stories & Questions</p>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white mb-10 text-left">Nurturing Your Path</h2>
              
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 hidden lg:block relative">
                <Image 
                  src="https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=800" 
                  alt="Nurturing Care" 
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
