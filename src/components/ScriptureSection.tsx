import { motion } from "framer-motion";

const ScriptureSection = () => {
  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.4),transparent_70%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.blockquote
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-accent text-xl md:text-2xl lg:text-3xl italic text-cream/90 leading-relaxed mb-6">
            "Let him who boasts boast in this, that he understands and knows me…"
          </p>
          <cite className="font-body text-xs uppercase tracking-[0.3em] text-gold not-italic">
            Jeremiah 9:24
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default ScriptureSection;
