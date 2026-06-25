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
          {loop.map((r, i) => (
            <Carriage key={i} name={r.name} text={r.text} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes train-roll {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-50%); }
        }
        .animate-train {
          animation: train-roll 40s linear infinite;
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
      <div className="relative w-[420px] sm:w-[460px]">
        {/* grey roof */}
        <div className="h-3 rounded-t-md border-2 border-b-0 border-ink bg-[#b8b8b8]" />

        {/* main blue body */}
        <div className="relative flex border-2 border-ink bg-[#1d4ed8] shadow-lg">
          {/* left vestibule */}
          <Vestibule side="left" />

          {/* middle section */}
          <div className="flex flex-1 flex-col">
            {/* yellow destination board with reviewer name */}
            <div className="mx-auto mt-2 w-1/2 rounded-sm border border-ink bg-[#f5c518] px-2 py-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-ink">
              {name}
            </div>

            {/* window strip */}
            <div className="mt-2 grid grid-cols-7 gap-1 px-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-[2px] border border-ink bg-[#0b1e3f]"
                >
                  <div className="mx-0.5 mt-0.5 h-0.5 rounded-sm bg-cream/30" />
                </div>
              ))}
            </div>

            {/* review text — printed on the body below the windows */}
            <div className="px-3 pb-2 pt-2">
              <p className="text-[11px] leading-snug text-cream">"{text}"</p>
              <div className="mt-1 text-[9px] tracking-widest text-[#f5c518]">★★★★★</div>
            </div>
          </div>

          {/* right vestibule */}
          <Vestibule side="right" />
        </div>

        {/* underframe */}
        <div className="relative h-3 border-x-2 border-b-2 border-ink bg-[#0b1e3f]">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-cream/20" />
        </div>

        {/* bogies / wheel trucks */}
        <div className="-mt-1 flex justify-between px-10">
          <WheelTruck />
          <WheelTruck />
        </div>
      </div>
    </div>
  );
}

function Vestibule({ side }: { side: "left" | "right" }) {
  const borderClass = side === "left" ? "border-r-2" : "border-l-2";
  return (
    <div className={`relative w-9 shrink-0 ${borderClass} border-ink bg-[#15347a]`}>
      {/* vestibule door window */}
      <div className="mx-1.5 mt-2 h-10 rounded-sm border border-ink bg-[#0b1e3f]">
        <div className="mx-0.5 mt-0.5 h-0.5 rounded bg-cream/30" />
      </div>
      {/* buffer (the silver knob sticking out the end) */}
      <div
        className={`absolute top-1/2 h-3 w-2 -translate-y-1/2 rounded-sm border border-ink bg-[#c8c8c8] ${
          side === "left" ? "-left-2" : "-right-2"
        }`}
      />
    </div>
  );
}

function WheelTruck() {
  return (
    <div className="flex items-center gap-1">
      <Wheel />
      <Wheel />
    </div>
  );
}

function Wheel() {
  return (
    <div className="relative h-5 w-5 rounded-full border-2 border-ink bg-[#1a1d1a]">
      <div className="absolute inset-1 rounded-full border border-cream/40" />
      <div className="absolute left-1/2 top-1/2 h-2.5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-cream/60" />
      <div className="absolute left-1/2 top-1/2 h-0.5 w-2.5 -translate-x-1/2 -translate-y-1/2 bg-cream/60" />
    </div>
  );
}

