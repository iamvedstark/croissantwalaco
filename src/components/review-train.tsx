const REVIEWS = [
  { name: "Aanya R.", text: "The almond croissant ruined every other almond croissant for me. Worth the drive." },
  { name: "Karan M.", text: "81 layers of butter is not a marketing line — you can hear it shatter. Magic." },
  { name: "Priya S.", text: "Their paneer paprika at midnight saved my life. Open late, baked fresh." },
  { name: "Devan K.", text: "Tiny shop, massive heart. The chocolate spiral is a religious experience." },
  { name: "Meher J.", text: "Eggless and still the flakiest thing in Pune. How?! Don't care. Just keep baking." },
  { name: "Rohan T.", text: "Friendly staff, golden crusts, espresso that pulls its weight. Repeat visit guaranteed." },
];

export function ReviewTrain() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section
      aria-label="Customer reviews"
      className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-cream to-[#ecdfc8] py-12"
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

      {/* Station sign */}
      <div className="container-prose pointer-events-none relative z-10 mb-3 flex justify-center">
        <div className="rounded-md border border-ink/80 bg-[#1a3a8a] px-6 py-1.5 text-center shadow-md ring-1 ring-ink/20">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#f5c518]">Platform No. 1</div>
          <div className="font-display text-lg leading-tight text-cream">Crosaaintwala Jn.</div>
        </div>
      </div>

      {/* Scene */}
      <div className="relative pt-14">
        {/* Distant sky-band haze */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#d9c9a8]/0 to-[#c9b48a]/40" />

        {/* Station furniture (fixed, behind train) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-12 flex items-end justify-between px-4 sm:px-12">
          <StationLamp />
          <StationBench />
          <StationLamp />
          <StationClock />
          <StationBench />
          <StationLamp />
        </div>

        {/* Moving train */}
        <div className="relative z-10 flex animate-train items-end gap-2 will-change-transform">
          {loop.map((r, i) => (
            <Carriage key={i} name={r.name} text={r.text} index={i} />
          ))}
        </div>

        {/* Ballast (gravel bed) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-8"
          style={{
            background:
              "linear-gradient(to bottom, #8a7a5e 0%, #6b5b42 100%)",
          }}
        />
        {/* Sleepers */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-1 z-[1] h-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #3a2a18 0 10px, transparent 10px 34px)",
          }}
          aria-hidden
        />
        {/* Twin steel rails with highlight */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[18px] z-[2] h-[3px] bg-[#9aa0a6] shadow-[0_1px_0_#3a3f44]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-[10px] z-[2] h-[3px] bg-[#9aa0a6] shadow-[0_1px_0_#3a3f44]" />
      </div>

      <style>{`
        @keyframes train-roll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-train {
          animation: train-roll 32s linear infinite;
        }
        @keyframes wheel-spin {
          to { transform: rotate(-360deg); }
        }
        .wheel-spin { animation: wheel-spin 0.9s linear infinite; transform-origin: 50% 50%; }
        @media (prefers-reduced-motion: reduce) {
          .animate-train { animation-duration: 200s; }
          .wheel-spin { animation: none; }
        }
      `}</style>
    </section>
  );
}

function Carriage({ name, text, index }: { name: string; text: string; index: number }) {
  // Two body color variants for visual variety (deep ICF blue + slightly lighter)
  const bodyTop = index % 2 === 0 ? "#2552b8" : "#1f4aa8";
  const bodyMid = index % 2 === 0 ? "#1b3f95" : "#173885";
  const bodyBot = index % 2 === 0 ? "#102862" : "#0c2156";
  const coachNo = String(12000 + index * 137).slice(0, 5);

  return (
    <div className="relative shrink-0">
      <svg
        width="460"
        height="170"
        viewBox="0 0 460 170"
        className="block drop-shadow-[0_8px_8px_rgba(0,0,0,0.18)]"
      >
        <defs>
          <linearGradient id={`body-${index}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={bodyTop} />
            <stop offset="55%" stopColor={bodyMid} />
            <stop offset="100%" stopColor={bodyBot} />
          </linearGradient>
          <linearGradient id={`roof-${index}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8dade" />
            <stop offset="100%" stopColor="#8a8f96" />
          </linearGradient>
          <linearGradient id={`window-${index}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1a2a44" />
            <stop offset="50%" stopColor="#22405f" />
            <stop offset="100%" stopColor="#0d1726" />
          </linearGradient>
          <linearGradient id={`underframe-${index}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
        </defs>

        {/* Roof with curved top */}
        <path
          d="M 20 22 Q 230 8 440 22 L 440 30 L 20 30 Z"
          fill={`url(#roof-${index})`}
          stroke="#3a3f44"
          strokeWidth="0.8"
        />
        {/* Roof ribs */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={50 + i * 45}
            x2={50 + i * 45}
            y1="14"
            y2="29"
            stroke="#5a5f64"
            strokeWidth="0.5"
            opacity="0.6"
          />
        ))}
        {/* Roof vent boxes */}
        <rect x="120" y="10" width="40" height="8" rx="1" fill="#6a6f74" stroke="#3a3f44" strokeWidth="0.5" />
        <rect x="300" y="10" width="40" height="8" rx="1" fill="#6a6f74" stroke="#3a3f44" strokeWidth="0.5" />

        {/* Main body */}
        <rect x="10" y="30" width="440" height="88" fill={`url(#body-${index})`} stroke="#0a1a3a" strokeWidth="1" />

        {/* Top horizontal trim line (yellow stripe) */}
        <rect x="10" y="33" width="440" height="1.5" fill="#f5c518" opacity="0.85" />

        {/* Body highlight band */}
        <rect x="10" y="35" width="440" height="1" fill="#ffffff" opacity="0.15" />

        {/* Coach number plate top-left */}
        <rect x="22" y="40" width="34" height="10" fill="#0a0a0a" stroke="#f5c518" strokeWidth="0.5" />
        <text x="39" y="48" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#f5c518" fontWeight="700">
          {coachNo}
        </text>

        {/* Destination board (yellow) with reviewer name */}
        <rect x="180" y="40" width="100" height="12" fill="#f5c518" stroke="#0a0a0a" strokeWidth="0.7" />
        <text x="230" y="49" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="8" fill="#0a0a0a" fontWeight="700" letterSpacing="1.2">
          {name.toUpperCase()}
        </text>

        {/* Class indicator top-right */}
        <rect x="404" y="40" width="34" height="10" fill="#0a0a0a" stroke="#f5c518" strokeWidth="0.5" />
        <text x="421" y="48" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#f5c518" fontWeight="700">
          SL-A1
        </text>

        {/* Windows — recessed with frame */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 28 + i * 52;
          return (
            <g key={i}>
              {/* recess shadow */}
              <rect x={x - 1} y="57" width="42" height="26" fill="#06122a" />
              {/* glass */}
              <rect x={x} y="58" width="40" height="24" fill={`url(#window-${index})`} />
              {/* horizontal bar (shutter) */}
              <line x1={x} x2={x + 40} y1="70" y2="70" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.7" />
              {/* light reflection */}
              <polygon points={`${x + 2},59 ${x + 14},59 ${x + 6},81 ${x + 2},81`} fill="#ffffff" opacity="0.08" />
              <polygon points={`${x + 18},59 ${x + 22},59 ${x + 14},81 ${x + 10},81`} fill="#ffffff" opacity="0.05" />
              {/* frame */}
              <rect x={x} y="58" width="40" height="24" fill="none" stroke="#0a0a0a" strokeWidth="0.8" />
            </g>
          );
        })}

        {/* Review text panel */}
        <foreignObject x="20" y="88" width="420" height="26">
          <div
            style={{
              fontSize: "10px",
              lineHeight: "1.25",
              color: "#f5efdf",
              fontFamily: "ui-serif, Georgia, serif",
              fontStyle: "italic",
              padding: "2px 6px",
              textShadow: "0 1px 0 rgba(0,0,0,0.35)",
            }}
          >
            "{text}" <span style={{ color: "#f5c518", fontStyle: "normal", letterSpacing: 2 }}>★★★★★</span>
          </div>
        </foreignObject>

        {/* Lower trim — yellow stripe */}
        <rect x="10" y="115" width="440" height="2" fill="#f5c518" opacity="0.9" />

        {/* Underframe / solebar */}
        <rect x="6" y="118" width="448" height="14" fill={`url(#underframe-${index})`} stroke="#000" strokeWidth="0.8" />
        {/* underframe rivets */}
        {Array.from({ length: 22 }).map((_, i) => (
          <circle key={i} cx={18 + i * 20} cy="125" r="0.8" fill="#3a3a3a" />
        ))}

        {/* Couplers / buffers */}
        <rect x="0" y="122" width="8" height="6" fill="#7a7a7a" stroke="#000" strokeWidth="0.5" />
        <rect x="452" y="122" width="8" height="6" fill="#7a7a7a" stroke="#000" strokeWidth="0.5" />

        {/* Bogies (wheel trucks) */}
        <Bogie cx={80} />
        <Bogie cx={380} />
      </svg>
    </div>
  );
}

