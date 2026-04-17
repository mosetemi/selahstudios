import Navbar from "@/components/Navbar";
import AlbumSection from "@/components/AlbumSection";
import FooterSection from "@/components/FooterSection";

const Album = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <AlbumSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Album;
