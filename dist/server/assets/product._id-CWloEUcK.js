import { t as products } from "./products-DKnoCSzG.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/product.$id.tsx
var $$splitNotFoundComponentImporter = () => import("./product._id-UM1ClFCt.js");
var $$splitComponentImporter = () => import("./product._id-wcQJbbua.js");
var Route = createFileRoute("/product/$id")({
	loader: ({ params }) => {
		const product = products.find((p) => p.id === params.id);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.product.name} — Midi Africa` },
		{
			name: "description",
			content: `${loaderData.product.name} in ${loaderData.product.fabric}. Handcrafted luxury from Midi Africa.`
		},
		{
			property: "og:title",
			content: `${loaderData.product.name} — Midi Africa`
		},
		{
			property: "og:image",
			content: loaderData.product.image
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
