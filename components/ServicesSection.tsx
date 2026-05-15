import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Panchakarma", desc: "Deep clinical detoxification and rejuvenation therapies to restore metabolic balance.", img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=800", tag: "Detox" },
  { title: "Women's Wellness", desc: "Holistic Ayurvedic care for every stage of womanhood, from PCOS to Menopause support.", img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=800", tag: "Wellness" },
  { title: "Chronic Care", desc: "Expert management of arthritis, migraine, diabetes, and other long-term health challenges.", img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=800", tag: "Clinical" },
];

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28 bg-[#f4f7f2]">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[0.78rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-serif text-[2.2rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.1] text-[#1c1f1a] max-w-[500px]">How We Can Help You</h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-[0.95rem] text-[#555a50] max-w-[380px] md:text-right leading-relaxed">Discover the benefits of authentic Ayurvedic therapies, personalized to treat the root cause and restore holistic wellness.</p>
            <Link href="/treatments" className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-[#5d8a4f] hover:gap-3 transition-all duration-300 group">
              View All Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title}>
              <Link href="/treatments" className="group block">
                <div className="rounded-2xl overflow-hidden bg-white border border-[#cddcc5]/50 hover:border-[#a8c49c] transition-all duration-300 hover:shadow-lg hover:shadow-[#5d8a4f]/10">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex px-3 py-1 rounded-full bg-[#e6ede2] text-[#3a5731] text-[0.72rem] font-medium mb-3">{service.tag}</span>
                    <h3 className="font-serif text-[1.3rem] font-semibold text-[#1c1f1a] mb-2 group-hover:text-[#5d8a4f] transition-colors">{service.title}</h3>
                    <p className="text-[0.875rem] text-[#666b61] leading-relaxed">{service.desc}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-[0.8rem] font-medium text-[#5d8a4f]">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
