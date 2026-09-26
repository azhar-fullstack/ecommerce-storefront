export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
  description: string;
  badge?: string;
};

export const categories = ["All", "Lighting", "Seating", "Tables", "Decor"] as const;

export const products: Product[] = [
  {
    id: "ho-01",
    name: "Arc Floor Lamp",
    price: 289,
    category: "Lighting",
    color: "Brass",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    description: "Marble base with brushed brass arc. Soft warm LED for living rooms.",
    badge: "New",
  },
  {
    id: "ho-02",
    name: "Linen Lounge Chair",
    price: 540,
    category: "Seating",
    color: "Sand",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    description: "Deep seat, kiln-dried oak frame, performance linen upholstery.",
  },
  {
    id: "ho-03",
    name: "Walnut Side Table",
    price: 320,
    category: "Tables",
    color: "Walnut",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
    description: "Solid walnut top with sculpted pedestal. Oil finish.",
    badge: "Best seller",
  },
  {
    id: "ho-04",
    name: "Ceramic Table Lamp",
    price: 148,
    category: "Lighting",
    color: "Cream",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    description: "Hand-glazed ceramic with linen shade. Dimmer compatible.",
  },
  {
    id: "ho-05",
    name: "Boucle Accent Sofa",
    price: 1290,
    category: "Seating",
    color: "Ivory",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    description: "Two-seat sofa in textured bouclé. Removable covers.",
  },
  {
    id: "ho-06",
    name: "Oak Dining Table",
    price: 980,
    category: "Tables",
    color: "Oak",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    description: "Seats six. White oak slab with eased edges.",
  },
  {
    id: "ho-07",
    name: "Stoneware Vase Set",
    price: 96,
    category: "Decor",
    color: "Clay",
    image: "https://images.unsplash.com/photo-1578500494198-2428b3ba27bb?w=800&q=80",
    description: "Set of three matte stoneware vases in staggered heights.",
  },
  {
    id: "ho-08",
    name: "Wool Throw Blanket",
    price: 120,
    category: "Decor",
    color: "Charcoal",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
    description: "Heavyweight merino wool throw with fringed edges.",
    badge: "Sale",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
