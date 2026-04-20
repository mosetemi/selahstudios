import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { collections } from "@/lib/products";

const ShopSection = () => {
  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-lg italic text-accent tracking-wide mb-2">Wear the Word</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">The Collection</h2>
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/shop/${collection.slug}`}
                className="group block cursor-pointer"
                aria-label={`Browse ${collection.name} collection`}
              >
                <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={collection.cover}
                    alt={collection.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="font-accent text-base italic text-background/90 tracking-wide mb-1 drop-shadow">
                      {collection.tagline}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-background tracking-wide drop-shadow">
                      {collection.name}
                    </h3>
                    <span className="mt-3 font-body text-xs tracking-[0.3em] uppercase text-background/90 border-b border-background/60 pb-1">
                      Shop the Series
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
