const REVIEWS = [
  { name: "Aanya R.", text: "The almond croissant ruined every other almond croissant for me. Worth the drive." },
  { name: "Karan M.", text: "81 layers of butter is not a marketing line — you can hear it shatter. Magic." },
  { name: "Priya S.", text: "Their paneer paprika at midnight saved my life. Open late, baked fresh." },
  { name: "Devan K.", text: "Tiny shop, massive heart. The chocolate spiral is a religious experience." },
  { name: "Meher J.", text: "Eggless and still the flakiest thing in Pune. How?! Don't care. Just keep baking." },
  { name: "Rohan T.", text: "Friendly staff, golden crusts, espresso that pulls its weight. Repeat visit guaranteed." },
];

export function ReviewTrain() {
  // Duplicate so the marquee loops seamlessly
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section
      aria-label="Customer reviews"
      className="relative overflow-hidden border-t border-border/60 bg-cream py-12"
    >
      <div className="container-prose mb-6 flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            On the rails
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Reviews, rolling in.
          </h2>
        </div>
        <div className="hidden text-xs text-muted-foreground sm:block">
          4.7 ★ · 109 reviews
        </div>
      </div>

      {/* Track */}
      <div className="relative">
        {/* rails */}
        <div className="pointer-events-none absolute inset-x-0 bottom-3 h-[2px] bg-ink/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-6 h-[2px] bg-ink/70" />
        {/* sleepers */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3 opacity-60"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--ink) 0 6px, transparent 6px 28px)",
          }}
          aria-hidden
        />

        {/* moving train */}
        <div className="flex animate-train items-end gap-4 py-2 will-change-transform">
          <Locomotive />
          {loop.map((r, i) => (
            <Carriage key={i} name={r.name} text={r.text} />
          ))}
          <Locomotive className="rotate-180" />
        </div>
      </div>

      <style>{`
        @keyframes train-roll {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-50%); }
        }
        .animate-train {
          animation: train-roll 60s linear infinite;
        }
        .animate-train:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .animate-train { animation-duration: 180s; }
        }
      `}</style>
    </section>
  );
}

function Carriage({ name, text }: { name: string; text: string }) {
  return (
    <div className="relative shrink-0">
      {/* coupler */}
      <div className="absolute -left-4 top-1/2 h-1.5 w-4 -translate-y-1/2 rounded bg-ink/70" />
      {/* body */}
      <div className="relative w-[280px] rounded-lg border-2 border-ink/80 bg-[#1d4ed8] p-4 text-cream shadow-lg sm:w-[320px]">
        {/* roof */}
        <div className="absolute -top-2 left-2 right-2 h-2 rounded-t bg-ink/80" />
        {/* windows strip (decorative) */}
        <div className="mb-3 flex gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-3 flex-1 rounded-sm border border-cream/40 bg-cream/15"
            />
          ))}
        </div>
        <p className="text-sm leading-snug text-cream">"{text}"</p>
        <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-widest text-cream/70">
          <span>{name}</span>
          <span>★★★★★</span>
        </div>
      </div>
      {/* wheels */}
      <div className="mt-1 flex justify-between px-6">
        <Wheel />
        <Wheel />
      </div>
    </div>
  );
}

function Wheel() {
  return (
    <div className="relative h-5 w-5 rounded-full border-2 border-ink bg-cream">
      <div className="absolute inset-1 rounded-full border border-ink/60" />
    </div>
  );
}

function Locomotive({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className="relative w-[220px]">
        {/* cabin */}
        <div className="ml-auto h-[70px] w-[110px] rounded-t-lg border-2 border-ink/80 bg-[#1e3a8a] shadow-lg">
          <div className="mx-3 mt-3 h-7 rounded-sm border border-cream/40 bg-cream/20" />
        </div>
        {/* boiler */}
        <div className="-mt-px flex items-end">
          <div className="h-3 w-3" />
          <div className="relative h-[46px] flex-1 rounded-l-md border-2 border-ink/80 bg-[#1d4ed8]">
            {/* smokestack */}
            <div className="absolute -top-5 left-4 h-5 w-5 rounded-sm border-2 border-ink/80 bg-ink" />
            {/* headlight */}
            <div className="absolute right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-ink bg-butter" />
          </div>
        </div>
        {/* wheels */}
        <div className="mt-1 flex items-center gap-3 px-2">
          <BigWheel />
          <BigWheel />
          <Wheel />
        </div>
        {/* smoke puffs */}
        <div className="absolute -top-10 left-2 flex gap-1 opacity-80" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-muted-foreground/50" />
          <span className="h-4 w-4 rounded-full bg-muted-foreground/40" />
          <span className="h-5 w-5 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
    </div>
  );
}

function BigWheel() {
  return (
    <div className="relative h-7 w-7 rounded-full border-2 border-ink bg-cream">
      <div className="absolute inset-1 rounded-full border border-ink/60" />
      <div className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-ink/70" />
      <div className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-ink/70" />
    </div>
  );
}
