import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import heroAsset from "@/assets/photos/croissant-plate.jpg.asset.json";
import shopAsset from "@/assets/photos/interior.jpg.asset.json";
import laminationAsset from "@/assets/photos/breakfast.jpg.asset.json";
import storefrontDay from "@/assets/photos/storefront-day.jpg.asset.json";
import storefrontNight from "@/assets/photos/storefront-night.jpg.asset.json";
import counter from "@/assets/photos/counter.jpg.asset.json";
import sandwichSpread from "@/assets/photos/sandwich-spread.jpg.asset.json";
import sandwichSpread2 from "@/assets/photos/sandwich-spread-2.jpeg.asset.json";
import sandwichPair from "@/assets/photos/sandwich-pair.jpg.asset.json";
import { SITE } from "@/lib/site-config";

const heroImg = heroAsset.url;
const shopImg = shopAsset.url;
const laminationImg = laminationAsset.url;

const GALLERY = [
  { src: storefrontNight.url, alt: "Crosaaintwala & Co. storefront lit up at night" },
  { src: sandwichSpread.url, alt: "Croissant sandwich spread with chips and ketchup" },
  { src: counter.url, alt: "Pastry counter at the shop" },
  { src: storefrontDay.url, alt: "Shop signage and outdoor seating in the daytime" },
  { src: sandwichPair.url, alt: "Two croissant sandwiches on a marble table" },
  { src: sandwichSpread2.url, alt: "Croissant sandwiches with sauces" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crosaaintwala & Co. — Fiercely flaky. Freshly baked." },
      { name: "description", content: "A neighbourhood croissanterie folding butter into 81 layers, every morning, from a tiny shop on NIBM Road, Pune." },
      { property: "og:title", content: "Crosaaintwala & Co." },
      { property: "og:description", content: "Fiercely flaky. Freshly baked. NIBM Road, Pune." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Stack of golden flaky croissants"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink/85" />
        </div>
        <div className="container-prose relative flex min-h-[88dvh] flex-col justify-end pb-16 pt-24 text-cream">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-80">
            <MapPin className="h-3 w-3" /> {SITE.shortAddress}
          </div>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            Fiercely flaky.<br />
            <span className="italic text-butter">Freshly baked.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 sm:text-lg">
            A neighbourhood croissanterie folding butter into 81 layers, every morning,
            from a tiny shop on NIBM Road.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-butter px-6 py-3 text-sm font-medium text-ink hover:opacity-90"
            >
              Order Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream hover:bg-cream/10"
            >
              View Menu
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-6 text-sm sm:max-w-lg">
            <div>
              <div className="flex items-center gap-1 font-medium"><Star className="h-3.5 w-3.5 fill-butter text-butter" />4.7</div>
              <div className="text-xs text-cream/60">109 reviews</div>
            </div>
            <div>
              <div className="font-medium">₹200–400</div>
              <div className="text-xs text-cream/60">Per person</div>
            </div>
            <div>
              <div className="flex items-center gap-1 font-medium"><Clock className="h-3.5 w-3.5" />Open</div>
              <div className="text-xs text-cream/60">8:30 am — 11:30 pm</div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY teaser */}
      <section className="container-prose grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The story</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">A small shop with big butter energy.</h2>
          <p className="mt-5 text-muted-foreground">
            We laminate, proof, and bake every croissant in-house, in small batches, all day.
            No shortcuts, no day-olds — just the slow, patient theatre of flour, French butter, and time.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether it's a chocolate spiral with your morning espresso or a paneer paprika at midnight,
            we built this place for the in-between hours.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to reserve a table at Crosaaintwala & Co.")}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center rounded-full border border-input px-5 py-2.5 text-sm font-medium hover:bg-secondary"
            >Reserve</a>
          </div>
        </div>
        <div className="relative">
          <img src={laminationImg} alt="Laminating croissant dough" width={1200} height={1500}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl" />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-butter px-5 py-4 text-ink shadow-lg sm:block">
            <div className="font-display text-3xl leading-none">81</div>
            <div className="text-xs uppercase tracking-widest">layers of butter</div>
          </div>
        </div>
      </section>

      {/* ORDER CHANNELS */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="container-prose">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Order in</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Come for one. Leave with six.</h2>
            <p className="mt-4 text-muted-foreground">
              Order on the website, ping us on WhatsApp, or have it delivered.
              We've probably just pulled a fresh tray.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Link to="/menu" className="group rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md">
              <div className="font-display text-2xl">Order on the site</div>
              <p className="mt-2 text-sm text-muted-foreground">Browse the menu, build a basket, checkout in under a minute.</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-crust">
                Start an order <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
            <a
              href={SITE.swiggyUrl} target="_blank" rel="noreferrer"
              className="group rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="font-display text-2xl">Order on Swiggy</div>
              <p className="mt-2 text-sm text-muted-foreground">30–40 min delivery across South Pune.</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-crust">
                Open Swiggy <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noreferrer"
              className="group rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="font-display text-2xl">Order on WhatsApp</div>
              <p className="mt-2 text-sm text-muted-foreground">Tell us what you'd like, we'll bake & box it.</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-crust">
                Chat now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section className="container-prose grid items-center gap-10 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        <img src={shopImg} alt="Inside Crosaaintwala & Co." width={1400} height={1000}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The shop</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Tucked into NIBM Road.</h2>
          <p className="mt-4 text-muted-foreground">{SITE.address}</p>
          <p className="mt-2 text-sm text-muted-foreground">{SITE.hours}</p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Find the shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
