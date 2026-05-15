const items = [
  "Authentic Ayurveda",
  "Panchakarma Detox",
  "Chronic Pain Relief",
  "Women's Wellness",
  "Mental Vitality",
  "Natural Healing",
  "Holistic Health",
  "Metabolic Balance",
];

export default function MarqueeStrip({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items, ...items]; // Triple for smoother loop
  return (
    <div className="overflow-hidden py-5 border-y border-[#cddcc5]/50 bg-[#f4f7f2]">
      <div className="relative flex">
        <div className={`flex gap-12 whitespace-nowrap ${reverse ? "ticker-rev" : "ticker-fwd"}`}>
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-serif text-[1.2rem] text-[#3a5731] italic tracking-wide">{item}</span>
              <div className="w-2 h-2 rounded-full bg-[#a8c49c] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
