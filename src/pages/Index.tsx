import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import ScriptureSection from "@/components/ScriptureSection";
import PodcastSection from "@/components/PodcastSection";
import CommunitySection from "@/components/CommunitySection";
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
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
