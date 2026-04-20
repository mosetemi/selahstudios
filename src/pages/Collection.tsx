import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  collections,
  getProductsByCategory,
  type ProductCategory,
} from "@/lib/products";
import { buildComingSoonPath } from "@/lib/routes";

const isValidCategory = (slug?: string): slug is ProductCategory =>
  slug === "shirts" || slug === "jackets";

const Collection = () => {
  const { category } = useParams();

  if (!isValidCategory(category)) {
    return <Navigate to="/" replace />;
  }

  const collection = collections.find((c) => c.slug === category)!;
  const items = getProductsByCategory(category);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#shop"
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-accent transition-colors"
            >
              ← The Collection
            </Link>
            <p className="font-accent text-lg italic text-accent tracking-wide mt-6 mb-2">
              {collection.tagline}
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">
              {collection.name}
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {items.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
                  <p className="font-accent text-sm italic text-muted-foreground">
                    {product.subtitle}
                  </p>
                  <p className="mt-1 font-body text-sm tracking-wide text-accent">
                    {product.price}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Collection;
