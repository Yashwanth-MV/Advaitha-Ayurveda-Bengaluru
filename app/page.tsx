import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import ServicesSection from "@/components/ServicesSection";
import NetworkSection from "@/components/NetworkSection";
import CTABanner from "@/components/CTABanner";
import TherapyShowcase from "@/components/TherapyShowcase";
import VideoFeature from "@/components/VideoFeature";
import FounderPhilosophy from "@/components/FounderPhilosophy";
import ProcessSection from "@/components/ProcessSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#fdfcf8]">
      <Hero />
      <MarqueeStrip />
      <ServicesSection />
      <NetworkSection />
      <CTABanner />
      <TherapyShowcase />
      <VideoFeature />
      <FounderPhilosophy />
      <MarqueeStrip reverse />
      <ProcessSection />
      <BlogSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
