"use client";
import { useState } from "react";
import InnerHero from "@/components/InnerHero";

export default function BookConsultation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="overflow-x-hidden bg-[#fdfcf8]">
            <InnerHero
        tag="Consultation"
        title="Begin Your Healing Journey"
        desc="Schedule a personalized session with our expert doctors to identify your body type and create a root-cause treatment plan."
        img="https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=1600"
      />

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form Side */}
            <div className="lg:col-span-7">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#1c1f1a]">Full Name</label>
                      <input type="text" required className="px-4 py-3 rounded-xl border border-black/10 focus:border-[#5d8a4f] outline-none transition-all bg-white" placeholder="Jane Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#1c1f1a]">Phone Number</label>
                      <input type="tel" required className="px-4 py-3 rounded-xl border border-black/10 focus:border-[#5d8a4f] outline-none transition-all bg-white" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#1c1f1a]">Email Address</label>
                    <input type="email" required className="px-4 py-3 rounded-xl border border-black/10 focus:border-[#5d8a4f] outline-none transition-all bg-white" placeholder="jane@example.com" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#1c1f1a]">Health Concern</label>
                    <textarea required rows={4} className="px-4 py-3 rounded-xl border border-black/10 focus:border-[#5d8a4f] outline-none transition-all bg-white resize-none" placeholder="Briefly describe your health goals or concerns..." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#1c1f1a]">Preferred Date</label>
                      <input type="date" required className="px-4 py-3 rounded-xl border border-black/10 focus:border-[#5d8a4f] outline-none transition-all bg-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-[#1c1f1a]">Consultation Type</label>
                      <select required className="px-4 py-3 rounded-xl border border-black/10 focus:border-[#5d8a4f] outline-none transition-all bg-white">
                        <option value="">Select Type</option>
                        <option value="in-clinic">In-Clinic (Malleshwaram)</option>
                        <option value="online">Online Consultation</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-full bg-[#5d8a4f] text-white font-medium hover:bg-[#496e3d] transition-all shadow-xl shadow-[#5d8a4f]/20">
                    Submit Booking Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-20 bg-[#f4f7f2] rounded-[3rem]">
                  <div className="w-16 h-16 bg-[#5d8a4f] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-[2rem] text-[#1c1f1a] mb-4">Request Received</h2>
                  <p className="text-[#555a50] max-w-[400px] mx-auto">
                    Our clinical coordinator will contact you within 24 hours to confirm your appointment time.
                  </p>
                </div>
              )}
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-serif text-[1.5rem] mb-6">The Process</h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Fill the Form", desc: "Provide your basic health details and preferred timing." },
                    { step: "02", title: "Doctor Review", desc: "Our specialists review your case before the session." },
                    { step: "03", title: "Personalized Consultation", desc: "A deep-dive session to identify root causes and Prakriti." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-[#5d8a4f] font-serif font-bold">{item.step}</span>
                      <div>
                        <p className="font-medium text-[#1c1f1a]">{item.title}</p>
                        <p className="text-sm text-[#555a50]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#1c1f1a] text-white">
                <h4 className="font-serif text-xl mb-4">Emergency Contact</h4>
                <p className="text-white/70 text-sm mb-6">For immediate clinical assistance, please call our 24/7 help desk.</p>
                <p className="text-2xl font-bold">+91 80 4123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
          </main>
  );
}
