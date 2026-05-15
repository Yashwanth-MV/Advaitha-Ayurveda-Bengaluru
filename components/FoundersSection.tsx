import Image from "next/image";

const doctors = [
  {
    name: "Dr. Shravani P",
    qual: "BAMS, MD (Ayu)",
    desc: "A specialist in Ayurvedic Gynecology and Women's Wellness, Dr. Shravani has helped thousands of women regain their health through authentic clinical protocols.",
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600",
  },
  {
    name: "Dr. Varun S",
    qual: "BAMS, MD (Ayu)",
    desc: "An expert in Panchakarma therapies and Chronic Pain management, Dr. Varun focuses on deep detoxification to restore long-term metabolic health.",
    img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600",
  }
];

export default function FoundersSection() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#f4f7f2]">
      <div className="max-w-[1360px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">Meet Our Experts</p>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#1c1f1a]">The Hands Behind <br className="hidden md:block"/> Your Healing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {doctors.map((doc) => (
            <div key={doc.name} className="bg-white rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 items-center border border-black/5 shadow-sm">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <div>
                <h3 className="font-serif text-[1.5rem] text-[#1c1f1a] mb-1">{doc.name}</h3>
                <p className="text-[#5d8a4f] font-medium text-sm mb-4">{doc.qual}</p>
                <p className="text-[#555a50] text-[0.95rem] leading-relaxed">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
