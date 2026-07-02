import { t as Reveal } from "./Reveal-MJVSwg-a.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	const [sent, setSent] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "pt-32 md:pt-44",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "px-6 md:px-10 max-w-[1600px] mx-auto pb-16 md:pb-24",
				children: /* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-muted-foreground mb-6",
					children: "Client Care"
				}), /* @__PURE__ */ jsxs("h1", {
					className: "font-display text-6xl md:text-8xl leading-[0.95]",
					children: [
						"Say ",
						/* @__PURE__ */ jsx("span", {
							className: "italic",
							children: "hello"
						}),
						"."
					]
				})] })
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "grid md:grid-cols-2 border-t border-border",
				children: [/* @__PURE__ */ jsx("div", {
					className: "p-6 md:p-16 border-b md:border-b-0 md:border-r border-border",
					children: /* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-muted-foreground mb-8",
						children: "Write to us"
					}), sent ? /* @__PURE__ */ jsxs("div", {
						className: "py-20 text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-3xl mb-3",
							children: "Message received."
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: "We'll reply within one working day."
						})]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "grid gap-6 max-w-lg",
						children: [
							/* @__PURE__ */ jsx(Field, {
								label: "Name",
								children: /* @__PURE__ */ jsx("input", {
									required: true,
									className: "cinput"
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Email",
								children: /* @__PURE__ */ jsx("input", {
									required: true,
									type: "email",
									className: "cinput"
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Subject",
								children: /* @__PURE__ */ jsx("input", { className: "cinput" })
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Message",
								children: /* @__PURE__ */ jsx("textarea", {
									rows: 5,
									className: "cinput resize-none"
								})
							}),
							/* @__PURE__ */ jsx("button", {
								className: "mt-4 bg-foreground text-background eyebrow py-4 hover:bg-earth transition-colors",
								children: "Send Message →"
							})
						]
					})] })
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-6 md:p-16 space-y-10",
					children: [
						/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow text-muted-foreground mb-6",
							children: "Reach us"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsx(ChannelRow, {
									icon: Mail,
									label: "Email",
									value: "atelier@midi.africa",
									href: "mailto:atelier@midi.africa"
								}),
								/* @__PURE__ */ jsx(ChannelRow, {
									icon: MessageCircle,
									label: "WhatsApp",
									value: "+234 800 000 0000",
									href: "#"
								}),
								/* @__PURE__ */ jsx(ChannelRow, {
									icon: Instagram,
									label: "Instagram",
									value: "@midi.africa",
									href: "#"
								}),
								/* @__PURE__ */ jsx(ChannelRow, {
									icon: MapPin,
									label: "Flagship",
									value: "12 Awolowo Road, Ikoyi, Lagos",
									href: "#"
								})
							]
						})] }),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: .1,
							children: [/* @__PURE__ */ jsx("p", {
								className: "eyebrow text-muted-foreground mb-4",
								children: "Hours"
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground leading-relaxed",
								children: [
									"Monday – Saturday · 10:00 – 19:00 WAT",
									/* @__PURE__ */ jsx("br", {}),
									"Sunday · by appointment"
								]
							})]
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: .15,
							className: "aspect-[4/3] overflow-hidden border border-border",
							children: /* @__PURE__ */ jsx("iframe", {
								title: "Midi Africa Lagos",
								className: "h-full w-full grayscale",
								src: "https://www.openstreetmap.org/export/embed.html?bbox=3.42%2C6.44%2C3.46%2C6.46&layer=mapnik"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `.cinput{width:100%;background:transparent;border:0;border-bottom:1px solid var(--border);padding:0.75rem 0;outline:none;font-size:0.95rem;transition:border-color .3s} .cinput:focus{border-color:var(--foreground)}` })
		]
	});
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
function ChannelRow({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
		href,
		className: "group flex items-start gap-4 border-b border-border pb-6",
		children: [
			/* @__PURE__ */ jsx(Icon, {
				className: "h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors",
				strokeWidth: 1.3
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-muted-foreground mb-1",
					children: label
				}), /* @__PURE__ */ jsx("p", {
					className: "font-display text-2xl group-hover:italic transition-all",
					children: value
				})]
			}),
			/* @__PURE__ */ jsx("span", {
				className: "opacity-0 group-hover:opacity-100 transition-opacity",
				children: "→"
			})
		]
	}) });
}
//#endregion
export { Contact as component };
