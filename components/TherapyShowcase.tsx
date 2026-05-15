import Image from "next/image";
import Link from "next/link";

const therapies = [
  {
    title: "Shirodhara",
    desc: "A continuous stream of warm medicated oil poured on the forehead to calm the nervous system.",
    img: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg?width=800",
  },
  {
    title: "Abhyanga",
    desc: "Traditional full-body massage with medicated oils to improve circulation and detoxify.",
    img: "https://framerusercontent.com/images/6sB5MYe1GAAE9Cdken90ram6pc.jpg?width=800",
  },
  {
    title: "Pizhichil",
    desc: "A combination of oil massage and heat treatment to rejuvenate muscles and joints.",
    img: "https://framerusercontent.com/images/BYcOt42mA4EER7HiupgRzsyHWo.jpg?width=800",
  },
];

export default function TherapyShowcase() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-[600px]">
            <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">Core Therapies</p>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-[#1c1f1a]">
              Traditional Healing <br/>for Modern Challenges
            </h2>
          </div>
          <Link href="/treatments" className="text-[1rem] font-medium text-[#1c1f1a] underline underline-offset-8 decoration-[#5d8a4f]/30 hover:decoration-[#5d8a4f] transition-all">
            View all treatments
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {therapies.map((therapy) => (
            <div key={therapy.title} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <Image
                  src={therapy.img}
                  alt={therapy.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-[1.5rem] text-[#1c1f1a] mb-2">{therapy.title}</h3>
              <p className="text-[0.95rem] text-[#555a50] leading-relaxed">{therapy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