function Bogie({ cx }: { cx: number }) {
  return (
    <g>
      {/* bogie frame */}
      <rect x={cx - 38} y={130} width={76} height={10} rx={2} fill="#1a1a1a" stroke="#000" strokeWidth="0.6" />
      <rect x={cx - 36} y={132} width={72} height={2} fill="#3a3a3a" />
      {/* leaf springs */}
      <ellipse cx={cx - 22} cy={138} rx={10} ry={2} fill="#2a2a2a" />
      <ellipse cx={cx + 22} cy={138} rx={10} ry={2} fill="#2a2a2a" />
      {/* wheels */}
      <Wheel cx={cx - 22} cy={150} />
      <Wheel cx={cx + 22} cy={150} />
      {/* axle line */}
      <line x1={cx - 30} x2={cx + 30} y1={150} y2={150} stroke="#1a1a1a" strokeWidth="1" />
    </g>
  );
}

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {/* tyre */}
      <circle cx={cx} cy={cy} r="11" fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1" />
      {/* hub + spokes (spinning) */}
      <g className="wheel-spin" style={{ transformOrigin: `${cx}px ${cy}px` } as React.CSSProperties}>
        <circle cx={cx} cy={cy} r="8" fill="none" stroke="#5a5f64" strokeWidth="0.6" />
        <line x1={cx - 8} x2={cx + 8} y1={cy} y2={cy} stroke="#7a7f84" strokeWidth="1.2" />
        <line x1={cx} x2={cx} y1={cy - 8} y2={cy + 8} stroke="#7a7f84" strokeWidth="1.2" />
        <line x1={cx - 6} x2={cx + 6} y1={cy - 6} y2={cy + 6} stroke="#7a7f84" strokeWidth="1" />
        <line x1={cx - 6} x2={cx + 6} y1={cy + 6} y2={cy - 6} stroke="#7a7f84" strokeWidth="1" />
        <circle cx={cx} cy={cy} r="2" fill="#bfc4c9" />
      </g>
    </g>
  );
}

