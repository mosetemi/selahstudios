import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import logo from "@/assets/logo.png";

const ComingSoon = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination")?.trim();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="The Selah Studios" className="h-12 w-12 object-contain" />
            <span className="font-display text-lg tracking-wide text-foreground hidden sm:block">
              The Selah Studios
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto flex min-h-[calc(100vh-89px)] items-center px-4 py-16">
        <section className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-accent text-xl italic text-accent">Pause. Listen. Create.</p>
            <div className="mt-5 h-px w-20 bg-accent" />
            <h1 className="mt-8 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              {destination ? `${destination} is coming soon.` : "A new Selah Studios destination is coming soon."}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              We’re building out dedicated spaces for future drops, podcast destinations, events, and community experiences with intention. This destination will be live soon.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-body text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowLeft size={16} />
                Return Home
              </Link>
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-6 py-3 font-body text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Stay Connected
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden border border-border bg-card p-8 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-accent/60" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Coming Soon
            </p>
            <p className="mt-6 font-accent text-3xl italic text-accent sm:text-4xl">
              {destination ?? "Fresh expressions of faith, creativity, and community."}
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Selah Studios is preparing this next touchpoint so it feels as intentional as the brand itself. Check back soon for the full experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Merch drops and collection details",
                "Podcast platform destinations",
                "Event announcements and signups",
                "New ways to connect with the community",
              ].map((item) => (
                <div key={item} className="border border-border bg-background/60 p-4">
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComingSoon;