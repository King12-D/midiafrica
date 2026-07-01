import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Midi Africa" },
      { name: "description", content: "Contact Midi Africa: email, WhatsApp, Instagram, and our Lagos flagship." },
      { property: "og:title", content: "Contact — Midi Africa" },
      { property: "og:description", content: "Reach the atelier." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="pt-32 md:pt-44">
      <section className="px-6 md:px-10 max-w-[1600px] mx-auto pb-16 md:pb-24">
        <Reveal>
          <p className="eyebrow text-muted-foreground mb-6">Client Care</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
            Say <span className="italic">hello</span>.
          </h1>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2 border-t border-border">
        <div className="p-6 md:p-16 border-b md:border-b-0 md:border-r border-border">
          <Reveal>
            <p className="eyebrow text-muted-foreground mb-8">Write to us</p>
            {sent ? (
              <div className="py-20 text-center">
                <p className="font-display text-3xl mb-3">Message received.</p>
                <p className="text-muted-foreground">We'll reply within one working day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-6 max-w-lg">
                <Field label="Name"><input required className="cinput" /></Field>
                <Field label="Email"><input required type="email" className="cinput" /></Field>
                <Field label="Subject"><input className="cinput" /></Field>
                <Field label="Message"><textarea rows={5} className="cinput resize-none" /></Field>
                <button className="mt-4 bg-foreground text-background eyebrow py-4 hover:bg-earth transition-colors">
                  Send Message →
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <div className="p-6 md:p-16 space-y-10">
          <Reveal>
            <p className="eyebrow text-muted-foreground mb-6">Reach us</p>
            <ul className="space-y-6">
              <ChannelRow icon={Mail} label="Email" value="atelier@midi.africa" href="mailto:atelier@midi.africa" />
              <ChannelRow icon={MessageCircle} label="WhatsApp" value="+234 800 000 0000" href="#" />
              <ChannelRow icon={Instagram} label="Instagram" value="@midi.africa" href="#" />
              <ChannelRow icon={MapPin} label="Flagship" value="12 Awolowo Road, Ikoyi, Lagos" href="#" />
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-muted-foreground mb-4">Hours</p>
            <p className="text-muted-foreground leading-relaxed">
              Monday – Saturday · 10:00 – 19:00 WAT<br />
              Sunday · by appointment
            </p>
          </Reveal>

          <Reveal delay={0.15} className="aspect-[4/3] overflow-hidden border border-border">
            <iframe
              title="Midi Africa Lagos"
              className="h-full w-full grayscale"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.42%2C6.44%2C3.46%2C6.46&layer=mapnik"
            />
          </Reveal>
        </div>
      </section>

      <style>{`.cinput{width:100%;background:transparent;border:0;border-bottom:1px solid var(--border);padding:0.75rem 0;outline:none;font-size:0.95rem;transition:border-color .3s} .cinput:focus{border-color:var(--foreground)}`}</style>
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

function ChannelRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; value: string; href: string }) {
  return (
    <li>
      <a href={href} className="group flex items-start gap-4 border-b border-border pb-6">
        <Icon className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.3} />
        <div className="flex-1">
          <p className="eyebrow text-muted-foreground mb-1">{label}</p>
          <p className="font-display text-2xl group-hover:italic transition-all">{value}</p>
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </a>
    </li>
  );
}
