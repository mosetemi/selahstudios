import { motion } from "framer-motion";
import podcastDuo from "@/assets/album/podcast-duo.jpeg";

const photos = [
  {
    src: podcastDuo,
    alt: "Selah Studios podcast hosts in studio",
    caption: "Behind the mic",
  },
];

const AlbumSection = () => {
  return (
    <section id="album" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-accent text-base italic text-gold tracking-widest uppercase mb-3">
            Moments
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal">
            The Photo Album
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <motion.figure
              key={i}
              className="group relative overflow-hidden bg-charcoal/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent">
                <p className="font-accent text-sm italic text-cream tracking-wide">
                  {photo.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
