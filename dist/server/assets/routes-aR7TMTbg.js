import { n as collection_accessories_default, t as products } from "./products-DKnoCSzG.js";
import { n as collection_women_default, t as collection_bridal_default } from "./collection-bridal-CR1C4jIR.js";
import { t as collection_men_default } from "./collection-men-CPe9cHT-.js";
import { t as about_default } from "./about-C9qHIQen.js";
import { t as craft_default } from "./craft-CPON8fan.js";
import { t as Reveal } from "./Reveal-MJVSwg-a.js";
import { t as ProductCard } from "./ProductCard-Cx_Ji2QO.js";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Globe2, Leaf, Scissors, Sparkles, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-DASurBvw.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(Marquee, {}),
		/* @__PURE__ */ jsx(Collections, {}),
		/* @__PURE__ */ jsx(FeaturedProducts, {}),
		/* @__PURE__ */ jsx(AboutStrip, {}),
		/* @__PURE__ */ jsx(Craft, {}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx(Instagram$1, {})
	] });
}
function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ jsxs("section", {
		ref,
		className: "relative h-[100svh] min-h-[680px] overflow-hidden bg-ink text-ivory",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				style: {
					y,
					scale
				},
				className: "absolute inset-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: hero_default,
					alt: "Midi Africa Autumn Collection",
					className: "h-full w-full object-cover opacity-90",
					fetchPriority: "high"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" })]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				style: { opacity },
				className: "relative z-10 flex flex-col h-full px-6 md:px-10 pt-32 md:pt-40 pb-12 max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx(motion.p, {
					initial: {
						y: 20,
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					transition: {
						delay: .2,
						duration: .8
					},
					className: "eyebrow text-ivory/70",
					children: "Autumn / Winter 2026 — Volume I"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-auto max-w-4xl",
					children: [
						/* @__PURE__ */ jsxs(motion.h1, {
							initial: {
								y: 40,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							transition: {
								delay: .35,
								duration: 1.1,
								ease: [
									.7,
									0,
									.2,
									1
								]
							},
							className: "font-display text-[13vw] md:text-[7.5vw] leading-[0.92] tracking-[-0.02em]",
							children: [
								"Redefining ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "italic text-ivory/90",
									children: "African"
								}),
								" Luxury."
							]
						}),
						/* @__PURE__ */ jsx(motion.p, {
							initial: {
								y: 20,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							transition: {
								delay: .7,
								duration: .9
							},
							className: "mt-6 md:mt-10 max-w-lg text-base md:text-lg text-ivory/80 leading-relaxed",
							children: "Where timeless craftsmanship meets contemporary elegance. Made slowly, in limited numbers, by hands that have practiced for generations."
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								y: 20,
								opacity: 0
							},
							animate: {
								y: 0,
								opacity: 1
							},
							transition: {
								delay: .9,
								duration: .9
							},
							className: "mt-10 flex flex-col sm:flex-row gap-3",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/shop",
								className: "group inline-flex items-center justify-between gap-6 bg-ivory text-ink px-8 py-4 eyebrow hover:bg-gold transition-colors duration-500",
								children: ["Explore Collection", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/bespoke",
								className: "group inline-flex items-center justify-between gap-6 border border-ivory/40 text-ivory px-8 py-4 eyebrow hover:bg-ivory/10 transition-colors duration-500",
								children: ["Book Consultation", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				style: { opacity },
				className: "absolute bottom-6 right-6 md:right-10 z-10 hidden md:flex items-center gap-3 text-ivory/70",
				children: [/* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "Scroll"
				}), /* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-ivory/40 animate-pulse" })]
			})
		]
	});
}
function Marquee() {
	const items = [
		"Handcrafted in Lagos",
		"Since 2018",
		"Slow Fashion",
		"Limited Editions",
		"Ethically Sourced",
		"Global Delivery"
	];
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border py-6 overflow-hidden bg-background",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex marquee-track whitespace-nowrap eyebrow text-muted-foreground",
			children: [...items, ...items].map((t, i) => /* @__PURE__ */ jsxs("span", {
				className: "mx-10 inline-flex items-center gap-10",
				children: [
					t,
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "✦"
					})
				]
			}, i))
		})
	});
}
function Collections() {
	return /* @__PURE__ */ jsxs("section", {
		className: "px-6 md:px-10 py-24 md:py-40 max-w-[1600px] mx-auto",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-end justify-between gap-8 mb-12 md:mb-20",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow text-muted-foreground mb-4",
				children: "The Collections"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-5xl md:text-7xl leading-[0.95] max-w-2xl",
				children: [
					"Five worlds, one ",
					/* @__PURE__ */ jsx("span", {
						className: "italic",
						children: "philosophy"
					}),
					"."
				]
			})] }), /* @__PURE__ */ jsx(Reveal, {
				delay: .15,
				className: "hidden md:block",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/shop",
					className: "eyebrow hover-underline",
					children: "View All →"
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-12 md:auto-rows-[28rem] gap-3 md:gap-4",
			children: [
				{
					title: "Women",
					tag: "AW26",
					image: collection_women_default,
					span: "md:col-span-8 md:row-span-2"
				},
				{
					title: "Bridal",
					tag: "Atelier",
					image: collection_bridal_default,
					span: "md:col-span-4"
				},
				{
					title: "Accessories",
					tag: "Essentials",
					image: collection_accessories_default,
					span: "md:col-span-4"
				},
				{
					title: "Men",
					tag: "AW26",
					image: collection_men_default,
					span: "md:col-span-6"
				},
				{
					title: "Bespoke",
					tag: "Made to Measure",
					image: craft_default,
					span: "md:col-span-6"
				}
			].map((c, i) => /* @__PURE__ */ jsx(Reveal, {
				delay: i * .08,
				className: `group relative overflow-hidden ${c.span} h-[70vh] md:h-auto`,
				children: /* @__PURE__ */ jsxs(Link, {
					to: "/shop",
					className: "block h-full",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: c.image,
							alt: c.title,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 text-ivory flex items-end justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "eyebrow text-ivory/70 mb-2",
								children: c.tag
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-4xl md:text-5xl",
								children: c.title
							})] }), /* @__PURE__ */ jsx("div", {
								className: "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500",
								children: /* @__PURE__ */ jsx("div", {
									className: "grid h-12 w-12 place-items-center rounded-full bg-ivory text-ink",
									children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5" })
								})
							})]
						})
					]
				})
			}, c.title))
		})]
	});
}
function FeaturedProducts() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 md:px-10 py-24 md:py-32 bg-muted/40 border-y border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1600px] mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between gap-8 mb-12 md:mb-16",
				children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-muted-foreground mb-4",
					children: "Featured"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl md:text-6xl leading-tight max-w-xl",
					children: [
						"Objects of quiet ",
						/* @__PURE__ */ jsx("span", {
							className: "italic",
							children: "devotion"
						}),
						"."
					]
				})] }), /* @__PURE__ */ jsx(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/shop",
						className: "eyebrow hover-underline",
						children: "Shop All →"
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-14 md:gap-x-6 md:gap-y-20",
				children: products.slice(0, 8).map((p, i) => /* @__PURE__ */ jsx(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})]
		})
	});
}
function AboutStrip() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 md:px-10 py-24 md:py-40 max-w-[1600px] mx-auto",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 md:gap-20 md:grid-cols-2 items-center",
			children: [/* @__PURE__ */ jsx(Reveal, {
				className: "relative aspect-[4/5] overflow-hidden order-2 md:order-1",
				children: /* @__PURE__ */ jsx("img", {
					src: about_default,
					alt: "Midi Africa atelier",
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "order-1 md:order-2 md:pl-8 lg:pl-16",
				children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-muted-foreground mb-6",
					children: "Our House"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl md:text-6xl leading-[1] mb-8",
					children: [
						"A modern love letter to the ",
						/* @__PURE__ */ jsx("span", {
							className: "italic",
							children: "continent"
						}),
						"."
					]
				})] }), /* @__PURE__ */ jsxs(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg mb-6",
							children: "Founded in Lagos in 2018, Midi Africa began as a conversation between old-world tailoring and new African confidence — between the ancestral gestures of West African textile masters and the discipline of contemporary Parisian ateliers."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg mb-10",
							children: "Every piece we make is a slow, considered act: dyed by hand, cut with intention, finished by artisans we know by name."
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "eyebrow hover-underline",
							children: "Read Our Story →"
						})
					]
				})]
			})]
		})
	});
}
function Craft() {
	const pillars = [
		{
			icon: Scissors,
			title: "Handcrafted",
			body: "Each garment is cut and finished by hand in our Lagos atelier."
		},
		{
			icon: Leaf,
			title: "Sustainable",
			body: "Deadstock silks, plant dyes, and repair-first design principles."
		},
		{
			icon: Sparkles,
			title: "Premium Fabrics",
			body: "Belgian linen, Italian wool, and mulberry silk woven with heritage."
		},
		{
			icon: Globe2,
			title: "African Heritage",
			body: "In dialogue with the makers of Osogbo, Kano and Accra."
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-ink text-ivory overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-30",
				style: {
					backgroundImage: `url(${craft_default})`,
					backgroundSize: "cover",
					backgroundPosition: "center"
				}
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink/70" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-40",
				children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-ivory/60 mb-6",
					children: "Craft"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl mb-16",
					children: [
						"Made slowly, ",
						/* @__PURE__ */ jsx("span", {
							className: "italic",
							children: "on purpose"
						}),
						"."
					]
				})] }), /* @__PURE__ */ jsx("div", {
					className: "grid gap-10 md:gap-6 md:grid-cols-4",
					children: pillars.map((p, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i * .1,
						className: "border-t border-ivory/20 pt-8",
						children: [
							/* @__PURE__ */ jsx(p.icon, {
								className: "h-6 w-6 text-gold mb-8",
								strokeWidth: 1.2
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl mb-3",
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-ivory/70 leading-relaxed",
								children: p.body
							})
						]
					}, p.title))
				})]
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsxs("section", {
		className: "px-6 md:px-10 py-24 md:py-40 max-w-[1400px] mx-auto",
		children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
			className: "eyebrow text-muted-foreground mb-6 text-center",
			children: "Notes from Clients"
		}) }), /* @__PURE__ */ jsx("div", {
			className: "grid md:grid-cols-3 gap-10 md:gap-16 mt-12",
			children: [
				{
					quote: "The tailoring is architectural. The fabric feels like a second skin — I've never owned anything so quietly powerful.",
					name: "Amara O.",
					role: "Curator, Lagos"
				},
				{
					quote: "My bridal gown was a conversation. Six months, five fittings, one dress that made my mother weep.",
					name: "Zainab K.",
					role: "Client, Marrakech"
				},
				{
					quote: "You feel the intention in every seam. This is what modern luxury should feel like.",
					name: "Etienne D.",
					role: "Editor, Paris"
				}
			].map((t, i) => /* @__PURE__ */ jsxs(Reveal, {
				delay: i * .1,
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-center gap-1 mb-6 text-gold",
						children: [...Array(5)].map((_, s) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, s))
					}),
					/* @__PURE__ */ jsxs("blockquote", {
						className: "font-display text-xl md:text-2xl leading-snug mb-8",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: t.name
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: t.role
					})
				]
			}, i))
		})]
	});
}
function Instagram$1() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pb-24 md:pb-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-end justify-between px-6 md:px-10 max-w-[1600px] mx-auto mb-8",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow text-muted-foreground mb-3",
				children: "@midi.africa"
			}), /* @__PURE__ */ jsx("h2", {
				className: "font-display text-3xl md:text-5xl",
				children: "Follow the atelier"
			})] }), /* @__PURE__ */ jsx(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ jsx("a", {
					href: "#",
					className: "eyebrow hover-underline",
					children: "Instagram →"
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-6 gap-1",
			children: [
				collection_women_default,
				collection_bridal_default,
				collection_accessories_default,
				collection_men_default,
				craft_default,
				about_default
			].map((src, i) => /* @__PURE__ */ jsxs("a", {
				href: "#",
				className: "group relative aspect-square overflow-hidden",
				children: [/* @__PURE__ */ jsx("img", {
					src,
					alt: "",
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500" })]
			}, i))
		})]
	});
}
//#endregion
export { Home as component };
