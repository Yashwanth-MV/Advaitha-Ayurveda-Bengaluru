"use client";
import { useState } from "react";

const testimonials = [
  {
    quote: "Significant improvement in my joint pain after just two weeks of treatments. The doctors are highly knowledgeable and caring.",
    author: "Rajesh K.",
    role: "Patient"
  },
  {
    quote: "The Panchakarma detox was life-changing. I feel rejuvenated and my skin issues have completely cleared up.",
    author: "Priya M.",
    role: "Wellness Enthusiast"
  }
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  return (
    <section className="px-6 py-20 bg-[#fdfcf8] text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-3xl font-serif italic text-[#1c1f1a] mb-8">
          &ldquo;{testimonials[index].quote}&rdquo;
        </p>
        <div className="font-medium text-[#5d8a4f]">{testimonials[index].author}</div>
        <div className="text-sm text-gray-500">{testimonials[index].role}</div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} className="p-2 border rounded-full">←</button>
          <button onClick={() => setIndex((index + 1) % testimonials.length)} className="p-2 border rounded-full">→</button>
        </div>
      </div>
    </section>
  );
}
