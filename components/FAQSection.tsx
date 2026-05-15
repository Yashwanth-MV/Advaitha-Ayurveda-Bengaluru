"use client";
import { useState } from "react";

const faqs = [
  { q: "What is Ayurvedic healing?", a: "Ayurveda is a 5,000-year-old system of natural healing that focuses on balancing the mind, body, and spirit through personalized diet, herbs, and therapies." },
  { q: "How many sessions are required for chronic pain?", a: "Most chronic conditions require 7 to 14 days of intensive therapy (Panchakarma) followed by 1-3 months of internal medication for lasting results." },
  { q: "Do I need to follow a strict diet?", a: "Ayurveda emphasizes 'Ahara' (diet) as medicine. Our doctors will provide a personalized diet plan based on your body type (Prakriti)." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">Common Questions</p>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-[#1c1f1a]">
            Everything You Need <br/> <span className="italic">to Know</span>
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/5 pb-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="font-serif text-[1.4rem] text-[#1c1f1a] group-hover:text-[#5d8a4f] transition-colors">{faq.q}</span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="text-[1rem] text-[#555a50] leading-relaxed pb-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
