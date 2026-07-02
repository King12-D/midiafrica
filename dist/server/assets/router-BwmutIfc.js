import { t as Route$6 } from "./product._id-CWloEUcK.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/styles.css?url
var styles_default = "/assets/styles-DRD4gt_J.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/site/Header.tsx
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/bespoke",
		label: "Bespoke"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [dark, setDark] = useState(false);
	const path = useRouterState({ select: (s) => s.location.pathname });
	const isHome = path === "/";
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	useEffect(() => setOpen(false), [path]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || !isHome ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 md:px-10 md:py-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => setOpen(true),
						className: "grid h-10 w-10 place-items-center -ml-2",
						"aria-label": "Open menu",
						children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsx("nav", {
						className: "hidden md:flex items-center gap-8",
						children: nav.map((n) => /* @__PURE__ */ jsx(Link, {
							to: n.to,
							className: "eyebrow hover-underline",
							activeProps: { className: "eyebrow hover-underline text-foreground" },
							children: n.label
						}, n.to))
					})]
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "font-display text-xl md:text-2xl tracking-[0.2em] uppercase text-center whitespace-nowrap",
					children: "Midi\xA0Africa"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-end gap-1",
					children: [
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Search",
							className: "grid h-10 w-10 place-items-center",
							children: /* @__PURE__ */ jsx(Search, { className: "h-4.5 w-4.5" })
						}),
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Toggle theme",
							onClick: () => setDark((d) => !d),
							className: "grid h-10 w-10 place-items-center",
							children: dark ? /* @__PURE__ */ jsx(Sun, { className: "h-4.5 w-4.5" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4.5 w-4.5" })
						}),
						/* @__PURE__ */ jsxs("button", {
							"aria-label": "Bag",
							className: "grid h-10 w-10 place-items-center relative",
							children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "h-4.5 w-4.5" }), /* @__PURE__ */ jsx("span", { className: "absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent" })]
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[60] bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between px-6 py-4 md:px-10 md:py-5 border-b border-border",
			children: [/* @__PURE__ */ jsx("span", {
				className: "font-display text-xl tracking-[0.2em] uppercase",
				children: "Midi\xA0Africa"
			}), /* @__PURE__ */ jsx("button", {
				onClick: () => setOpen(false),
				"aria-label": "Close menu",
				className: "grid h-10 w-10 place-items-center",
				children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-2 gap-10 p-8 md:p-16 max-w-7xl mx-auto",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow text-muted-foreground mb-8",
				children: "Menu"
			}), /* @__PURE__ */ jsx("ul", {
				className: "space-y-4 md:space-y-6",
				children: [{
					to: "/",
					label: "Home"
				}, ...nav].map((n, i) => /* @__PURE__ */ jsx(motion.li, {
					initial: {
						y: 20,
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					transition: {
						delay: .06 * i,
						ease: [
							.7,
							0,
							.2,
							1
						]
					},
					children: /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "font-display text-5xl md:text-7xl block hover-underline",
						children: n.label
					})
				}, n.to))
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "hidden md:flex flex-col justify-end gap-6",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-muted-foreground",
						children: "Atelier"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-display text-2xl leading-snug max-w-md",
						children: "Lagos · Accra · Paris. Book a private appointment with our creative team."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex gap-6 eyebrow",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "#",
								children: "Instagram"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								children: "Pinterest"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								children: "TikTok"
							})
						]
					})
				]
			})]
		})]
	}) })] });
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-ink text-ivory",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "border-b border-white/10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid gap-12 md:grid-cols-[1.4fr_1fr]",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-white/60 mb-6",
						children: "The Journal"
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-6xl leading-[0.95] max-w-xl",
						children: "Join the atelier — dispatches on new collections, private previews, and cultural notes."
					})] }), /* @__PURE__ */ jsxs("form", {
						className: "flex flex-col justify-end gap-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex border-b border-white/30 pb-3",
							children: [/* @__PURE__ */ jsx("input", {
								type: "email",
								placeholder: "Your email address",
								className: "flex-1 bg-transparent outline-none placeholder:text-white/40 text-sm"
							}), /* @__PURE__ */ jsx("button", {
								className: "eyebrow text-white/80 hover:text-white transition",
								children: "Subscribe →"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-white/50",
							children: "By subscribing you agree to our privacy policy."
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-2xl tracking-[0.2em] uppercase",
							children: "Midi Africa"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-6 text-sm text-white/60 max-w-xs leading-relaxed",
							children: "A contemporary luxury house rooted in African heritage and modern craft."
						})]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Collections",
						links: [
							["Women", "/shop"],
							["Men", "/shop"],
							["Bridal", "/shop"],
							["Bespoke", "/bespoke"],
							["Accessories", "/shop"]
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "House",
						links: [
							["About", "/about"],
							["Craftsmanship", "/about"],
							["Sustainability", "/about"],
							["Journal", "/about"]
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Client Care",
						links: [
							["Contact", "/contact"],
							["Shipping", "/contact"],
							["Returns", "/contact"],
							["Size Guide", "/contact"]
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-white/10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50",
					children: [/* @__PURE__ */ jsxs("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Midi Africa. All rights reserved."
					] }), /* @__PURE__ */ jsxs("div", {
						className: "flex gap-6",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "#",
								children: "Instagram"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								children: "Pinterest"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								children: "TikTok"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								children: "WhatsApp"
							})
						]
					})]
				})
			})
		]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "eyebrow text-white/50 mb-5",
		children: title
	}), /* @__PURE__ */ jsx("ul", {
		className: "space-y-3 text-sm",
		children: links.map(([label, to]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to,
			className: "text-white/80 hover:text-white transition",
			children: label
		}) }, label))
	})] });
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-8xl",
					children: "404"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 eyebrow text-muted-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "eyebrow border-b border-foreground pb-1",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Please try again in a moment."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex justify-center gap-4",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "eyebrow border-b border-foreground pb-1",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "eyebrow border-b border-muted-foreground pb-1",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Midi Africa - Fashion designer in lagos" },
			{
				name: "description",
				content: "Midi Africa is a contemporary luxury fashion house celebrating African craftsmanship, heritage and modern elegance."
			},
			{
				property: "og:title",
				content: "Midi Africa - Fashion designer in lagos"
			},
			{
				property: "og:description",
				content: "Midi Africa is a contemporary luxury fashion house celebrating African craftsmanship, heritage and modern elegance."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Midi Africa - Fashion designer in lagos"
			},
			{
				name: "twitter:description",
				content: "Midi Africa is a contemporary luxury fashion house celebrating African craftsmanship, heritage and modern elegance."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/e141b764-a204-4ce7-9b44-0bb5f096e3e2"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/e141b764-a204-4ce7-9b44-0bb5f096e3e2"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	const path = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				className: "animate-in fade-in duration-500",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}, path),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
