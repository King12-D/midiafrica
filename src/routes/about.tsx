import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import craft from "@/assets/craft.jpg";
import cw from "@/assets/collection-women.jpg";
import cb from "@/assets/collection-bridal.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Midi Africa" },
      { name: "description", content: "The story of Midi Africa: founder, mission, craftsmanship and sustainability." },
      { property: "og:title", content: "About — Midi Africa" },
      { property: "og:description", content: "A modern love letter to African craft." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="pt-40 md:pt-56 pb-20 md:pb-32 px-6 md:px-10 max-w-5xl mx-auto">
        <Reveal>
          <p className="eyebrow text-muted-foreground mb-8">Est. 2018 · Lagos</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.95]">
            We make clothes the way our <span className="italic">grandmothers</span> made stories — slowly, deliberately, with love.
          </h1>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2 gap-4 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal className="aspect-[4/5] overflow-hidden">
          <img src={about} alt="Founder" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col justify-center md:pl-12 py-8">
          <p className="eyebrow text-muted-foreground mb-6">The Founder</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">Adaeze Okafor</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-lg">
            <p>Trained between Paris and Lagos, Adaeze founded Midi Africa in 2018 with a simple provocation: that African luxury deserved to be defined on its own terms, in its own language.</p>
            <p>Every collection since has been a study in contradiction — heritage and modernity, restraint and richness, quiet confidence and unmistakable presence.</p>
          </div>
        </Reveal>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="eyebrow text-muted-foreground mb-6">Mission</p>
          <p className="font-display text-3xl md:text-5xl leading-tight">
            To celebrate African craft as it is — not as translation, not as souvenir, but as one of the great luxury traditions of the world.
          </p>
        </Reveal>
      </section>

      <section className="relative min-h-[80vh] flex items-center bg-ink text-ivory overflow-hidden">
        <img src={craft} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <p className="eyebrow text-ivory/60 mb-6">Craftsmanship</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">Hand-finished. Hand-remembered.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-ivory/80 leading-relaxed">
            <p>Our atelier employs seventeen tailors, embroiderers and dyers. The youngest is twenty-three; the eldest has been sewing for fifty-one years.</p>
            <p>We produce fewer than 800 pieces a year. Each is cut once, fit twice, and finished with a hand-embroidered signature at the inner hem.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <p className="eyebrow text-muted-foreground mb-6">Timeline</p>
          <h2 className="font-display text-4xl md:text-6xl mb-16">A short history.</h2>
        </Reveal>
        <div className="grid gap-10">
          {[
            ["2018", "Founded", "The first Midi Africa atelier opens in Ikoyi, Lagos, with three tailors and a single collection of twelve pieces."],
            ["2020", "First Bridal Show", "The Aisha bridal capsule debuts at Arise Fashion Week, dressing brides from Lagos to Marrakech."],
            ["2022", "Paris Showroom", "A permanent showroom opens on rue Saint-Honoré, introducing Midi Africa to European clients."],
            ["2024", "The Bespoke Programme", "The made-to-measure programme formalises, offering fully bespoke tailoring across five continents."],
            ["2026", "AW26 · Volume I", "The new autumn/winter collection marks a return to the founder's earliest inspirations."],
          ].map(([year, title, body], i) => (
            <Reveal key={year as string} delay={i * 0.06} className="grid md:grid-cols-[120px_180px_1fr] gap-4 md:gap-12 border-t border-border pt-8">
              <span className="font-display text-3xl">{year}</span>
              <span className="eyebrow pt-2">{title}</span>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-1 pb-24">
        {[cw, cb, about, craft].map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={src} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1400ms]" loading="lazy" />
          </div>
        ))}
      </section>
    </div>
  );
}
