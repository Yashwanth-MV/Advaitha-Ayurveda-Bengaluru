"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InnerHero from "@/components/InnerHero";
import FinalCTA from "@/components/FinalCTA";

const products = [
  {
    name: "Kshirabala Thailam",
    category: "Medicated Oil",
    desc: "A classical Ayurvedic oil used for centuries to treat neuromuscular disorders and strengthen the nervous system.",
    ingredients: "Bala (Sida cordifolia), Cow's Milk, Pure Sesame Oil.",
    benefits: "Deep relief for Sciatica, Spondylosis, and Neuropathic pain. Enhances joint mobility and sleep quality.",
    img: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg?width=600",
  },
  {
    name: "Kumkumadi Thailam",
    category: "Luxury Skin Care",
    desc: "The legendary 'Miraculous Elixir' for skin radiance and anti-aging, formulated with pure Himalayan Saffron.",
    ingredients: "Saffron (Kumkuma), Sandalwood, Manjistha, Dashamoola.",
    benefits: "Natural skin brightening, reduces dark circles, and reverses signs of aging. Restores youthful radiance.",
    img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600",
  },
  {
    name: "Dhanwantharam Oil",
    category: "Rejuvenation",
    desc: "The ultimate Vata-balancing oil, specifically formulated for post-natal care and overall physical strength.",
    ingredients: "Dashamoola, Balamoola, Ashwagandha, Sesame Oil.",
    benefits: "Excellent for muscle recovery, ligament injuries, and post-pregnancy rejuvenation. Strengthens bones and nerves.",
    img: "https://framerusercontent.com/images/6sB5MYe1GAAE9Cdken90ram6pc.jpg?width=600",
  },
  {
    name: "Murivenna",
    category: "Bone & Joint Care",
    desc: "A rapid-action healing oil for acute injuries, fractures, and chronic joint pain.",
    ingredients: "Onion, Aloe Vera, Erythrina, Coconut Oil base.",
    benefits: "Instant relief for sprains, sports injuries, and bone-related pain. Accelerates tissue healing and reduces inflammation.",
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600",
  },
  {
    name: "Triphala Churna",
    category: "Herbal Powder",
    desc: "The world-renowned Ayurvedic 'Three Fruits' formulation for systemic detoxification and digestive harmony.",
    ingredients: "Amalaki (Indian Gooseberry), Haritaki, Bibhitaki.",
    benefits: "Supports natural bowel movements, blood purification, and metabolic reset. Rich in Vitamin C and antioxidants.",
    img: "https://framerusercontent.com/images/BYcOt42mA4EER7HiupgRzsyHWo.jpg?width=600",
  },
  {
    name: "Anu Thailam",
    category: "Nasal Therapy",
    desc: "Specialized clinical nasal drops for treating ailments above the shoulders, specifically migraines and sinusitis.",
    ingredients: "Jivanti, Devadaru, Cinnamon, Sesame Oil base.",
    benefits: "Effective for chronic Sinusitis, Allergic Rhinitis, and Migraines. Enhances sensory clarity and prevents hair fall.",
    img: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=600",
  },
  {
    name: "Nalpamaradi Keram",
    category: "Skin Care",
    desc: "A premium skin-brightening oil that treats pigmentation and restores the natural glow of the skin.",
    ingredients: "Bark of 4 Ficus trees (Nalpamara), Turmeric, Manjistha, Coconut Oil.",
    benefits: "Natural skin brightening, treats sun tan, acne marks, and skin allergies. Ideal for pre-bridal skin prep.",
    img: "https://framerusercontent.com/images/6gwHFwgdizuritfaBQgR2tDWhk.jpg?width=600",
  },
  {
    name: "Bala Ashwagandhadi Oil",
    category: "Vitality & Strength",
    desc: "A powerful nourishing oil designed to improve muscle tone, body mass, and nervous system vigor.",
    ingredients: "Bala, Ashwagandha, Laksha, Medicated Sesame Oil.",
    benefits: "Excellent for healthy weight gain, muscle wasting, and chronic fatigue. Rejuvenates the entire body-mind system.",
    img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600",
  },
];

