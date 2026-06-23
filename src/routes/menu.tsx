import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CATEGORIES, MENU, type MenuItem } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Crosaaintwala & Co." },
      { name: "description", content: "Eggless croissants, croissant sandwiches, mini pizzas, and coffee. Freshly baked all day in Mohammed Wadi, Pune." },
      { property: "og:title", content: "Menu — Crosaaintwala & Co." },
      { property: "og:description", content: "Sweet, savoury, always flaky. Freshly baked all day." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [activeCat, setActiveCat] = useState<string>(CATEGORIES[0].id);

  return (
    <div>
      <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
        <div className="container-prose">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The menu</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Sweet, savoury, always flaky.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            All croissants 100% eggless. Baked in small batches through the day.
          </p>
        </div>
      </section>

      {/* sticky category bar */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="container-prose flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={() => setActiveCat(c.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm transition ${
                activeCat === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>

      <div className="container-prose py-12">
        {CATEGORIES.map((cat) => {
          const items = MENU.filter((m) => m.category === cat.id);
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-32 py-10 first:pt-4">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl">{cat.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.note}</p>
                </div>
              </div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  return (
    <li className="bg-card p-5 transition hover:bg-card/80">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <h3 className="truncate font-display text-lg">{item.name}</h3>
            <span className="ml-auto shrink-0 font-medium tabular-nums text-foreground">₹{item.price}</span>
          </div>
          {item.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => addItem(item)}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
      >
        <Plus className="h-3.5 w-3.5" /> Add to cart
      </button>
    </li>
  );
}
