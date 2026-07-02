import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
//#region src/components/site/ProductCard.tsx
function ProductCard({ product, index = 0 }) {
	const [hover, setHover] = useState(false);
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			y: 30,
			opacity: 0
		},
		whileInView: {
			y: 0,
			opacity: 1
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay: index % 4 * .06,
			ease: [
				.7,
				0,
				.2,
				1
			]
		},
		className: "group",
		children: /* @__PURE__ */ jsxs(Link, {
			to: "/product/$id",
			params: { id: product.id },
			className: "block",
			onMouseEnter: () => setHover(true),
			onMouseLeave: () => setHover(false),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative aspect-[3/4] overflow-hidden bg-muted",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: product.image,
						alt: product.name,
						loading: "lazy",
						className: `absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out ${hover ? "opacity-0 scale-105" : "opacity-100 scale-100"} group-hover:scale-105`
					}),
					/* @__PURE__ */ jsx("img", {
						src: product.hover,
						alt: "",
						loading: "lazy",
						"aria-hidden": true,
						className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out ${hover ? "opacity-100" : "opacity-0"}`
					}),
					/* @__PURE__ */ jsx("button", {
						"aria-label": "Add to wishlist",
						onClick: (e) => {
							e.preventDefault();
						},
						className: "absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-background/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500",
						children: /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500",
						children: /* @__PURE__ */ jsx("div", {
							className: "bg-background/85 backdrop-blur-md text-foreground text-center py-3 eyebrow",
							children: "Quick View"
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "pt-4 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-muted-foreground mb-1",
					children: product.category
				}), /* @__PURE__ */ jsx("h3", {
					className: "font-display text-lg leading-tight",
					children: product.name
				})] }), /* @__PURE__ */ jsxs("p", {
					className: "text-sm tabular-nums pt-4",
					children: ["$", product.price.toLocaleString()]
				})]
			})]
		})
	});
}
//#endregion
export { ProductCard as t };
