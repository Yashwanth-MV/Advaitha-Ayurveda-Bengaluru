import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto rounded-[3rem] overflow-hidden relative h-[500px] flex items-center justify-center text-center">
        <Image
          src="https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=1600"
          alt="Book Appointment"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1360px"
        />
        <div className="absolute inset-0 bg-[#1c1f1a]/50 backdrop-blur-[2px]" />
        
        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white leading-tight mb-8">
              Start Your Journey <br/> <span className="italic text-[#a8c49c]">to Wellness Today</span>
            </h2>
            <Link
              href="/contact-us"
              className="px-10 py-4 rounded-full bg-[#5d8a4f] text-white text-[1rem] font-medium hover:bg-[#496e3d] transition-all duration-300 shadow-2xl"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
