import { motion } from "framer-motion";
import { Instagram, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Connect = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="The Selah Studios" className="h-12 w-12 object-contain" />
            <span className="font-display text-lg tracking-wide text-foreground hidden sm:block">
              The Selah Studios
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </nav>

      <div className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-accent text-lg italic text-accent tracking-wide mb-2">
              Stay Connected
            </p>
            <h1 className="font-display text-3xl md:text-5xl text-foreground">
              Connect With Us
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Instagram - Main */}
            <motion.a
              href="https://www.instagram.com/theselah.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-border hover:border-accent/40 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Instagram className="mx-auto mb-5 text-accent group-hover:scale-110 transition-transform" size={36} strokeWidth={1.2} />
              <h2 className="font-display text-xl text-foreground mb-2">Selah Studios</h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Our main hub — brand updates, behind-the-scenes, and community highlights.
              </p>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1">
                @theselah.studios
              </span>
            </motion.a>

            {/* Instagram - Podcast */}
            <motion.a
              href="https://www.instagram.com/theselah.pod"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-border hover:border-accent/40 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Instagram className="mx-auto mb-5 text-accent group-hover:scale-110 transition-transform" size={36} strokeWidth={1.2} />
              <h2 className="font-display text-xl text-foreground mb-2">Selah Podcast</h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Clips, episode drops, and conversations that feed your spirit.
              </p>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1">
                @theselah.pod
              </span>
            </motion.a>

            {/* GroupMe - Lock-In Challenge */}
            <motion.div
              className="group p-8 border border-border hover:border-accent/40 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Users className="mx-auto mb-5 text-accent" size={36} strokeWidth={1.2} />
              <h2 className="font-display text-xl text-foreground mb-2">
                2026 Selah Lock-In Challenge
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Join the challenge — lock in with a community of believers committed to going deeper this year.
              </p>
              <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground/60 border-b border-border pb-1">
                GroupMe Link Coming Soon
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Simple footer */}
      <footer className="py-8 bg-charcoal text-center">
        <p className="font-body text-xs text-cream/30 tracking-wide">
          © {new Date().getFullYear()} The Selah Studios. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Connect;
