import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";
import { ReviewTrain } from "@/components/review-train";

export function SiteFooter() {
  return (
    <footer className="mt-24">
      <ReviewTrain />
      <div className="border-t border-border/60 bg-secondary/40">
      <div className="container-prose grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="font-display text-2xl">{SITE.name}</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A neighbourhood croissanterie folding butter into 81 layers, every morning,
            from a tiny shop on NIBM Road.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Visit
          </div>
          <p className="mt-3 text-sm leading-relaxed">{SITE.address}</p>
          <p className="mt-2 text-sm text-muted-foreground">{SITE.hours}</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Explore
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-foreground text-muted-foreground">Menu</Link></li>
            <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Visit & contact</Link></li>
            <li><a href={SITE.phoneHref} className="hover:text-foreground text-muted-foreground">{SITE.phoneNumber}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 {SITE.name} — Folded with butter, in Pune.</span>
          <span>Baked fresh, all day.</span>
        </div>
      </div>
      </div>
    </footer>
  );
}