function StationLamp() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-2.5 w-7 rounded-sm border border-ink/70 bg-[#f5c518] shadow-[0_0_14px_rgba(245,197,24,0.7)]" />
      <div className="h-1 w-9 -mt-px rounded-sm border border-ink/70 bg-[#1a1a1a]" />
      <div className="h-20 w-[3px] bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]" />
      <div className="h-2 w-6 bg-[#1a1a1a] rounded-sm" />
    </div>
  );
}

function StationBench() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-2 w-20 rounded-[2px] border border-ink/70 bg-gradient-to-b from-[#9a5a2a] to-[#6e3d18]" />
      <div className="-mt-px h-2 w-20 border-x border-b border-ink/70 bg-[#5e3717]" />
      <div className="flex w-20 justify-between px-1.5">
        <div className="h-5 w-1 bg-[#1a1a1a]" />
        <div className="h-5 w-1 bg-[#1a1a1a]" />
      </div>
    </div>
  );
}

function StationClock() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-11 w-11 rounded-full border-2 border-ink/80 bg-cream shadow-md">
        {/* ticks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[14px] w-[1px] origin-bottom -translate-x-1/2 -translate-y-[14px] bg-ink/70"
            style={{ transform: `translate(-50%, -100%) rotate(${i * 30}deg) translateY(-4px)` }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-3.5 w-[2px] -translate-x-1/2 -translate-y-full bg-ink" />
        <div className="absolute left-1/2 top-1/2 h-[2px] w-3 -translate-y-1/2 bg-ink" />
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
      </div>
      <div className="h-14 w-1 bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]" />
      <div className="h-2 w-7 bg-[#1a1a1a] rounded-sm" />
    </div>
  );
}
