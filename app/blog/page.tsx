import MarqueeStrip from "@/components/MarqueeStrip";
import InnerHero from "@/components/InnerHero";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";

export default function Blog() {
  return (
    <main className="overflow-x-hidden">
      <InnerHero
        tag="Knowledge & Insights"
        title="Stories From Our Natural Medicine Journal"
        desc="Explore tips, research, and practitioner wisdom on herbs, therapies, mindfulness, and everything in between."
        img="https://framerusercontent.com/images/hijHa5xphlL0NzGScePX5XGNs.jpg?width=1400"
      />
      <MarqueeStrip />
      <BlogSection />
      <FinalCTA />
    </main>
  );
}
