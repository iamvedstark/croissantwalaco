import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/confirmation")({
  head: () => ({
    meta: [
      { title: "Order confirmed — Crosaaintwala & Co." },
      { name: "description", content: "Your order is in the oven." },
    ],
  }),
  component: ConfirmationPage,
});

type Order = {
  orderNo: string;
  eta: number;
  method: "pay" | "whatsapp";
  items: { id: string; name: string; qty: number; price: number }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customer: { name: string; phone: string; address: string; notes?: string };
  createdAt: string;
};

function ConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("croissantwala_last_order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, []);

  if (!order) {
    return (
      <div className="container-prose flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="font-display text-3xl">No recent order found.</h1>
        <Link to="/menu" className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
          Start an order
        </Link>
      </div>
    );
  }

  const eta = new Date(Date.now() + order.eta * 60_000);
  const etaStr = eta.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="container-prose py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-butter/60 text-crust">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-5xl sm:text-6xl">Your order is in the oven.</h1>
        <p className="mt-4 text-muted-foreground">
          Thanks {order.customer.name.split(" ")[0]} — we've got it. A fresh tray is on the way.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Stat label="Order number" value={`#${order.orderNo}`} />
          <Stat label="Estimated delivery" value={`${order.eta} min · by ${etaStr}`} icon={<Clock className="h-4 w-4" />} />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-card p-6 shadow-sm sm:p-8">
        <h2 className="font-display text-2xl">Order details</h2>
        <ul className="mt-5 space-y-3 border-b border-border pb-5">
          {order.items.map((l) => (
            <li key={l.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-sm">
              <span className="min-w-0 truncate">{l.name} × {l.qty}</span>
              <span className="shrink-0 tabular-nums">₹{l.price * l.qty}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-5 space-y-2 text-sm">
          <Row label="Subtotal" value={`₹${order.subtotal}`} />
          <Row label="Delivery" value={`₹${order.deliveryFee}`} />
          <Row label="Total" value={`₹${order.total}`} bold />
        </dl>
        <div className="mt-6 rounded-xl bg-secondary/60 p-4 text-sm">
          <div className="font-medium">Delivering to</div>
          <div className="mt-1 text-muted-foreground">{order.customer.address}</div>
          <div className="mt-2 text-muted-foreground">{order.customer.phone}</div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
        <Link to="/menu" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
          Order something else
        </Link>
        <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-full border border-input px-5 py-2.5 text-sm font-medium hover:bg-secondary">
          Message us on WhatsApp
        </a>
      </div>
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-secondary/60 p-5 text-left">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-center gap-2 font-display text-2xl">
        {icon} {value}
      </div>
    </div>
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
