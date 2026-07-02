import { n as collection_women_default, t as collection_bridal_default } from "./collection-bridal-CR1C4jIR.js";
import { t as collection_men_default } from "./collection-men-CPe9cHT-.js";
import { t as craft_default } from "./craft-CPON8fan.js";
import { t as Reveal } from "./Reveal-MJVSwg-a.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/bespoke.tsx?tsr-split=component
function Bespoke() {
	const [sent, setSent] = useState(false);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative min-h-[80svh] flex items-end px-6 md:px-10 pt-32 pb-16 md:pb-24 overflow-hidden bg-ink text-ivory",
			children: [/* @__PURE__ */ jsx("img", {
				src: craft_default,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-50"
			}), /* @__PURE__ */ jsx("div", {
				className: "relative max-w-6xl",
				children: /* @__PURE__ */ jsxs(Reveal, { children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-ivory/70 mb-8",
						children: "Bespoke Atelier"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-6xl md:text-9xl leading-[0.9]",
						children: [
							"Made ",
							/* @__PURE__ */ jsx("span", {
								className: "italic",
								children: "for you"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 max-w-lg text-ivory/80",
						children: "An intimate, months-long conversation between you and our creative team — resulting in a single piece cut, fit and finished entirely by hand."
					})
				] })
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 md:py-40 px-6 md:px-10 max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 md:gap-16",
			children: [
				[
					"01",
					"Consultation",
					"A private conversation — in person or over video — to understand the piece, the occasion, and you."
				],
				[
					"02",
					"Design & Fitting",
					"Sketches, fabric swatches, and up to five fittings at our atelier or in your city."
				],
				[
					"03",
					"Delivery",
					"Your piece is delivered by hand, in a custom box, with a lifetime repair guarantee."
				]
			].map(([n, t, b], i) => /* @__PURE__ */ jsxs(Reveal, {
				delay: i * .1,
				className: "border-t border-border pt-6",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-display text-4xl mb-8",
						children: n
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl mb-3",
						children: t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm",
						children: b
					})
				]
			}, n))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "pb-24 md:pb-40 px-6 md:px-10 max-w-[1600px] mx-auto",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow text-muted-foreground mb-6",
				children: "Portfolio"
			}), /* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl md:text-6xl mb-12",
				children: "Recent commissions."
			})] }), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-3 gap-4",
				children: [
					collection_bridal_default,
					collection_women_default,
					collection_men_default
				].map((src, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .08,
					className: "aspect-[3/4] overflow-hidden group",
					children: /* @__PURE__ */ jsx("img", {
						src,
						alt: "",
						loading: "lazy",
						className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1400ms]"
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-muted/40 border-y border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20",
				children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Reveal, { children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-muted-foreground mb-6",
						children: "Book a Consultation"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl md:text-6xl leading-tight mb-6",
						children: [
							"Begin a ",
							/* @__PURE__ */ jsx("span", {
								className: "italic",
								children: "conversation"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed max-w-md",
						children: "We accept a limited number of bespoke commissions each season. Share a few details and our atelier will be in touch within 48 hours."
					})
				] }) }), /* @__PURE__ */ jsx(Reveal, {
					delay: .1,
					children: sent ? /* @__PURE__ */ jsxs("div", {
						className: "border border-border p-10 text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-2xl mb-3",
							children: "Thank you."
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: "We will be in touch shortly."
						})]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "grid gap-6",
						children: [
							/* @__PURE__ */ jsx(Field, {
								label: "Full name",
								children: /* @__PURE__ */ jsx("input", {
									required: true,
									className: "input"
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Email",
								children: /* @__PURE__ */ jsx("input", {
									type: "email",
									required: true,
									className: "input"
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "City",
								children: /* @__PURE__ */ jsx("input", { className: "input" })
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Occasion",
								children: /* @__PURE__ */ jsxs("select", {
									className: "input",
									children: [
										/* @__PURE__ */ jsx("option", { children: "Bridal" }),
										/* @__PURE__ */ jsx("option", { children: "Event" }),
										/* @__PURE__ */ jsx("option", { children: "Everyday luxury" }),
										/* @__PURE__ */ jsx("option", { children: "Other" })
									]
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Preferred date",
								children: /* @__PURE__ */ jsx("input", {
									type: "date",
									className: "input"
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Tell us about the piece",
								children: /* @__PURE__ */ jsx("textarea", {
									rows: 4,
									className: "input resize-none"
								})
							}),
							/* @__PURE__ */ jsx("button", {
								className: "mt-4 bg-foreground text-background eyebrow py-4 hover:bg-earth transition-colors",
								children: "Request Consultation →"
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("style", { children: `.input{width:100%;background:transparent;border:0;border-bottom:1px solid var(--border);padding:0.75rem 0;outline:none;font-size:0.95rem;transition:border-color .3s} .input:focus{border-color:var(--foreground)}` })
	] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("span", {
			className: "eyebrow text-muted-foreground block mb-1",
			children: label
		}), children]
	});
}
//#endregion
export { Bespoke as component };
