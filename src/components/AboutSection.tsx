import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-accent text-lg italic text-accent tracking-wide mb-2">Our Purpose</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">About Selah Studios</h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide">
              God is always speaking and as spiritual as He is, He's also in the practical things. 
              When you really know how to sit and listen, you'll see that He gives revelations all the time.
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide">
              Selah Studios is a platform to capture and vocalize this, bringing to life God's vision. 
              Whether through podcasts, clothing, worship, or community service, the mission is to leave 
              you empowered, filled, yet hungry for more.
            </p>
            <p className="font-accent text-lg italic text-foreground mt-8">
              We believe God speaks not just so that we hear Him, but so that we know Him 
              and are empowered to change the world around us.
            </p>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mt-4">
              Psalm 44:8
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
