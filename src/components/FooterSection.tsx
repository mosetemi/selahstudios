import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-charcoal">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="The Selah Studios" className="mx-auto w-16 h-16 object-contain mb-6 opacity-80" />
        <p className="font-accent text-sm italic text-cream/50 mb-8">
          Pause. Listen. Create.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          {["Shop", "Podcast", "Community", "About"].map((link) => (
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
