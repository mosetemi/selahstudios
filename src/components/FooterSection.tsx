import { Instagram, DollarSign, Headphones } from "lucide-react";
import logo from "@/assets/logo.png";
import tpLogo from "@/assets/tpLogo.png";

const socials = [
  { icon: Instagram, label: "Studio", href: "https://www.instagram.com/theselah.studios" },
  { icon: Instagram, label: "Podcast", href: "https://www.instagram.com/theselah.pod" },
  { icon: DollarSign, label: "CashApp", href: "https://cash.app/$theselahstudio" },
];

const FooterSection = () => {
  return (
    <footer className="py-16 bg-charcoal">
      <div className="container mx-auto px-4 text-center">
        <img src={tpLogo} alt="The Selah Studios" className="mx-auto w-16 h-16 object-contain mb-6 opacity-80" />
        <p className="font-accent text-sm italic text-cream/50 mb-8">
          Pause. Listen. Create.
        </p>

        <div className="flex justify-center gap-6 mb-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/40 hover:text-gold transition-colors"
              aria-label={s.label}
            >
              <s.icon size={18} strokeWidth={1.4} />
              <span className="font-body text-xs uppercase tracking-[0.15em]">{s.label}</span>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-8 mb-8">
          {["Shop", "Podcast", "Community", "Giving", "About"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs uppercase tracking-[0.2em] text-cream/40 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="w-16 h-px bg-gold/30 mx-auto mb-6" />
        <p className="font-body text-xs text-cream/30 tracking-wide">
          © {new Date().getFullYear()} The Selah Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
