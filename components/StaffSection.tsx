import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const staff = [
  { name: "Dr. Clara Whitfield", role: "Acupuncture Specialist", img: "https://framerusercontent.com/images/KcfmSEilTwwKqgLv04ce3PipeWo.jpg?width=600", specialty: "Energy Flow" },
  { name: "Dr. James Ellington", role: "Naturopathic Doctor", img: "https://framerusercontent.com/images/JeImIiYqmx3vRTtzC1NdZEQZs.jpg?width=600", specialty: "Herbal Medicine" },
  { name: "Dr. Priya Sharma", role: "Holistic Nutritionist", img: "https://framerusercontent.com/images/W7UcCQcUtMZOXw3Kf4lIl5V7Rbk.jpg?width=600", specialty: "Nutrition & Diet" },
  { name: "Dr. Leah Marlowe", role: "Massage Therapist", img: "https://framerusercontent.com/images/dJNEZ1lEcOWtHbME0SkLrn9rwR8.jpg?width=600", specialty: "Body Therapy" },
];

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } } };

export default function StaffSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="px-6 md:px-10 py-20 md:py-28 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[0.78rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-3">Our Experts</p>
            <h2 className="font-serif text-[2.2rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.1] text-[#1c1f1a]">Meet Our Dedicated Staff</h2>
            <p className="text-[0.95rem] text-[#555a50] max-w-[420px] mt-3 leading-relaxed">Our team of certified practitioners is here to guide your journey to natural wellness.</p>
          </div>
          <Link href="/our-staff" className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-[#5d8a4f] hover:gap-3 transition-all duration-300 group self-start md:self-auto">
            View All Staff
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {staff.map((member) => (
            <motion.div key={member.name} variants={item}>
              <Link href="/our-staff" className="group block">
                <div className="rounded-2xl overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl relative">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="pt-4 pb-1">
                    <span className="inline-flex px-3 py-1 rounded-full bg-[#e6ede2] text-[#3a5731] text-[0.7rem] font-medium mb-2">{member.specialty}</span>
                    <h3 className="font-serif text-[1rem] md:text-[1.1rem] font-semibold text-[#1c1f1a] group-hover:text-[#5d8a4f] transition-colors leading-snug">{member.name}</h3>
                    <p className="text-[0.8rem] text-[#777d72] mt-0.5">{member.role}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
