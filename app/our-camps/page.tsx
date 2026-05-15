"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InnerHero from "@/components/InnerHero";

const camps = [
  {
    title: "Seasonal Detox Camp",
    date: "June 15 - June 30",
    time: "08:00 AM - 06:00 PM",
    venue: "Malleshwaram Clinic",
    desc: "A comprehensive 15-day Panchakarma based detox program to reset your metabolic health for the monsoon.",
    idealFor: "Post-covid recovery, chronic fatigue, metabolic reset",
    includes: ["Personalized Panchakarma", "Daily Doctor Monitoring", "Detox Diet Meals"],
    img: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg?width=800",
  },
  {
    title: "Women's Wellness Intensive",
    date: "July 10 - July 15",
    time: "10:00 AM - 04:00 PM",
    venue: "Malleshwaram Clinic",
    desc: "Specialized clinical sessions focusing on hormonal balance, skin health, and stress management.",
    idealFor: "PCOS, irregular cycles, pre-menopausal support",
    includes: ["Hormonal Profiling", "Customized Herbal Plan", "Yoga for Hormonal Balance"],
    img: "https://framerusercontent.com/images/6sB5MYe1GAAE9Cdken90ram6pc.jpg?width=800",
  },
  {
    title: "Metabolic Reset Weekend",
    date: "August 05 - August 07",
    time: "07:00 AM - 09:00 AM",
    venue: "Online & Malleshwaram",
    desc: "A high-impact 3-day intensive program focusing on weight management, insulin sensitivity, and digestive fire correction.",
    idealFor: "Pre-diabetes, obesity, lifestyle correction",
    includes: ["Metabolic Assessment", "Blood Sugar Management", "21-Day Post-Camp Support"],
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=800",
  },
  {
    title: "Senior Vitality Program",
    date: "August 20 - August 30",
    time: "09:00 AM - 01:00 PM",
    venue: "Malleshwaram Clinic",
    desc: "Dedicated clinical care for geriatric wellness, focusing on joint mobility, bone density, and memory support.",
    idealFor: "Arthritis, age-related weakness, cognitive health",
    includes: ["Joint Rejuvenation Therapies", "Memory Boost Protocols", "Senior-Friendly Diet Support"],
    img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=800",
  },
];

