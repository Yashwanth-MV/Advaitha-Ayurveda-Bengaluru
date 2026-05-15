import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="px-6 md:px-10 py-24 bg-[#fdfcf8]">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=1000"
            alt="Ayurvedic Treatment"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        <div>
          <p className="text-[0.8rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-6">Our Philosophy</p>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-[#1c1f1a] mb-8">
            Healing the Root, <br/> <span className="italic">Not Just the Symptom</span>
          </h2>
          <div className="space-y-6 text-[1.05rem] text-[#555a50] leading-relaxed">
            <p>
              At Advaitha Ayurveda, we believe that true health is more than just the absence of disease—it is a state of vibrant physical, mental, and spiritual balance.
            </p>
            <p>
              Located in the heart of Malleshwaram, our clinic is a sanctuary where ancient Ayurvedic wisdom meets compassionate, modern care. Our approach is deeply personalized, recognizing that every individual has a unique constitution (Prakriti).
            </p>
            <p>
              Whether you are seeking relief from chronic pain, managing lifestyle disorders, or looking for a deep clinical detox through Panchakarma, our expert doctors are here to guide you back to your natural state of wholeness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
