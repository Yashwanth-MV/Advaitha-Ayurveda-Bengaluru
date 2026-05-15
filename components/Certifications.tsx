import Image from "next/image";

const certs = [
  { 
    name: "Certified Ayurvedic Clinic", 
    org: "Ministry of AYUSH", 
    img: "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600"
  },
  { 
    name: "Panchakarma Excellence", 
    org: "National Health Board", 
    img: "https://framerusercontent.com/images/S0eHVVy2bBiyJxOa9o02EfL2Gnk.jpg?width=600"
  },
  { 
    name: "Women's Health Specialist", 
    org: "Global Ayurveda Council", 
    img: "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600"
  },
];

export default function Certifications() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#1c1f1a] text-white">
      <div className="max-w-[1360px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <p className="text-[0.8rem] font-medium text-[#a8c49c] uppercase tracking-widest mb-4">Quality Assurance</p>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-tight mb-6">Recognized Excellence</h2>
          <p className="text-white/60 text-[1rem]">We maintain the highest standards of medical hygiene and clinical authenticity, recognized by leading boards.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div key={cert.name} className="group relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10">
              <Image 
                src={cert.img} 
                alt={cert.name} 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f1a] via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8c49c" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="font-serif text-[1.4rem] leading-tight mb-2">{cert.name}</h3>
                <p className="text-[0.7rem] text-white/50 uppercase tracking-[0.2em]">{cert.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
