import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const galleryImages = [
  {
    src: "https://framerusercontent.com/images/6sB5MYe1GAAE9Cdken90ram6pc.jpg?width=600",
    tall: true,
    row: "row-span-2",
  },
  {
    src: "https://framerusercontent.com/images/Pp7BCFuM0CfcYiIoBZtb8LbUf48.jpg?width=600",
    tall: false,
    row: "row-span-1",
  },
  {
    src: "https://framerusercontent.com/images/BYcOt42mA4EER7HiupgRzsyHWo.jpg?width=600",
    tall: false,
    row: "row-span-1",
  },
  {
    src: "https://framerusercontent.com/images/X61dXhzbc4bXlkFpcPzQEGVTM08.jpg?width=600",
    tall: true,
    row: "row-span-2",
  },
  {
    src: "https://framerusercontent.com/images/6gwHFwgdizuritfaBQgR2tDWhk.jpg?width=600",
    tall: false,
    row: "row-span-1",
  },
  {
    src: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=600",
    tall: false,
    row: "row-span-1",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="px-6 md:px-10 py-20 md:py-28 bg-[#f4f7f2]">
      <div className="max-w-[1360px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[0.78rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-3">
              Visual Journey
            </p>
            <h2 className="font-serif text-[2.2rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.1] text-[#1c1f1a] max-w-[500px]">
              Explore Our Natural Healing Gallery
            </h2>
          </div>
          <p className="text-[0.95rem] text-[#555a50] max-w-[360px] leading-relaxed md:text-right">
            Take a glimpse into our serene healing environment and authentic Ayurvedic therapy spaces.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[200px_200px_200px] md:grid-rows-[240px_240px] gap-4 auto-rows-[240px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.row}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1c1f1a]/0 group-hover:bg-[#1c1f1a]/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  View gallery
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote card overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-3xl bg-[#1c1f1a] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="w-12 h-12 flex-shrink-0 relative">
            <Image
              src="https://framerusercontent.com/images/xjulbAMZs4kdWOdT7coA9AZYI4Y.svg?width=58"
              alt=""
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <p className="font-serif text-[1.1rem] md:text-[1.3rem] text-white/90 leading-relaxed italic flex-1">
            &ldquo;We believe that true healing begins within. When the body, mind, and spirit are in balance, natural wellness follows.&rdquo;
          </p>
          <p className="text-[0.8rem] text-[#a8c49c] font-medium md:text-right flex-shrink-0">
            By The Founders of Advaitha Ayurveda
          </p>
        </motion.div>
      </div>
    </section>
  );
}
