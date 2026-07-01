import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { Search } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Midi Africa" },
      { name: "description", content: "Discover the Midi Africa collection: elegant, timeless, contemporary African luxury." },
      { property: "og:title", content: "Shop — Midi Africa" },
      { property: "og:description", content: "Discover the collection: elegant, timeless, contemporary African luxury." },
    ],
  }),
  component: Shop,
});

const categories = ["All", "Women", "Men", "Bridal", "Accessories", "Outerwear"] as const;

function Shop() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");
  const [max, setMax] = useState(5000);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      (cat === "All" || p.category === cat) &&
      p.price <= max &&
      (query === "" || p.name.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, query, sort, max]);

  return (
    <div>
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <p className="eyebrow text-muted-foreground mb-6">The Shop · AW26</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9]">
            The <span className="italic">Collection</span>
          </h1>
        </Reveal>
      </section>

      <section className="sticky top-[68px] md:top-[76px] z-30 bg-background/85 backdrop-blur-xl border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex flex-1 flex-wrap gap-x-6 gap-y-2 min-w-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`eyebrow transition-colors ${
                  cat === c ? "text-foreground border-b border-foreground pb-1" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="eyebrow text-muted-foreground">Under ${max}</span>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="accent-foreground w-32"
            />
          </div>

          <div className="flex items-center gap-2 border-b border-border pb-1">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-32 placeholder:text-muted-foreground"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "featured" | "low" | "high")}
            className="bg-transparent eyebrow border-b border-border pb-1 outline-none cursor-pointer"
          >
            <option value="featured">Sort · Featured</option>
            <option value="low">Price ↑</option>
            <option value="high">Price ↓</option>
          </select>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12 md:py-20 max-w-[1600px] mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-32">No pieces match your filters.</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-14 md:gap-x-6 md:gap-y-20">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