const testimonials = [
  { id: 1, name: "Anita S.", title: "Recovered from Chronic Sciatica", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg" },
  { id: 2, name: "Dr. Rahul K.", title: "Post-Surgical Recovery", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg" },
  { id: 3, name: "Meera Nair", title: "Natural Skin Transformation", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg" },
  { id: 4, name: "Suresh P.", title: "Improved Joint Mobility", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg" },
  { id: 5, name: "Priya V.", title: "PCOS Wellness Journey", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/6sB5MYe1GAAE9Cdken90ram6pc.jpg" },
  { id: 6, name: "Kiran J.", title: "Metabolic Health Reset", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg" }
];

export default function OurProducts() {
  const clinicalWhatsApp = "919482368639";
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePurchase = (productName: string) => {
    const message = `Namaste! I would like to purchase the ${productName}. Please share the payment and shipping details.`;
    window.open(`https://wa.me/${clinicalWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="overflow-x-hidden bg-[#fdfcf8] pt-20">
      <InnerHero
        tag="Clinical Pharmacy"
        title="Authentic Ayurvedic Products"
        desc="We provide premium, clinically-verified Ayurvedic oils and herbal formulations, sourced from the most respected traditional pharmacies."
        img="https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=1600"
      />

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-[#cddcc5]/30 hover:border-[#5d8a4f] transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="sm:w-1/2 aspect-square sm:aspect-auto overflow-hidden bg-[#f4f7f2] relative">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
                
                <div className="sm:w-1/2 p-8 md:p-10 flex flex-col">
                  <div className="mb-6">
                    <p className="text-[0.7rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-2">{product.category}</p>
                    <h3 className="font-serif text-[1.6rem] text-[#1c1f1a] mb-4 leading-tight">{product.name}</h3>
                    <p className="text-[0.9rem] text-[#555a50] leading-relaxed italic border-l-2 border-[#5d8a4f] pl-4">
                      {product.desc}
                    </p>
                  </div>
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <p className="text-[0.7rem] font-bold text-[#1c1f1a] uppercase tracking-tighter mb-1">Key Ingredients</p>
                      <p className="text-[0.8rem] text-[#555a50] leading-relaxed">{product.ingredients}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-bold text-[#1c1f1a] uppercase tracking-tighter mb-1">Clinical Benefits</p>
                      <p className="text-[0.8rem] text-[#555a50] leading-relaxed">{product.benefits}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handlePurchase(product.name)}
                    className="mt-10 w-full py-4 rounded-xl bg-[#1c1f1a] text-white text-[0.85rem] font-medium hover:bg-[#5d8a4f] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-center">
            <Image 
              src="https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=1600" 
              alt="Consultation" 
              fill
              className="object-cover grayscale" 
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#5d8a4f]/90" />
            <div className="relative z-10 p-12 md:p-20 text-white max-w-[800px]">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-tight mb-6">Need a Prescription?</h2>
              <p className="text-white/80 text-[1.1rem] leading-relaxed mb-10 max-w-[540px]">
                Many of our therapeutic formulations are best used under clinical guidance.
              </p>
              <a href="/book-consultation" className="inline-block px-10 py-4 rounded-full bg-white text-[#5d8a4f] font-medium hover:bg-[#f4f7f2] transition-all">
                Consult with Doctors
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="px-6 md:px-10 py-24 bg-[#1c1f1a] text-white">
        <div className="max-w-[1360px] mx-auto">
          <div className="mb-20 text-center">
            <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-widest mb-4">Success Stories</p>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem]">Product Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((test) => (
              <div 
                key={test.id} 
                onClick={() => setActiveVideo(test.videoUrl)}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-black/20 border border-white/5 cursor-pointer"
              >
                <Image 
                  src={test.poster} 
                  alt={test.name} 
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#5d8a4f] transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <h4 className="font-serif text-[1.4rem] mb-1">{test.name}</h4>
                  <p className="text-[0.85rem] text-white/60">{test.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-[1000px] aspect-video rounded-3xl overflow-hidden bg-black">
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                ✕
              </button>
              <video 
                src={activeVideo} 
                autoPlay 
                controls 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 -z-10" onClick={() => setActiveVideo(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      <FinalCTA />
    </main>
  );
}
