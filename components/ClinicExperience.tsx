import Image from "next/image";

export default function ClinicExperience() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#1c1f1a] text-white">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-widest mb-6">The Space</p>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.1] mb-8">A Sanctuary of Silence & Healing</h2>
            <p className="text-[1.1rem] text-white/60 leading-relaxed mb-10 max-w-[540px]">
              Located in the heart of Malleshwaram, our clinic is designed to be a sensory-neutral space where your healing process begins the moment you step inside.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-serif text-[1.4rem] mb-2">Authentic</p>
                <p className="text-[0.75rem] text-white/40 uppercase tracking-widest">Medical Grade Oils</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-serif text-[1.4rem] mb-2">Private</p>
                <p className="text-[0.75rem] text-white/40 uppercase tracking-widest">Therapy Chambers</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                <Image
                  src="https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=800"
                  alt="Clinic Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                <Image
                  src="https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=800"
                  alt="Therapy Room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                <Image
                  src="https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=800"
                  alt="Healing Environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                <Image
                  src="https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=800"
                  alt="Consultation Space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
