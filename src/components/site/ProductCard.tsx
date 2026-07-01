import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: [0.7, 0, 0.2, 1] }}
      className="group"
    >
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out ${
              hover ? "opacity-0 scale-105" : "opacity-100 scale-100"
            } group-hover:scale-105`}
          />
          <img
            src={product.hover}
            alt=""
            loading="lazy"
            aria-hidden
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          />
          <button
            aria-label="Add to wishlist"
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-background/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <Heart className="h-4 w-4" />
          </button>
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="bg-background/85 backdrop-blur-md text-foreground text-center py-3 eyebrow">
              Quick View
            </div>
          </div>
        </div>
        <div className="pt-4 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-muted-foreground mb-1">{product.category}</p>
            <h3 className="font-display text-lg leading-tight">{product.name}</h3>
          </div>
          <p className="text-sm tabular-nums pt-4">${product.price.toLocaleString()}</p>
        </div>
      </Link>
    </motion.div>
  );
}
