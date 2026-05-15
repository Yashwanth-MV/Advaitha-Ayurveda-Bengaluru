"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InnerHero from "@/components/InnerHero";
import FinalCTA from "@/components/FinalCTA";

const videos = [
  { id: 1, title: "Understanding Your Dosha", category: "Fundamentals", desc: "A clinical guide to identifying your Vata, Pitta, or Kapha constitution.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg" },
  { id: 2, title: "The Science of Panchakarma", category: "Clinical Protocols", desc: "How deep clinical detoxification resets your cellular metabolism.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg" },
  { id: 3, title: "Hormonal Health for Women", category: "Women's Wellness", desc: "Ayurvedic perspectives on PCOS, thyroid, and cycle stabilization.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg" },
  { id: 4, title: "Metabolic Fire (Agni)", category: "Digestive Health", desc: "Restoring your digestive strength to prevent toxin accumulation.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/6sB5MYe1GAAE9Cdken90ram6pc.jpg" },
  { id: 5, title: "Monsoon Immunity", category: "Seasonal Wellness", desc: "Traditional protocols to stay healthy during the high-humidity season.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg" },
  { id: 6, title: "The Ayurvedic Pharmacy", category: "Natural Healing", desc: "How traditional medicated oils are prepared and used.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg" },
  { id: 7, title: "Stress & Anxiety Relief", category: "Nervous System", desc: "Clinical nervous system calming through traditional Vata-balancing.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg" },
  { id: 8, title: "Joint Mobility Science", category: "Bone & Joint", desc: "Managing joint health and mobility through deep oil nourishment.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg" },
  { id: 9, title: "Skin Radiance Rituals", category: "Natural Beauty", desc: "Achieving internal and external glow through Ayurvedic detox.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg" },
  { id: 10, title: "Sleep Hygiene Protocol", category: "Life Rhythms", desc: "Restoring your circadian rhythm for deep, restorative rest.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/6sB5MYe1GAAE9Cdken90ram6pc.jpg" },
  { id: 11, title: "Healthy Weight Management", category: "Metabolism", desc: "Balancing metabolic fire for sustainable weight transformation.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg" },
  { id: 12, title: "Simple Daily Cleansing", category: "Self Care", desc: "Essential daily rituals (Dinacharya) to keep toxins at bay.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg" }
];

export default function KnowledgeCenter() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", question: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const handlePhoneChange = (val: string) => {
    const numericValue = val.replace(/[^0-9]/g, "");
    setForm({ ...form, phone: numericValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", phone: "" };
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    
    if (newErrors.name || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    setTimeout(() => {
      setIsSuccess(true);
      setForm({ name: "", phone: "", question: "" });
      setErrors({ name: "", phone: "" });
    }, 800);
  };

  return (
    <main className="overflow-x-hidden bg-[#fdfcf8] pt-20">
      <InnerHero
        tag="Clinical Learning"
        title="Knowledge Center"
        desc="Dr. Shravani and Dr. Varun share authentic Ayurvedic wisdom through our clinical learning series."
        img="https://framerusercontent.com/images/Pp7BCFuM0CfcYiIoBZtb8LbUf48.jpg?width=1600"
      />

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {videos.map((vid) => (
              <motion.div 
                key={vid.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveVideo(vid.videoUrl)}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-[#f4f7f2] relative mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img src={vid.poster} alt={vid.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-[#5d8a4f] transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                
                <p className="text-[0.7rem] font-bold text-[#5d8a4f] uppercase tracking-widest mb-2">{vid.category}</p>
                <h3 className="font-serif text-[1.6rem] text-[#1c1f1a] mb-3 leading-tight">{vid.title}</h3>
                <p className="text-[0.9rem] text-[#555a50] leading-relaxed">{vid.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-[#555a50] mb-8 italic">Want to learn more about a specific health condition?</p>
            <button 
              onClick={() => { setIsInquiryModalOpen(true); setIsSuccess(false); }}
              className="inline-flex px-12 py-5 rounded-full bg-[#1c1f1a] text-white font-medium hover:bg-[#5d8a4f] transition-all shadow-xl"
            >
              Ask Our Doctors
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-[1000px] aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl">
              <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">✕</button>
              <video src={activeVideo} autoPlay controls className="w-full h-full object-contain" />
            </div>
            <div className="absolute inset-0 -z-10" onClick={() => setActiveVideo(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isInquiryModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#1c1f1a]/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-[2.5rem] w-full max-w-[500px] overflow-hidden shadow-2xl relative"
            >
              <button onClick={() => setIsInquiryModalOpen(false)} className="absolute top-8 right-8 text-[#1c1f1a]/40 hover:text-[#1c1f1a]">✕</button>
              
              <div className="p-10 md:p-12">
                {!isSuccess ? (
                  <>
                    <p className="text-[0.7rem] font-bold text-[#5d8a4f] uppercase tracking-widest mb-2">Doctor Inquiry</p>
                    <h3 className="font-serif text-[2.2rem] text-[#1c1f1a] mb-8 leading-tight">Ask Our Experts</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-[0.8rem] font-medium text-[#555a50] mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" placeholder="John Doe" 
                          className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-400' : 'border-[#cddcc5]'} focus:outline-none focus:border-[#5d8a4f] transition-all`}
                          value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.8rem] font-medium text-[#555a50] mb-2">Phone Number <span className="text-red-500">*</span></label>
                        <input 
                          type="tel" placeholder="94823 68639" 
                          className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-400' : 'border-[#cddcc5]'} focus:outline-none focus:border-[#5d8a4f] transition-all`}
                          value={form.phone} onChange={(e) => handlePhoneChange(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.8rem] font-medium text-[#555a50] mb-2">Your Question</label>
                        <textarea 
                          placeholder="Tell us about your health concern..." 
                          className="w-full px-5 py-4 rounded-xl border border-[#cddcc5] focus:outline-none focus:border-[#5d8a4f] transition-all h-24 resize-none"
                          value={form.question} onChange={(e) => setForm({...form, question: e.target.value})}
                        />
                      </div>
                      <button type="submit" className="w-full py-5 rounded-xl bg-[#1c1f1a] text-white font-medium hover:bg-[#5d8a4f] transition-all shadow-xl">
                        Submit Question
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-20 h-20 bg-[#f4f7f2] rounded-full flex items-center justify-center mx-auto mb-8">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5d8a4f" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="font-serif text-[2.2rem] text-[#1c1f1a] mb-4">Question Logged!</h3>
                    <p className="text-[#555a50] mb-10 leading-relaxed">Namaste! Your question has been sent to our doctors. We will reach out to you shortly with clinical insights.</p>
                    <button onClick={() => setIsInquiryModalOpen(false)} className="w-full py-4 rounded-xl bg-[#1c1f1a] text-white font-medium hover:bg-[#5d8a4f] transition-all">
                      Close
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FinalCTA />
    </main>
  );
}
