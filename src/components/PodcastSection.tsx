import { motion } from "framer-motion";
import { Headphones, ExternalLink } from "lucide-react";

const platforms = [
  { name: "Apple Podcasts", url: "#" },
  { name: "Spotify", url: "#" },
  { name: "YouTube", url: "#" },
];

const PodcastSection = () => {
  return (
    <section id="podcast" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full aspect-square bg-forest/30 flex items-center justify-center border border-gold/20">
              <Headphones className="text-gold" size={80} strokeWidth={1} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-accent text-lg italic text-gold tracking-wide mb-2">Listen & Be Filled</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">The Podcast</h2>
            <p className="font-body text-sm text-cream/60 leading-relaxed mb-8 tracking-wide">
              God is always speaking. Tune in as we explore revelations, faith, and practical wisdom 
              that empowers you to know Him deeper and change the world around you.
            </p>

            <div className="space-y-3">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  className="flex items-center justify-between px-5 py-3 border border-gold/30 text-cream hover:bg-gold/10 transition-colors group"
                >
                  <span className="font-body text-sm uppercase tracking-widest">{p.name}</span>
                  <ExternalLink size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
