import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import craft from "@/assets/craft.jpg";
import cb from "@/assets/collection-bridal.jpg";
import cw from "@/assets/collection-women.jpg";
import cm from "@/assets/collection-men.jpg";

export const Route = createFileRoute("/bespoke")({
  head: () => ({
    meta: [
      { title: "Bespoke — Midi Africa" },
      { name: "description", content: "Request a custom-made Midi Africa piece. Private consultations, measurements, and appointments." },
      { property: "og:title", content: "Bespoke — Midi Africa" },
      { property: "og:description", content: "Made for you, by hand, in our Lagos atelier." },
    ],
  }),
  component: Bespoke,
});

function Bespoke() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="relative min-h-[80svh] flex items-end px-6 md:px-10 pt-32 pb-16 md:pb-24 overflow-hidden bg-ink text-ivory">
        <img src={craft} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="relative max-w-6xl">
          <Reveal>
            <p className="eyebrow text-ivory/70 mb-8">Bespoke Atelier</p>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.9]">
              Made <span className="italic">for you</span>.
            </h1>
            <p className="mt-8 max-w-lg text-ivory/80">
              An intimate, months-long conversation between you and our creative team — resulting in a single piece cut, fit and finished entirely by hand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 md:px-10 max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 md:gap-16">
        {[
          ["01", "Consultation", "A private conversation — in person or over video — to understand the piece, the occasion, and you."],
          ["02", "Design & Fitting", "Sketches, fabric swatches, and up to five fittings at our atelier or in your city."],
          ["03", "Delivery", "Your piece is delivered by hand, in a custom box, with a lifetime repair guarantee."],
        ].map(([n, t, b], i) => (
          <Reveal key={n as string} delay={i * 0.1} className="border-t border-border pt-6">
            <p className="font-display text-4xl mb-8">{n}</p>
            <h3 className="font-display text-2xl mb-3">{t}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{b}</p>
          </Reveal>
        ))}
      </section>

      <section className="pb-24 md:pb-40 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <p className="eyebrow text-muted-foreground mb-6">Portfolio</p>
          <h2 className="font-display text-4xl md:text-6xl mb-12">Recent commissions.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {[cb, cw, cm].map((src, i) => (
            <Reveal key={i} delay={i * 0.08} className="aspect-[3/4] overflow-hidden group">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1400ms]" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-muted-foreground mb-6">Book a Consultation</p>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
                Begin a <span className="italic">conversation</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                We accept a limited number of bespoke commissions each season. Share a few details and our atelier will be in touch within 48 hours.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="border border-border p-10 text-center">
                <p className="font-display text-2xl mb-3">Thank you.</p>
                <p className="text-muted-foreground">We will be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid gap-6"
              >
                <Field label="Full name"><input required className="input" /></Field>
                <Field label="Email"><input type="email" required className="input" /></Field>
                <Field label="City"><input className="input" /></Field>
                <Field label="Occasion">
                  <select className="input">
                    <option>Bridal</option>
                    <option>Event</option>
                    <option>Everyday luxury</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Preferred date"><input type="date" className="input" /></Field>
                <Field label="Tell us about the piece"><textarea rows={4} className="input resize-none" /></Field>
                <button className="mt-4 bg-foreground text-background eyebrow py-4 hover:bg-earth transition-colors">
                  Request Consultation →
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <style>{`.input{width:100%;background:transparent;border:0;border-bottom:1px solid var(--border);padding:0.75rem 0;outline:none;font-size:0.95rem;transition:border-color .3s} .input:focus{border-color:var(--foreground)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground block mb-1">{label}</span>
      {children}
    </label>
  );
}
