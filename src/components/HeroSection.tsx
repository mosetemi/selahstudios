import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";
import tpLogo from "@/assets/tpLogo.png";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Retry on first user interaction if autoplay was blocked
          const onInteract = () => {
            video.play().catch(() => {});
            window.removeEventListener("touchstart", onInteract);
            window.removeEventListener("click", onInteract);
          };
          window.addEventListener("touchstart", onInteract, { once: true });
          window.addEventListener("click", onInteract, { once: true });
        });
      }
    };

    // Ensure looping even if browser drops the loop on rare occasions
    const onEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    video.addEventListener("ended", onEnded);

    tryPlay();
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background looping video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        aria-hidden="true"
      >
        <source src="/media/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-charcoal/60" />
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--gold)/0.3),transparent_60%)]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.img
          src={tpLogo}
          alt="The Selah Studios"
          className="mx-auto w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

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
