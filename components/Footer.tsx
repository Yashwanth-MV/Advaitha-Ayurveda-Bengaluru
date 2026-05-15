"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c1f1a] text-white pt-24 pb-12 px-6 md:px-10">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#5d8a4f] flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span className="font-serif text-[1.2rem] font-bold tracking-wide">
                Advaitha Ayurveda
              </span>
            </Link>
            <p className="text-white/50 text-[0.9rem] leading-relaxed max-w-[280px]">
              Authentic Ayurvedic healing in the heart of Malleshwaram. Restoring balance to your mind, body, and spirit.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#a8c49c]">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/about-us" className="text-white/60 hover:text-white transition-colors">About Us</Link>
              <Link href="/treatments" className="text-white/60 hover:text-white transition-colors">Treatments</Link>
              <Link href="/panchakarma" className="text-white/60 hover:text-white transition-colors">Panchakarma</Link>
              <Link href="/womens-wellness" className="text-white/60 hover:text-white transition-colors">Women&apos;s Wellness</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#a8c49c]">Connect</h4>
            <nav className="flex flex-col gap-4 text-white/60">
              <p>Malleshwaram, Bengaluru</p>
              <p>contact@advaithaayurveda.com</p>
              <p className="text-white text-lg font-medium">94823 68639</p>
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#a8c49c]">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/advaitha_ayurveda/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#a8c49c]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/share/19f2KD2h6s/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#a8c49c]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.8rem] text-white/30 uppercase tracking-widest">
          <p>© 2024 Advaitha Ayurveda. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
