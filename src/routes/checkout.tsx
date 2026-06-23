import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Crosaaintwala & Co." },
      { name: "description", content: "Complete your croissant order. Pay on delivery or send via WhatsApp." },
    ],
  }),
  component: CheckoutPage,
});

const DELIVERY_FEE = 40;

function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const [loading, setLoading] = useState(false);

  const total = subtotal + (lines.length ? DELIVERY_FEE : 0);

  const buildOrderText = (orderNo: string) =>
    [
      `*New order — Crosaaintwala & Co.*`,
      `Order #${orderNo}`,
      ``,
      `*Items*`,
      ...lines.map((l) => `• ${l.name} × ${l.qty} — ₹${l.price * l.qty}`),
      ``,
      `Subtotal: ₹${subtotal}`,
      `Delivery: ₹${DELIVERY_FEE}`,
      `*Total: ₹${total}*`,
      ``,
      `*Customer*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      form.notes ? `Notes: ${form.notes}` : ``,
    ]
      .filter(Boolean)
      .join("\n");

  const submit = async (method: "pay" | "whatsapp") => {
    if (!form.name || !form.phone || !form.address) return;
    if (lines.length === 0) return;
    setLoading(true);
    const orderNo = `CW${Date.now().toString().slice(-6)}`;
    const eta = 35;
    const payload = {
      orderNo,
      eta,
      method,
      items: lines,
      subtotal,
      deliveryFee: DELIVERY_FEE,
      total,
      customer: form,
      createdAt: new Date().toISOString(),
    };
    try {
      sessionStorage.setItem("croissantwala_last_order", JSON.stringify(payload));
    } catch {}

    if (method === "whatsapp") {
      const text = buildOrderText(orderNo);
      window.open(
        `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank",
      );
    } else {
      // simulate payment delay
      await new Promise((r) => setTimeout(r, 900));
    }
    clear();
    navigate({ to: "/confirmation" });
  };

  if (lines.length === 0) {
    return (
      <div className="container-prose flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary">
          <ShoppingBag className="h-6 w-6 text-muted-foreground" />
        </div>
        <h1 className="mt-4 font-display text-3xl">Your basket is empty.</h1>
        <p className="mt-2 text-muted-foreground">Add a croissant or two before checking out.</p>
        <Link to="/menu" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
          Browse the menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container-prose py-12 md:py-16">
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Checkout</div>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">Almost in the oven.</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit("pay");
          }}
          className="space-y-6"
        >
          <section className="rounded-2xl bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl">Your details</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input required maxLength={80} value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input" />
              </Field>
              <Field label="Phone">
                <input required type="tel" maxLength={15} value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input" placeholder="+91" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Delivery address">
                  <textarea required maxLength={300} rows={3} value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="input resize-none" placeholder="Building, street, area, city, pincode" />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Order notes (optional)">
                  <input maxLength={200} value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="input" placeholder="Ring the bell, leave at door, etc." />
                </Field>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl">Payment</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This is a demo storefront — no real charges are made. Choose how you'd like to complete the order.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Processing..." : `Pay ₹${total} (simulated)`}
              </button>
              <button
                type="button"
                onClick={() => submit("whatsapp")}
                disabled={loading}
                className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
              >
                Send order on WhatsApp
              </button>
            </div>
          </section>
        </form>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-secondary/50 p-6 sm:p-8">
            <h2 className="font-display text-2xl">Order summary</h2>
            <ul className="mt-5 space-y-3">
              {lines.map((l) => (
                <li key={l.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-sm">
                  <span className="min-w-0 truncate">{l.name} × {l.qty}</span>
                  <span className="shrink-0 tabular-nums">₹{l.price * l.qty}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              <Row label="Subtotal" value={`₹${subtotal}`} />
              <Row label="Delivery" value={`₹${DELIVERY_FEE}`} />
              <Row label="Total" value={`₹${total}`} bold />
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .input { width:100%; border-radius: .5rem; border:1px solid var(--input); background: var(--background); padding: .625rem .75rem; font-size: .875rem; outline: none; }
        .input:focus { box-shadow: 0 0 0 2px var(--ring); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "text-base font-semibold" : "text-muted-foreground"}`}>
      <span>{label}</span>
      <span className="tabular-nums text-foreground">{value}</span>
    </div>
  );
}