export default function OurCamps() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const handleRegisterClick = (title: string) => {
    setSelectedCamp(title);
    setIsModalOpen(true);
    setIsSuccess(false);
  };

  const handlePhoneChange = (val: string) => {
    const numericValue = val.replace(/[^0-9]/g, "");
    setForm({ ...form, phone: numericValue });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Join me for ${selectedCamp} at Advaitha Ayurveda`,
        text: `I'm interested in this clinical wellness camp! Check it out:`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard! Share it with your friends.");
    }
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
      setForm({ name: "", phone: "", email: "" });
      setErrors({ name: "", phone: "" });
    }, 800);
  };

  return (
    <main className="overflow-x-hidden bg-[#fdfcf8] pt-20">
      <InnerHero
        tag="Clinical Outreach"
        title="Our Wellness Camps"
        desc="Join our intensive clinical programs designed to address specific health challenges through structured Ayurvedic protocols."
        img="https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=1600"
      />

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-40">
            {camps.map((camp, i) => (
              <motion.div
                key={camp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-start gap-16 lg:gap-24`}
              >
                <div className="w-full lg:w-[42%] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl lg:sticky lg:top-32 group relative">
                  <Image
                    src={camp.img}
                    alt={camp.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
                <div className="w-full lg:w-[58%]">
                  {/* High-Fidelity Logistics Bar */}
                  <div className="flex flex-wrap items-center gap-y-4 gap-x-8 mb-10 pb-8 border-b border-[#cddcc5]/40">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#f4f7f2] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5d8a4f" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      </div>
                      <p className="text-[0.75rem] font-bold text-[#1c1f1a] uppercase tracking-widest">{camp.date}</p>
                    </div>
                    <div className="flex items-center gap-3 border-l border-[#cddcc5]/40 pl-8">
                      <div className="w-8 h-8 rounded-full bg-[#f4f7f2] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5d8a4f" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </div>
                      <p className="text-[0.75rem] font-medium text-[#555a50] uppercase tracking-widest">{camp.time}</p>
                    </div>
                    <div className="flex items-center gap-3 border-l border-[#cddcc5]/40 pl-8">
                      <div className="w-8 h-8 rounded-full bg-[#f4f7f2] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5d8a4f" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <p className="text-[0.75rem] font-medium text-[#555a50] uppercase tracking-widest">{camp.venue}</p>
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-[2.8rem] md:text-[4rem] text-[#1c1f1a] mb-8 leading-[1.1]">{camp.title}</h2>
                  <p className="text-[1.2rem] text-[#555a50] leading-relaxed mb-12 max-w-[640px] font-light">{camp.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14 bg-[#f4f7f2]/40 p-10 rounded-[2.5rem] border border-[#cddcc5]/20">
                    <div>
                      <h4 className="text-[0.75rem] font-black text-[#1c1f1a] uppercase tracking-widest mb-6">What&apos;s Included</h4>
                      <ul className="space-y-4">
                        {camp.includes.map(item => (
                          <li key={item} className="flex items-center gap-4 text-[0.95rem] text-[#555a50]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#5d8a4f]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[0.75rem] font-black text-[#1c1f1a] uppercase tracking-widest mb-6">Ideal For</h4>
                      <p className="text-[0.95rem] text-[#555a50] leading-relaxed font-medium">
                        {camp.idealFor}
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleRegisterClick(camp.title)}
                    className="inline-flex px-12 py-5 rounded-full bg-[#1c1f1a] text-white text-[1rem] font-medium hover:bg-[#5d8a4f] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    Register Interest
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#1c1f1a]/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[3rem] w-full max-w-[540px] overflow-hidden shadow-2xl relative"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 w-10 h-10 rounded-full bg-[#f4f7f2] flex items-center justify-center text-[#1c1f1a]/60 hover:text-[#1c1f1a] transition-colors">✕</button>
              
              <div className="p-12 md:p-16">
                {!isSuccess ? (
                  <>
                    <p className="text-[0.7rem] font-black text-[#5d8a4f] uppercase tracking-widest mb-3">Event Registration</p>
                    <h3 className="font-serif text-[2.2rem] text-[#1c1f1a] mb-10 leading-tight">{selectedCamp}</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-[0.8rem] font-bold text-[#1c1f1a] uppercase tracking-tighter mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" placeholder="John Doe" 
                          className={`w-full px-6 py-4 rounded-2xl border ${errors.name ? 'border-red-400' : 'border-[#cddcc5]'} focus:outline-none focus:border-[#5d8a4f] transition-all bg-[#fdfcf8] text-[1rem]`}
                          value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.8rem] font-bold text-[#1c1f1a] uppercase tracking-tighter mb-2">Phone Number <span className="text-red-500">*</span></label>
                        <input 
                          type="tel" placeholder="94823 68639" 
                          className={`w-full px-6 py-4 rounded-2xl border ${errors.phone ? 'border-red-400' : 'border-[#cddcc5]'} focus:outline-none focus:border-[#5d8a4f] transition-all bg-[#fdfcf8] text-[1rem]`}
                          value={form.phone} onChange={(e) => handlePhoneChange(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="w-full py-5 rounded-2xl bg-[#1c1f1a] text-white font-bold text-[1.1rem] hover:bg-[#5d8a4f] transition-all shadow-2xl mt-4">
                        Secure My Spot
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-24 h-24 bg-[#f4f7f2] rounded-full flex items-center justify-center mx-auto mb-10">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5d8a4f" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="font-serif text-[2.5rem] text-[#1c1f1a] mb-6">Confirmed!</h3>
                    <p className="text-[#555a50] text-[1.1rem] mb-12 leading-relaxed">Namaste! Your interest has been logged. Our clinical team will contact you shortly to finalize your participation.</p>
                    
                    <div className="flex flex-col gap-4">
                      <button onClick={handleShare} className="w-full py-5 rounded-2xl bg-[#5d8a4f] text-white font-bold hover:bg-[#496e3d] transition-all flex items-center justify-center gap-3 shadow-xl">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                        Share Event
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
