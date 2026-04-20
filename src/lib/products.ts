import jrPurple from "@/assets/jr-purple.png";
import jsBlackGold from "@/assets/js-black-gold.png";
import jehovahRaphaTan from "@/assets/jehovah-rapha-tan.png";
import jehovahRaphaBlack from "@/assets/jehovah-rapha-black.png";
import shammahVarsity from "@/assets/shammah-varsity.png";
import jirehGreen from "@/assets/jireh-green.png";
import shalomVarsity from "@/assets/shalom-varsity.png";
import shirtsCover from "@/assets/shirts-cover.png";

export type ProductCategory = "shirts" | "jackets";

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  price: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    slug: "jehovah-rapha-purple",
    name: "Jehovah Rapha Shirt",
    subtitle: "The LORD My Healer",
    image: jrPurple,
    price: "$65",
    category: "shirts",
  },
  {
    slug: "jehovah-shammah",
    name: "Jehovah Shammah Shirt",
    subtitle: "The Lord is Here",
    image: jsBlackGold,
    price: "$65",
    category: "shirts",
  },
  {
    slug: "jehovah-rapha-tan",
    name: "Jehovah Rapha Shirt - Tan",
    subtitle: "The LORD My Healer",
    image: jehovahRaphaTan,
    price: "$45",
    category: "shirts",
  },
  {
    slug: "jehovah-rapha-black",
    name: "Jehovah Rapha Shirt - Black",
    subtitle: "The LORD My Healer",
    image: jehovahRaphaBlack,
    price: "$45",
    category: "shirts",
  },
  {
    slug: "jehovah-rapha-cream",
    name: "Jehovah Rapha Tee - Cream",
    subtitle: "The LORD My Healer",
    image: jrPurple,
    price: "$45",
    category: "shirts",
  },
  {
    slug: "jehovah-shammah-ivory",
    name: "Jehovah Shammah Tee - Ivory",
    subtitle: "The Lord is Here",
    image: jsBlackGold,
    price: "$45",
    category: "shirts",
  },
  {
    slug: "shammah-varsity",
    name: "Shammah Varsity Jacket",
    subtitle: "The Lord is Here",
    image: shammahVarsity,
    price: "$120",
    category: "jackets",
  },
  {
    slug: "jireh-varsity",
    name: "Jireh Varsity Jacket",
    subtitle: "The Lord Provides",
    image: jirehGreen,
    price: "$120",
    category: "jackets",
  },
  {
    slug: "shalom-varsity",
    name: "Shalom Varsity Jacket",
    subtitle: "The Lord is my Peace",
    image: shalomVarsity,
    price: "$120",
    category: "jackets",
  },
];

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category);

export const collections: {
  slug: ProductCategory;
  name: string;
  tagline: string;
  cover: string;
}[] = [
  {
    slug: "shirts",
    name: "Shirts",
    tagline: "Wear the Word",
    cover: jehovahRaphaTan,
  },
  {
    slug: "jackets",
    name: "Jackets",
    tagline: "Carry the Covering",
    cover: shammahVarsity,
  },
];
