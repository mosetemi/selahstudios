import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import ScriptureSection from "@/components/ScriptureSection";
import PodcastSection from "@/components/PodcastSection";
import CommunitySection from "@/components/CommunitySection";
import GivingSection from "@/components/GivingSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShopSection />
      <ScriptureSection />
      <PodcastSection />
      <CommunitySection />
      <GivingSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
