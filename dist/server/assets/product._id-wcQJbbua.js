import { t as products } from "./products-DKnoCSzG.js";
import { t as Route } from "./product._id-CWloEUcK.js";
import { t as Reveal } from "./Reveal-MJVSwg-a.js";
import { t as ProductCard } from "./ProductCard-Cx_Ji2QO.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Heart, Minus, Plus, RotateCcw, Scissors, ShoppingBag, Truck } from "lucide-react";
//#region src/routes/product.$id.tsx?tsr-split=component
function ProductPage() {
	const { product } = Route.useLoaderData();
	const [active, setActive] = useState(0);
	const [size, setSize] = useState("M");
	const [qty, setQty] = useState(1);
	const gallery = [
		product.image,
		product.hover,
		product.image
	];
	const related = products.filter((p) => p.id !== product.id).slice(0, 4);
	return /* @__PURE__ */ jsx("div", {
		className: "pt-24 md:pt-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1600px] mx-auto px-6 md:px-10",
			children: [
				/* @__PURE__ */ jsxs("nav", {
					className: "eyebrow text-muted-foreground py-6 flex gap-2",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-foreground",
							children: "Home"
						}),
						" /",
						/* @__PURE__ */ jsx(Link, {
							to: "/shop",
							className: "hover:text-foreground",
							children: "Shop"
						}),
						" /",
						/* @__PURE__ */ jsx("span", { children: product.name })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-[64px_1fr] gap-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "hidden lg:flex flex-col gap-3",
							children: gallery.map((src, i) => /* @__PURE__ */ jsx("button", {
								onClick: () => setActive(i),
								className: `aspect-[3/4] overflow-hidden border-2 transition ${active === i ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100"}`,
								children: /* @__PURE__ */ jsx("img", {
									src,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}, i))
						}), /* @__PURE__ */ jsx("div", {
							className: "col-span-2 lg:col-span-1 overflow-hidden bg-muted aspect-[3/4] group",
							children: /* @__PURE__ */ jsx("img", {
								src: gallery[active],
								alt: product.name,
								className: "h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110 cursor-zoom-in"
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:sticky lg:top-32 lg:self-start",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "eyebrow text-muted-foreground mb-4",
								children: [product.category, " · AW26"]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "font-display text-4xl md:text-6xl leading-[1] mb-6",
								children: product.name
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-2xl tabular-nums mb-10",
								children: ["$", product.price.toLocaleString()]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground leading-relaxed mb-10 max-w-md",
								children: [
									"A quiet study in proportion and fabric. Cut in ",
									product.fabric.toLowerCase(),
									", finished by hand at our Lagos atelier in ",
									product.color.toLowerCase(),
									"."
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-8",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "eyebrow",
										children: "Size"
									}), /* @__PURE__ */ jsx("button", {
										className: "eyebrow text-muted-foreground hover-underline",
										children: "Size guide"
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"XS",
										"S",
										"M",
										"L",
										"XL"
									].map((s) => /* @__PURE__ */ jsx("button", {
										onClick: () => setSize(s),
										className: `min-w-12 h-12 px-4 border transition-colors eyebrow ${size === s ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`,
										children: s
									}, s))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-stretch gap-3 mb-8",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center border border-border",
										children: [
											/* @__PURE__ */ jsx("button", {
												onClick: () => setQty(Math.max(1, qty - 1)),
												className: "grid h-14 w-12 place-items-center hover:bg-muted",
												children: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ jsx("span", {
												className: "w-10 text-center tabular-nums",
												children: qty
											}),
											/* @__PURE__ */ jsx("button", {
												onClick: () => setQty(qty + 1),
												className: "grid h-14 w-12 place-items-center hover:bg-muted",
												children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
											})
										]
									}),
									/* @__PURE__ */ jsxs("button", {
										className: "flex-1 bg-foreground text-background eyebrow flex items-center justify-center gap-3 hover:bg-earth transition-colors",
										children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4" }), " Add to Bag"]
									}),
									/* @__PURE__ */ jsx("button", {
										"aria-label": "Wishlist",
										className: "grid w-14 place-items-center border border-border hover:border-foreground",
										children: /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-3 gap-4 py-6 border-y border-border text-center text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx(Truck, { className: "h-4 w-4 mx-auto" }), /* @__PURE__ */ jsxs("p", {
											className: "text-muted-foreground",
											children: [
												"Free global",
												/* @__PURE__ */ jsx("br", {}),
												"shipping"
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4 mx-auto" }), /* @__PURE__ */ jsxs("p", {
											className: "text-muted-foreground",
											children: [
												"30-day",
												/* @__PURE__ */ jsx("br", {}),
												"returns"
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx(Scissors, { className: "h-4 w-4 mx-auto" }), /* @__PURE__ */ jsxs("p", {
											className: "text-muted-foreground",
											children: [
												"Made in",
												/* @__PURE__ */ jsx("br", {}),
												"Lagos"
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 space-y-4 text-sm",
								children: [
									/* @__PURE__ */ jsxs(Detail, {
										title: "Fabric & Care",
										children: [product.fabric, ". Dry clean only. Store on a padded hanger, away from direct light."]
									}),
									/* @__PURE__ */ jsx(Detail, {
										title: "Shipping & Delivery",
										children: "Complimentary express shipping worldwide. Orders dispatched within 48 hours from our Lagos studio."
									}),
									/* @__PURE__ */ jsx(Detail, {
										title: "Sustainability",
										children: "Woven from responsibly sourced fibres. Repair service available for the lifetime of the piece."
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mt-32 md:mt-48",
					children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-muted-foreground mb-4",
						children: "Continue"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl md:text-5xl mb-12",
						children: "You may also love"
					})] }), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-14 md:gap-x-6 md:gap-y-20 pb-32",
						children: related.map((p, i) => /* @__PURE__ */ jsx(ProductCard, {
							product: p,
							index: i
						}, p.id))
					})]
				})
			]
		})
	});
}
function Detail({ title, children }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "border-b border-border",
		children: [/* @__PURE__ */ jsxs("button", {
			onClick: () => setOpen(!open),
			className: "w-full flex items-center justify-between py-4",
			children: [/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: title
			}), /* @__PURE__ */ jsx("span", {
				className: "text-lg",
				children: open ? "−" : "+"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: `grid transition-all duration-500 ${open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`,
			children: /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden text-muted-foreground leading-relaxed",
				children
			})
		})]
	});
}
//#endregion
export { ProductPage as component };
