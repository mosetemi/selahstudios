import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import jrPurple from "@/assets/jr-purple.png";
import jsBlackGold from "@/assets/js-black-gold.png";
import shammahVarsity from "@/assets/shammah-varsity.png";
import jirehGreen from "@/assets/jireh-green.png";
import shalomVarsity from "@/assets/shalom-varsity.png";
import { buildComingSoonPath } from "@/lib/routes";

const products = [
  {
    name: "Jehovah Rapha Shirt",
    subtitle: "The LORD My Healer",
    image: jrPurple,
    price: "$65",
  },
  {
    name: "Jehovah Shammah Shirt",
    subtitle: "The Lord is Here",
    image: jsBlackGold,
    price: "$65",
  },
  {
    name: "Shammah Varsity Jacket",
    subtitle: "The Lord is Here",
    image: shammahVarsity,
    price: "$120",
  },
  {
    name: "Jireh Varsity Jacket",
    subtitle: "The Lord Provides",
    image: jirehGreen,
    price: "$120",
  },
  {
    name: "Shalom Varsity Jacket",
    subtitle: "The Lord is my Peace",
    image: shalomVarsity,
    price: "$120",
  },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={buildComingSoonPath(product.name)}
                className="group block cursor-pointer"
                aria-label={`Open coming soon page for ${product.name}`}
              >
                <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg text-foreground">{product.name}</h3>
                <p className="font-accent text-sm italic text-muted-foreground">{product.subtitle}</p>
                <p className="mt-1 font-body text-sm tracking-wide text-accent">{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