//#region src/routes/shop.tsx
var $$splitComponentImporter$4 = () => import("./shop-D0OHlCUz.js");
var Route$4 = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "Shop — Midi Africa" },
		{
			name: "description",
			content: "Discover the Midi Africa collection: elegant, timeless, contemporary African luxury."
		},
		{
			property: "og:title",
			content: "Shop — Midi Africa"
		},
		{
			property: "og:description",
			content: "Discover the collection: elegant, timeless, contemporary African luxury."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-Csb892ub.js");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Midi Africa" },
		{
			name: "description",
			content: "Contact Midi Africa: email, WhatsApp, Instagram, and our Lagos flagship."
		},
		{
			property: "og:title",
			content: "Contact — Midi Africa"
		},
		{
			property: "og:description",
			content: "Reach the atelier."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/bespoke.tsx
var $$splitComponentImporter$2 = () => import("./bespoke-8kvDwv94.js");
var Route$2 = createFileRoute("/bespoke")({
	head: () => ({ meta: [
		{ title: "Bespoke — Midi Africa" },
		{
			name: "description",
			content: "Request a custom-made Midi Africa piece. Private consultations, measurements, and appointments."
		},
		{
			property: "og:title",
			content: "Bespoke — Midi Africa"
		},
		{
			property: "og:description",
			content: "Made for you, by hand, in our Lagos atelier."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-MAsJjvib.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Midi Africa" },
		{
			name: "description",
			content: "The story of Midi Africa: founder, mission, craftsmanship and sustainability."
		},
		{
			property: "og:title",
			content: "About — Midi Africa"
		},
		{
			property: "og:description",
			content: "A modern love letter to African craft."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-aR7TMTbg.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Midi Africa — Redefining African Luxury" },
		{
			name: "description",
			content: "A contemporary luxury fashion house where timeless craftsmanship meets modern African elegance."
		},
		{
			property: "og:title",
			content: "Midi Africa — Redefining African Luxury"
		},
		{
			property: "og:description",
			content: "Where timeless craftsmanship meets contemporary elegance."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var ShopRoute = Route$4.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var BespokeRoute = Route$2.update({
	id: "/bespoke",
	path: "/bespoke",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	BespokeRoute,
	ContactRoute,
	ShopRoute,
	ProductIdRoute: Route$6.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
