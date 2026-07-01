import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import cw from "@/assets/collection-women.jpg";
import cm from "@/assets/collection-men.jpg";
import cb from "@/assets/collection-bridal.jpg";
import ca from "@/assets/collection-accessories.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hover: string;
  fabric: string;
  color: string;
};

export const products: Product[] = [
  { id: "sahel-slip", name: "Sahel Silk Slip Dress", category: "Women", price: 780, image: p1, hover: cw, fabric: "100% Mulberry Silk", color: "Ivory" },
  { id: "kano-kaftan", name: "Kano Emerald Kaftan", category: "Women", price: 1240, image: p2, hover: cb, fabric: "Silk Jacquard", color: "Emerald" },
  { id: "harmattan-coat", name: "Harmattan Wool Coat", category: "Outerwear", price: 1980, image: p3, hover: ca, fabric: "Italian Wool", color: "Burgundy" },
  { id: "sable-jumpsuit", name: "Sable Linen Jumpsuit", category: "Women", price: 620, image: p4, hover: cm, fabric: "Belgian Linen", color: "Sand" },
  { id: "atelier-suit", name: "Atelier Tailored Suit", category: "Men", price: 2450, image: cm, hover: p3, fabric: "Wool & Silk", color: "Cognac" },
  { id: "onyx-tote", name: "Onyx Leather Tote", category: "Accessories", price: 890, image: ca, hover: p1, fabric: "Full-grain Leather", color: "Terracotta" },
  { id: "aisha-bridal", name: "Aisha Bridal Gown", category: "Bridal", price: 4200, image: cb, hover: p2, fabric: "Silk & Gold Thread", color: "Ivory" },
  { id: "obelisk-blazer", name: "Obelisk Cream Blazer", category: "Women", price: 1100, image: cw, hover: p4, fabric: "Wool Crepe", color: "Cream" },
];
