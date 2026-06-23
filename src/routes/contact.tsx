import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Contact — Crosaaintwala & Co." },
      { name: "description", content: "Visit Crosaaintwala & Co. at Shop No 9, Royal Kp Stellar, NIBM Road, Mohammed Wadi, Pune. Call, message, or drop by." },
      { property: "og:title", content: "Visit Crosaaintwala & Co." },
      { property: "og:description", content: "NIBM Road, Pune. Open 8:30 am — 11:30 pm daily." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name} (${form.email}). ${form.message}`;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div>
      <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
        <div className="container-prose max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Visit</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Come for one. Leave with six.</h1>
          <p className="mt-4 text-muted-foreground">
            Walk in, dial in, or drop us a message. We're open till late and we've probably
            just pulled a fresh tray.
          </p>
        </div>
      </section>

      <section className="container-prose grid gap-10 py-16 md:grid-cols-3">
        <InfoCard icon={<MapPin className="h-4 w-4" />} title="Address">
          <p className="text-sm leading-relaxed text-muted-foreground">{SITE.address}</p>
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-crust hover:underline">
            Get directions →
          </a>
        </InfoCard>
        <InfoCard icon={<Phone className="h-4 w-4" />} title="Call / WhatsApp">
          <a href={SITE.phoneHref} className="block text-sm text-muted-foreground hover:text-foreground">{SITE.phoneNumber}</a>
          <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-crust hover:underline">
            Message on WhatsApp →
          </a>
        </InfoCard>
        <InfoCard icon={<Clock className="h-4 w-4" />} title="Hours">
          <p className="text-sm text-muted-foreground">Open daily</p>
          <p className="mt-1 font-medium">8:30 am — 11:30 pm</p>
        </InfoCard>
      </section>

      <section className="container-prose grid gap-10 pb-20 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <iframe
            title="Map to Crosaaintwala & Co."
            src={SITE.mapEmbed}
            loading="lazy"
            className="h-[420px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-3xl">Send a note</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll reply via WhatsApp — usually within an hour during shop hours.
          </p>
          {submitted ? (
            <div className="mt-6 rounded-xl bg-butter/40 p-4 text-sm">
              Thanks, {form.name || "friend"} — opening WhatsApp now. If it didn't open,
              <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noreferrer" className="ml-1 font-medium text-crust hover:underline">tap here</a>.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <Field label="Your name">
                <input required maxLength={80} value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </Field>
              <Field label="Email or phone">
                <input required maxLength={120} value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </Field>
              <Field label="Message">
                <textarea required maxLength={1000} rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </Field>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Send via WhatsApp <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-butter/50 text-crust">{icon}</div>
      <div className="mt-4 font-display text-xl">{title}</div>
      <div className="mt-2">{children}</div>
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
