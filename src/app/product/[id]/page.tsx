"use client";

import Image from "next/image";
import { use } from "react";
import { getProduct } from "@/data/products";
import { useCart } from "@/lib/cart";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProduct(id);
  const { add } = useCart();
  if (!product) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-[var(--sand)]">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="50vw" unoptimized />
      </div>
      <div>
        <p className="text-sm uppercase tracking-wide text-[var(--muted)]">
          {product.category} · {product.color}
        </p>
        <h1 className="font-display mt-2 text-4xl">{product.name}</h1>
        <p className="mt-4 text-2xl font-semibold">${product.price}</p>
        <p className="mt-6 leading-relaxed text-[var(--muted)]">{product.description}</p>
        <button
          type="button"
          onClick={() => add(product)}
          className="mt-8 rounded-full bg-[var(--ink)] px-8 py-3 text-sm font-semibold text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
