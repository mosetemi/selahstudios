import { motion } from "framer-motion";
import { Heart, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { buildComingSoonPath } from "@/lib/routes";

const items = [
  {
    icon: Heart,
    title: "Community Service",
    description: "Serving our neighborhoods with the love of Christ — because faith without works is dead.",
    linkText: "Get Involved",
    to: buildComingSoonPath("Community Service"),
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Worship nights, pop-ups, and gatherings designed to bring believers together in fellowship.",
    linkText: "Upcoming Events",
    to: buildComingSoonPath("Upcoming Events"),
  },
  {
    icon: Users,
    title: "Join the Community",
    description: "Stay connected. Be part of a tribe that seeks God's vision and brings it to life.",
    linkText: "Connect With Us",
    to: "/connect",
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
              <Link
                to={item.to}
                className="border-b border-accent/40 pb-1 font-body text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
              >
                {item.linkText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
