import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/Selah_Hero_Section.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBg} type="video/mp4" />
      </video>
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Rest of content stays exactly the same */}
      <div className="container mx-auto px-4 text-center relative z-10">
        
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--gold)/0.3),transparent_60%)]" />

        <motion.p
          className="font-accent text-xl md:text-2xl italic text-gold tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pause. Listen. Create.
        </motion.p>

        <motion.h1
          className="font-display text-3xl md:text-5xl lg:text-6xl text-cream leading-tight max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Capturing & Bringing to Life{" "}
          <span className="text-gold">God's Vision</span>
        </motion.h1>

        <motion.p
          className="font-body text-sm md:text-base text-cream/70 max-w-xl mx-auto mb-10 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Whether through podcasts, clothing, worship, or community service — 
          the mission is to leave you empowered, filled, yet hungry for more.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#shop"
            className="inline-block px-8 py-3 bg-gold text-charcoal font-body text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Shop Collection
          </a>
          <a
            href="#podcast"
            className="inline-block px-8 py-3 border border-gold text-gold font-body text-sm uppercase tracking-widest hover:bg-gold/10 transition-colors"
          >
            Listen Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
