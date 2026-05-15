"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", service: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (val: string) => {
    const numericValue = val.replace(/[^0-9]/g, "");
    setForm({ ...form, phone: numericValue });
  };

  const validate = () => {
    let newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!form.name) { newErrors.name = "Full name is required"; isValid = false; }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) { newErrors.email = "Valid email is required"; isValid = false; }
    if (!form.phone || form.phone.length < 10) { newErrors.phone = "Valid phone number is required"; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "", service: "" });
    }, 1500);
  };

  return (
    <section ref={ref} id="contact-us" className="pt-32 pb-20 px-6 md:px-10 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-[0.78rem] font-bold text-[#5d8a4f] uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.08] text-[#1c1f1a] max-w-[600px] lg:mx-0 mx-auto">
            Begin Your Wellness Journey Today
          </h1>
          <p className="text-[1rem] text-[#555a50] max-w-[480px] mt-4 leading-relaxed lg:mx-0 mx-auto">
            Book a clinical consultation or send us a message. Our team typically responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16">
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-[#5d8a4f]/5 border border-[#cddcc5]/30 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  <div className="sm:col-span-2 md:col-span-1">
                    <label className="block text-[0.8rem] font-bold text-[#555a50] mb-2 uppercase tracking-tight">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      placeholder="Jessica Robinson"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-400' : 'border-[#cddcc5]'} bg-[#fdfcf8] text-[0.95rem] focus:outline-none focus:border-[#5d8a4f] transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-[0.7rem] mt-1 font-medium">{errors.name}</p>}
                  </div>

                  <div className="sm:col-span-2 md:col-span-1">
                    <label className="block text-[0.8rem] font-bold text-[#555a50] mb-2 uppercase tracking-tight">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      placeholder="jessica@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-400' : 'border-[#cddcc5]'} bg-[#fdfcf8] text-[0.95rem] focus:outline-none focus:border-[#5d8a4f] transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-[0.7rem] mt-1 font-medium">{errors.email}</p>}
                  </div>

                  <div className="sm:col-span-2 md:col-span-1">
                    <label className="block text-[0.8rem] font-bold text-[#555a50] mb-2 uppercase tracking-tight">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      placeholder="94823 68639"
                      value={form.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-400' : 'border-[#cddcc5]'} bg-[#fdfcf8] text-[0.95rem] focus:outline-none focus:border-[#5d8a4f] transition-all`}
                    />
                    {errors.phone && <p className="text-red-500 text-[0.7rem] mt-1 font-medium">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2 md:col-span-1">
                    <label className="block text-[0.8rem] font-bold text-[#555a50] mb-2 uppercase tracking-tight">Service Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#fdfcf8] border border-[#cddcc5] text-[0.95rem] text-[#1c1f1a] focus:outline-none focus:border-[#5d8a4f] transition-all appearance-none"
                    >
                      <option value="">Select a service…</option>
                      <option>Clinical Consultation</option>
                      <option>Panchakarma Detox</option>
                      <option>Women&apos;s Wellness</option>
                      <option>Pain Management</option>
                      <option>Metabolic Reset</option>
                      <option>Seasonal Immunity</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[0.8rem] font-bold text-[#555a50] mb-2 uppercase tracking-tight">Your Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your health goals..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#fdfcf8] border border-[#cddcc5] text-[0.95rem] focus:outline-none focus:border-[#5d8a4f] transition-all resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-12 py-5 rounded-full bg-[#1c1f1a] text-white text-[1rem] font-bold hover:bg-[#5d8a4f] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Begin Journey"}
                      {!isSubmitting && <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-[#f4f7f2] rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5d8a4f" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="font-serif text-[2.5rem] text-[#1c1f1a] mb-4">Message Received</h3>
                  <p className="text-[#555a50] mb-10 text-[1.1rem] leading-relaxed">Namaste! Thank you for reaching out to Advaitha Ayurveda. Dr. Shravani or Dr. Varun will review your inquiry and contact you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-10 py-4 rounded-full bg-[#1c1f1a] text-white font-bold hover:bg-[#5d8a4f] transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1C6.24 1 4 3.24 4 6C4 9.75 9 17 9 17C9 17 14 9.75 14 6C14 3.24 11.76 1 9 1ZM9 8C7.9 8 7 7.1 7 6C7 4.9 7.9 4 9 4C10.1 4 11 4.9 11 6C11 7.1 10.1 8 9 8Z" fill="#5d8a4f"/>
                  </svg>
                ),
                label: "Sanctuary Location",
                value: "Vitham Arc, 17/2, 4th Cross Road, Malleshwaram, Bengaluru, Karnataka 560003",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <path d="M16.5 12.5C15.5 12.5 14.5 12.3 13.6 12L13 11.8C12.5 11.6 11.9 11.8 11.6 12.2L10.7 13.4C8.6 12.3 6.7 10.4 5.6 8.3L6.8 7.4C7.2 7.1 7.4 6.5 7.2 6L7 5.4C6.7 4.5 6.5 3.5 6.5 2.5C6.5 1.9 6 1.5 5.5 1.5H2.5C1.9 1.5 1.5 2 1.5 2.5C1.5 10.2 7.8 16.5 15.5 16.5C16 16.5 16.5 16.1 16.5 15.5V12.5Z" fill="#5d8a4f"/>
                  </svg>
                ),
                label: "Direct Line",
                value: "+91 94823 68639",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <path d="M15 3H3C2.2 3 1.5 3.7 1.5 4.5V13.5C1.5 14.3 2.2 15 3 15H15C15.8 15 16.5 14.3 16.5 13.5V4.5C16.5 3.7 15.8 3 15 3ZM15 6L9 9.75L3 6V4.5L9 8.25L15 4.5V6Z" fill="#5d8a4f"/>
                  </svg>
                ),
                label: "Clinical Email",
                value: "ayuradvaitha@gmail.com",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7.5" stroke="#5d8a4f" strokeWidth="2"/>
                    <path d="M9 5V9.5L12 11" stroke="#5d8a4f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Consultation Hours",
                value: "Mon–Sun: 9am–8:30pm (Tue till 5pm)",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-5 p-6 rounded-3xl bg-white border border-[#cddcc5]/40 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f7f2] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[0.75rem] font-bold text-[#5d8a4f] uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-[0.95rem] font-medium text-[#1c1f1a] leading-tight">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
