import InnerHero from "@/components/InnerHero";
import AboutContent from "@/components/AboutContent";
import VisionMission from "@/components/VisionMission";
import FoundersSection from "@/components/FoundersSection";
import ClinicExperience from "@/components/ClinicExperience";
import Certifications from "@/components/Certifications";
import ProcessSection from "@/components/ProcessSection";
import FinalCTA from "@/components/FinalCTA";

export default function AboutUs() {
  return (
    <main className="overflow-x-hidden bg-[#fdfcf8]">
      <InnerHero 
        tag="Our Story"
        title="Heal with Heart" 
        desc="Bridging ancient Ayurvedic wisdom with modern clinical excellence in the heart of Bengaluru."
        img="https://framerusercontent.com/images/Pp7BCFuM0CfcYiIoBZtb8LbUf48.jpg?width=1600"
      />
      <AboutContent />
      <VisionMission />
      <FoundersSection />
      <ClinicExperience />
      <Certifications />
      <ProcessSection />
      <FinalCTA />
    </main>
  );
}
