import Image from "next/image";

export default function FounderPhilosophy() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#f4f7f2]">
      <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <Image
              src="https://framerusercontent.com/images/Pp7BCFuM0CfcYiIoBZtb8LbUf48.jpg?width=1000"
              alt="Clinical Philosophy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f1a]/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-medium text-lg">Dr. Shravani P</p>
              <p className="text-white/70 text-sm">Specialist in Ayurvedic Gynecology</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div>
            <span className="text-[3rem] font-serif text-[#5d8a4f] leading-none block mb-4">“</span>
            <h2 className="font-serif text-[2rem] md:text-[2.8rem] leading-[1.2] text-[#1c1f1a] mb-8">
              We don&apos;t just treat symptoms; we restore the delicate balance between your body, mind, and spirit.
            </h2>
            <p className="text-[1rem] text-[#555a50] leading-relaxed mb-10">
              Our clinical approach combines strict adherence to classical Ayurvedic texts with a compassionate understanding of modern lifestyle stressors. We believe every patient is unique, and so is their path to wellness.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#5d8a4f]/30" />
              <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest">Our Clinical Vow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
