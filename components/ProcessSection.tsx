"use client";

const steps = [
  {
    num: "01",
    title: "Detailed Consultation",
    desc: "A deep dive into your constitution (Prakriti), pulse diagnosis, and lifestyle analysis with our expert doctors.",
    img: "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600"
  },
  {
    num: "02",
    title: "Personalized Treatment",
    desc: "Authentic clinical therapies and Panchakarma protocols tailored specifically to your body's unique requirements.",
    img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600"
  },
  {
    num: "03",
    title: "Long-term Wellness",
    desc: "Continued support through dietary guidance, lifestyle modifications, and follow-up care for lasting vitality.",
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600"
  }
];

export default function ProcessSection() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4">The Journey</p>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#1c1f1a]">A Path to Wholeness</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col group">
              {/* Image Container */}
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-10 border border-black/5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              {/* Content */}
              <div className="px-4">
                <span className="text-[3rem] font-serif italic text-[#cddcc5] leading-none mb-4 block">
                  {step.num}
                </span>
                <h3 className="font-serif text-[1.6rem] text-[#1c1f1a] mb-4">{step.title}</h3>
                <p className="text-[#555a50] leading-relaxed text-[0.95rem]">
                  {step.desc}
                </p>
              </div>

              {/* Connecting line for desktop */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-[1px] bg-[#cddcc5]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
