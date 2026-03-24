import { motion } from "framer-motion";
import { Heart, Gift, Megaphone } from "lucide-react";

const impacts = [
  { icon: Heart, label: "Community Events" },
  { icon: Gift, label: "Giveaways" },
  { icon: Megaphone, label: "Content & Resources" },
];

const GivingSection = () => {
  return (
    <section id="giving" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-lg italic text-accent tracking-wide mb-2">
            Sow Into the Vision
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground">
            Partner With Us
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-body text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-10">
            Your generosity fuels the mission. Every gift goes directly toward
            hosting community events, blessing others through giveaways, and
            funding the content and resources that spread God's vision.
          </p>

          <div className="flex justify-center gap-8 md:gap-12 mb-12">
            {impacts.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <item.icon
                  className="text-accent"
                  size={28}
                  strokeWidth={1.2}
                />
                <span className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <a
            href="https://cash.app/$theselahstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm uppercase tracking-[0.2em] px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
          >
            Give via CashApp
          </a>
          <p className="mt-4 font-accent text-sm italic text-primary-foreground/50">
            $theselahstudio
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GivingSection;
