"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "Treatments", href: "/treatments", desc: "Clinical protocols" },
  { label: "Panchakarma", href: "/panchakarma", desc: "Signature detox" },
  { label: "Women's Wellness", href: "/womens-wellness", desc: "Hormonal care" },
];

const navLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/our-products" },
  { label: "Camps", href: "/our-camps" },
  { label: "Knowledge Center", href: "/qna-with-founders" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Hard resize listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hard scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
      document.body.style.position = "static";
    }
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[99999] h-[80px] transition-all duration-700 ${
        isOpen ? "bg-[#1c1f1a]" : "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 h-full flex items-center justify-between relative">
        {/* LOGO */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 relative z-[999999]"
        >
          <div className="w-9 h-9 rounded-full bg-[#5d8a4f] flex items-center justify-center shadow-lg shadow-[#5d8a4f]/20">
            <span className="text-white text-[0.8rem] font-bold italic">A</span>
          </div>
          <span className={`font-serif text-[1rem] font-bold tracking-tight transition-colors duration-700 ${isOpen ? "text-white" : "text-[#1c1f1a]"}`}>
            Advaitha Ayurveda
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navLinks.slice(0, 1).map((link) => (
            <Link key={link.label} href={link.href} className="text-[0.85rem] font-bold text-[#1c1f1a] hover:text-[#5d8a4f] transition-all uppercase tracking-widest">{link.label}</Link>
          ))}
          <div className="group relative h-full flex items-center">
            <button className="text-[0.85rem] font-bold text-[#1c1f1a] group-hover:text-[#5d8a4f] flex items-center gap-1.5 transition-colors uppercase tracking-widest">
              Services
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 w-[280px] bg-[#1c1f1a] border border-white/10 shadow-2xl rounded-[2rem] py-6 px-2 mt-4 transition-all duration-500">
              {services.map((s) => (
                <Link key={s.label} href={s.href} className="block px-8 py-3.5 hover:bg-white/5 rounded-2xl transition-all">
                  <span className="block text-[0.9rem] font-serif font-bold text-white mb-0.5">{s.label}</span>
                  <span className="block text-[0.65rem] text-white/30 font-medium uppercase tracking-widest">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(1).map((link) => (
            <Link key={link.label} href={link.href} className="text-[0.85rem] font-bold text-[#1c1f1a] hover:text-[#5d8a4f] transition-all uppercase tracking-widest">{link.label}</Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link 
          href="/book-consultation" 
          className="hidden lg:flex px-8 py-3 rounded-full bg-[#1c1f1a] text-white text-[0.75rem] font-bold hover:bg-[#5d8a4f] transition-all shadow-xl uppercase tracking-[0.15em]"
        >
          Consult Now
        </Link>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={handleToggle}
          className="lg:hidden relative z-[999999] w-12 h-12 flex items-center justify-center -mr-2"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 rounded-full transition-all duration-500 ${isOpen ? "w-8 bg-white rotate-45 translate-y-[4px]" : "w-8 bg-[#1c1f1a]"}`} />
            <span className={`h-0.5 rounded-full transition-all duration-500 ${isOpen ? "w-8 bg-white -rotate-45 -translate-y-[4px]" : "w-5 bg-[#1c1f1a]"}`} />
          </div>
        </button>

        {/* MINIMALIST MOBILE OVERLAY */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99998] bg-[#1c1f1a] pt-[120px] pb-10 flex flex-col h-screen w-full overflow-hidden"
            >
              <div className="flex flex-col flex-1 overflow-y-auto relative z-10 px-8">
                {/* PRIMARY NAVIGATION */}
                <nav className="flex flex-col gap-1">
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    <Link href="/about-us" onClick={() => setIsOpen(false)} className="block py-3.5">
                      <span className="font-serif text-[1.6rem] font-bold text-white tracking-tight">About us</span>
                    </Link>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between py-3.5"
                    >
                      <span className="font-serif text-[1.6rem] font-bold text-white tracking-tight">Services</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-500 ${isServicesOpen ? 'rotate-180' : ''}`}><path d="M6 9L12 15L18 9" stroke="#5d8a4f" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-white/[0.03] rounded-3xl mt-2 mb-4"
                        >
                          <div className="py-4 px-8 flex flex-col gap-6">
                            {services.map((s) => (
                              <Link key={s.label} href={s.href} onClick={() => setIsOpen(false)} className="group">
                                <span className="block text-[1rem] font-serif font-bold text-white group-active:text-[#a8c49c] transition-colors">{s.label}</span>
                                <span className="block text-[0.6rem] text-white/30 uppercase tracking-[0.15em] mt-1 font-bold">{s.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {navLinks.slice(1).map((link, idx) => (
                    <motion.div key={link.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (idx * 0.1) }}>
                      <Link href={link.href} onClick={() => setIsOpen(false)} className="block py-3.5">
                        <span className="font-serif text-[1.6rem] font-bold text-white tracking-tight">{link.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* ACTION ANCHOR */}
              <div className="px-8 pt-10">
                <Link 
                  href="/book-consultation"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 rounded-full bg-[#5d8a4f] text-white text-center font-bold text-[0.85rem] flex items-center justify-center gap-3 uppercase tracking-[0.2em] shadow-2xl active:scale-[0.98] transition-transform"
                >
                  Consult Doctors
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L13 6M19 12L13 18"/></svg>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
