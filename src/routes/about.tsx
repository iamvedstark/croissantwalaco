import { createFileRoute } from "@tanstack/react-router";
import laminationImg from "@/assets/lamination.jpg";
import shopImg from "@/assets/shop-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Crosaaintwala & Co." },
      { name: "description", content: "The story of a tiny croissanterie in Mohammed Wadi, Pune — 81 layers of French butter, baked patiently, all day." },
      { property: "og:title", content: "About — Crosaaintwala & Co." },
      { property: "og:description", content: "A small shop with big butter energy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const team = [
    { name: "Yusuf", role: "Head Baker", initial: "Y" },
    { name: "Aisha", role: "Pastry Chef", initial: "A" },
    { name: "Ravi", role: "Barista", initial: "R" },
    { name: "Sara", role: "Front of House", initial: "S" },
  ];

  return (
    <div>
      <section className="border-b border-border bg-secondary/40 py-16 md:py-24">
        <div className="container-prose max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The story</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">A small shop with big butter energy.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We laminate, proof, and bake every croissant in-house, in small batches, all day.
            No shortcuts, no day-olds — just the slow, patient theatre of flour, French butter, and time.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether it's a chocolate spiral with your morning espresso or a paneer paprika at midnight,
            we built this place for the in-between hours.
          </p>
        </div>
      </section>

      <section className="container-prose grid items-center gap-10 py-20 md:grid-cols-2">
        <img src={laminationImg} alt="Laminating dough" width={1200} height={1500}
          loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl" />
        <div>
          <h2 className="font-display text-4xl">81 layers, every single morning.</h2>
          <p className="mt-4 text-muted-foreground">
            Each croissant takes nearly three days from mix to bake. We import French cultured butter,
            roll it cold into our dough, and fold — three single turns, three double turns — until
            we count eighty-one buttery sheets.
          </p>
          <p className="mt-4 text-muted-foreground">
            Then we proof slowly, bake hot, and serve them while they still crackle.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-prose">
          <h2 className="font-display text-4xl sm:text-5xl">The team</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A small crew, mostly covered in flour, occasionally caffeinated.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <div className="mx-auto grid aspect-square w-full max-w-[200px] place-items-center rounded-2xl bg-butter/40 font-display text-7xl text-crust">
                  {t.initial}
                </div>
                <div className="mt-4 font-display text-xl">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose grid items-center gap-10 py-20 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-4xl">Operating hours</h2>
          <p className="mt-4 text-muted-foreground">Open every single day. Yes, even Sundays.</p>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {[
              ["Monday — Friday", "8:30 am — 11:30 pm"],
              ["Saturday", "8:30 am — 11:30 pm"],
              ["Sunday", "8:30 am — 11:30 pm"],
            ].map(([day, time]) => (
              <div key={day} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
                <dt className="text-sm text-muted-foreground">{day}</dt>
                <dd className="font-medium tabular-nums">{time}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img src={shopImg} alt="Inside the shop" width={1400} height={1000}
          loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
      </section>
    </div>
  );
}
