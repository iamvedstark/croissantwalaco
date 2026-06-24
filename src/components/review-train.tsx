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
      <div className="absolute -left-3 top-1/2 z-10 h-2 w-4 -translate-y-1/2 rounded bg-ink" />

      <div className="relative w-[300px] sm:w-[340px]">
        {/* roof rail */}
        <div className="absolute -top-1 left-3 right-3 h-1.5 rounded-t-sm bg-ink" />
        {/* headlight (small white lamp on top, like the photo) */}
        <div className="absolute -top-3 left-1/2 h-2.5 w-4 -translate-x-1/2 rounded-t-full border border-ink bg-cream" />

        {/* yellow body */}
        <div className="relative rounded-t-md border-2 border-ink bg-[#f5c518] pt-3 shadow-lg">
          {/* two big square windows */}
          <div className="grid grid-cols-2 gap-2 px-3">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-sm border-[3px] border-ink bg-gradient-to-b from-[#cfd8d3] via-[#aab8b1] to-[#7d8b85]"
              >
                {/* faint reflection */}
                <div className="absolute inset-x-1 top-1 h-2 rounded-sm bg-cream/40" />
              </div>
            ))}
          </div>

          {/* review text printed on the yellow flank */}
          <div className="px-4 pb-3 pt-3">
            <p className="font-display text-[13px] leading-snug text-ink">
              "{text}"
            </p>
          </div>
        </div>

        {/* dark skirt with yellow chevron */}
        <div className="relative h-9 border-x-2 border-b-2 border-ink bg-[#1a1d1a]">
          {/* yellow chevron / triangle */}
          <div
            className="absolute left-1/2 top-1 h-0 w-0 -translate-x-1/2"
            style={{
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderTop: "12px solid #f5c518",
            }}
            aria-hidden
          />
          {/* reviewer plate */}
          <div className="flex h-full items-center justify-between px-4 text-[10px] uppercase tracking-[0.2em] text-[#f5c518]">
            <span>{name}</span>
            <span>★★★★★</span>
          </div>
        </div>
      </div>

      {/* wheels */}
      <div className="-mt-2 flex justify-between px-8">
        <Wheel />
        <Wheel />
      </div>
    </div>
  );
}

function Wheel() {
  return (
    <div className="relative h-6 w-6 rounded-full border-2 border-ink bg-[#1a1d1a]">
      <div className="absolute inset-1 rounded-full border border-cream/40" />
      <div className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-cream/60" />
      <div className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 bg-cream/60" />
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
