import { t as products } from "./products-DKnoCSzG.js";
import { t as Reveal } from "./Reveal-MJVSwg-a.js";
import { t as ProductCard } from "./ProductCard-Cx_Ji2QO.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
//#region src/routes/shop.tsx?tsr-split=component
var categories = [
	"All",
	"Women",
	"Men",
	"Bridal",
	"Accessories",
	"Outerwear"
];
function Shop() {
	const [cat, setCat] = useState("All");
	const [query, setQuery] = useState("");
	const [sort, setSort] = useState("featured");
	const [max, setMax] = useState(5e3);
	const filtered = useMemo(() => {
		let list = products.filter((p) => (cat === "All" || p.category === cat) && p.price <= max && (query === "" || p.name.toLowerCase().includes(query.toLowerCase())));
		if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
		if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
		return list;
	}, [
		cat,
		query,
		sort,
		max
	]);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("section", {
			className: "pt-36 md:pt-44 pb-12 md:pb-16 px-6 md:px-10 max-w-[1600px] mx-auto",
			children: /* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow text-muted-foreground mb-6",
				children: "The Shop · AW26"
			}), /* @__PURE__ */ jsxs("h1", {
				className: "font-display text-6xl md:text-8xl leading-[0.9]",
				children: ["The ", /* @__PURE__ */ jsx("span", {
					className: "italic",
					children: "Collection"
				})]
			})] })
		}),
		/* @__PURE__ */ jsx("section", {
			className: "sticky top-[68px] md:top-[76px] z-30 bg-background/85 backdrop-blur-xl border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-[1600px] mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center gap-4 md:gap-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-1 flex-wrap gap-x-6 gap-y-2 min-w-0",
						children: categories.map((c) => /* @__PURE__ */ jsx("button", {
							onClick: () => setCat(c),
							className: `eyebrow transition-colors ${cat === c ? "text-foreground border-b border-foreground pb-1" : "text-muted-foreground hover:text-foreground"}`,
							children: c
						}, c))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden md:flex items-center gap-2 text-xs",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "eyebrow text-muted-foreground",
							children: ["Under $", max]
						}), /* @__PURE__ */ jsx("input", {
							type: "range",
							min: 500,
							max: 5e3,
							step: 100,
							value: max,
							onChange: (e) => setMax(Number(e.target.value)),
							className: "accent-foreground w-32"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 border-b border-border pb-1",
						children: [/* @__PURE__ */ jsx(Search, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search",
							className: "bg-transparent outline-none text-sm w-32 placeholder:text-muted-foreground"
						})]
					}),
					/* @__PURE__ */ jsxs("select", {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "bg-transparent eyebrow border-b border-border pb-1 outline-none cursor-pointer",
						children: [
							/* @__PURE__ */ jsx("option", {
								value: "featured",
								children: "Sort · Featured"
							}),
							/* @__PURE__ */ jsx("option", {
								value: "low",
								children: "Price ↑"
							}),
							/* @__PURE__ */ jsx("option", {
								value: "high",
								children: "Price ↓"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 md:px-10 py-12 md:py-20 max-w-[1600px] mx-auto",
			children: filtered.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "text-center text-muted-foreground py-32",
				children: "No pieces match your filters."
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-14 md:gap-x-6 md:gap-y-20",
				children: filtered.map((p, i) => /* @__PURE__ */ jsx(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})
		})
	] });
}
//#endregion
export { Shop as component };
