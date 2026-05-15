import Image from "next/image";

interface InnerHeroProps {
  tag: string;
  title: string;
  desc: string;
  img: string;
}

export default function InnerHero({ tag, title, desc, img }: InnerHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex flex-col justify-end overflow-hidden bg-[#1c1f1a]">
      {/* Background Image - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f1a] via-[#1c1f1a]/40 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-10 pb-16 md:pb-24 max-w-[1360px] mx-auto w-full">
        <div className="max-w-[700px]">
          <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-widest mb-4">
            {tag}
          </p>
          <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.05] text-white mb-6">
            {title}
          </h1>
          <p className="text-[1.1rem] text-white/70 max-w-[500px] leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}
