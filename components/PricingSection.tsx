"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const plans = [
  { name: "Starter", price: { monthly: 49, annual: 39 }, desc: "For those beginning their wellness journey.", features: ["1 session per month", "Initial health consultation", "Access to wellness resources", "Email support"], highlight: false, cta: "Get Started" },
  { name: "Wellness", price: { monthly: 129, annual: 99 }, desc: "Our most popular plan for dedicated practitioners.", features: ["4 sessions per month", "Personalized wellness plan", "Herbal remedy consultation", "Priority booking", "Monthly health check-in"], highlight: true, cta: "Start Wellness Plan" },
  { name: "Premium", price: { monthly: 249, annual: 199 }, desc: "Full-service care for maximum transformation.", features: ["Unlimited sessions", "Dedicated health coach", "Custom herbal formulas", "Home visit available", "24/7 support access", "Quarterly health reports"], highlight: false, cta: "Go Premium" },
];

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item: Variants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } } };

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [annual, setAnnual] = useState(false);
  return (
    <section ref={ref} className="px-6 md:px-10 py-20 md:py-28 bg-[#f4f7f2]">
      <div className="max-w-[1360px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-14">
          <p className="text-[0.78rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-3">Simple Pricing</p>
          <h2 className="font-serif text-[2.2rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.1] text-[#1c1f1a] max-w-[520px]">Transparent Plans for Every Wellness Goal</h2>
          <p className="text-[0.95rem] text-[#555a50] max-w-[440px] mt-4 leading-relaxed">Choose a plan that fits your commitment to health. All plans include a free 20-minute discovery call.</p>
          <div className="flex items-center gap-3 mt-8">
            <span className={`text-[0.875rem] font-medium ${!annual ? "text-[#1c1f1a]" : "text-[#999]"}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? "bg-[#5d8a4f]" : "bg-[#cddcc5]"}`}>
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${annual ? "translate-x-6" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-[0.875rem] font-medium ${annual ? "text-[#1c1f1a]" : "text-[#999]"}`}>
              Annual <span className="ml-1 text-[0.72rem] text-[#5d8a4f] font-semibold">Save 20%</span>
            </span>
          </div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={item}>
              <div className={`rounded-3xl p-8 h-full flex flex-col border transition-all duration-300 ${plan.highlight ? "bg-[#1c1f1a] border-[#1c1f1a] shadow-xl" : "bg-white border-[#cddcc5]/60 hover:border-[#a8c49c] hover:shadow-lg hover:shadow-[#5d8a4f]/8"}`}>
                <div className="mb-6">
                  <span className={`inline-flex px-3 py-1 rounded-full text-[0.72rem] font-medium mb-4 ${plan.highlight ? "bg-[#5d8a4f]/20 text-[#a8c49c]" : "bg-[#e6ede2] text-[#3a5731]"}`}>{plan.name}</span>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-serif text-[3rem] leading-none ${plan.highlight ? "text-white" : "text-[#1c1f1a]"}`}>${annual ? plan.price.annual : plan.price.monthly}</span>
                    <span className={`text-[0.875rem] mb-2 ${plan.highlight ? "text-white/50" : "text-[#999]"}`}>/mo</span>
                  </div>
                  <p className={`text-[0.875rem] leading-relaxed ${plan.highlight ? "text-white/60" : "text-[#666b61]"}`}>{plan.desc}</p>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${plan.highlight ? "bg-[#5d8a4f]/30" : "bg-[#e6ede2]"}`}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke={plan.highlight ? "#a8c49c" : "#5d8a4f"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <span className={`text-[0.875rem] ${plan.highlight ? "text-white/80" : "text-[#555a50]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us" className={`w-full py-3 rounded-full text-[0.9rem] font-medium text-center transition-all duration-300 ${plan.highlight ? "bg-[#5d8a4f] text-white hover:bg-[#496e3d]" : "bg-[#1c1f1a] text-white hover:bg-[#5d8a4f]"}`}>
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
