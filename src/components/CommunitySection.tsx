import { motion } from "framer-motion";
import { Heart, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Heart,
    title: "Community Service",
    description: "Serving our neighborhoods with the love of Christ — because faith without works is dead.",
    linkText: "Get Involved",
    href: "#",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Worship nights, pop-ups, and gatherings designed to bring believers together in fellowship.",
    linkText: "Upcoming Events",
    href: "#",
  },
  {
    icon: Users,
    title: "Join the Community",
    description: "Stay connected. Be part of a tribe that seeks God's vision and brings it to life.",
    linkText: "Connect With Us",
    href: "/connect",
    isRoute: true,
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-lg italic text-accent tracking-wide mb-2">Beyond the Brand</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Community & Events</h2>
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="text-center p-8 border border-border hover:border-accent/40 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <item.icon className="mx-auto mb-5 text-accent" size={32} strokeWidth={1.2} />
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>
              {(item as any).isRoute ? (
                <Link
                  to={item.href}
                  className="font-body text-xs uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors border-b border-accent/40 pb-1"
                >
                  {item.linkText}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="font-body text-xs uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors border-b border-accent/40 pb-1"
                >
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
