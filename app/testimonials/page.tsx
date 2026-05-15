"use client";
import InnerHero from "@/components/InnerHero";

const videoTestimonials = [
  { id: 1, title: "Recovery from Chronic Arthritis", name: "Anjali Rao", video: "https://player.vimeo.com/external/494252666.sd.mp4?s=741031f0e49f69747c706d9d10e5d07c08a0d2d3&profile_id=164&oauth2_token_id=57447761" },
  { id: 2, title: "Successful Management of PCOS", name: "Priya Sharma", video: "https://player.vimeo.com/external/459389137.sd.mp4?s=9108316239169620027f311c1d9d7e1f1c7d2c3&profile_id=164&oauth2_token_id=57447761" },
];

const writtenStories = [
  { category: "Pain Relief", quote: "I had been suffering from migraine for 5 years. After 3 weeks of treatment here, I finally have relief.", name: "Sunil Kumar" },
  { category: "Panchakarma", quote: "The detox program changed my life. I feel 10 years younger and more energetic than ever.", name: "Meera Nair" },
  { category: "Skin Care", quote: "Authentic medicines and compassionate care. My skin allergies are completely gone.", name: "Rashmi V" },
];

export default function TestimonialsPage() {
  return (
    <main className="overflow-x-hidden bg-[#fdfcf8]">
      <InnerHero
        tag="Success Stories"
        title="Real Healing, Real People"
        desc="Hear from our patients who have reclaimed their health and vitality through our authentic Ayurvedic protocols."
        img="https://framerusercontent.com/images/BYcOt42mA4EER7HiupgRzsyHWo.jpg?width=1600"
      />

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1360px] mx-auto">
          {/* Video Grid */}
          <div className="mb-24">
            <h2 className="font-serif text-[2.5rem] mb-12">Video Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((v) => (
                <div key={v.id} className="group">
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-black mb-6 relative">
                    <video loop muted autoPlay playsInline className="w-full h-full object-cover opacity-70">
                      <source src={v.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl mb-1">{v.title}</h3>
                  <p className="text-sm text-[#5d8a4f] font-medium">{v.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Written Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {writtenStories.map((story, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-[#f4f7f2] border border-black/5">
                <span className="text-[0.7rem] font-medium text-[#5d8a4f] uppercase tracking-widest mb-4 block">{story.category}</span>
                <p className="text-lg leading-relaxed text-[#1c1f1a] mb-8 italic">&quot;{story.quote}&quot;</p>
                <p className="font-medium text-[#555a50]">— {story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-[#1c1f1a] text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[2.5rem] mb-6">4.9/5 on Google Reviews</h2>
          <p className="text-white/70 mb-10">Join 5,000+ satisfied patients who have started their wellness journey with us.</p>
          <a href="/book-consultation" className="px-10 py-4 rounded-full bg-[#5d8a4f] text-white font-medium hover:bg-[#496e3d] transition-all">
            Start Your Journey
          </a>
        </div>
      </section>

    </main>
  );
}
