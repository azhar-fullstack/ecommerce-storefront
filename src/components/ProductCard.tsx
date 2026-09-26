"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="group">
      <Link href={`/product/${product.id}`} className="block overflow-hidden rounded-2xl bg-[var(--sand)]">
        <div className="relative aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 50vw, 25vw"
            unoptimized
          />
          {product.badge ? (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium">
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <Link href={`/product/${product.id}`} className="font-medium text-[var(--ink)]">
            {product.name}
          </Link>
          <p className="text-sm text-[var(--muted)]">
            {product.category} · {product.color}
          </p>
        </div>
        <p className="font-semibold">${product.price}</p>
      </div>
      <button
        type="button"
        onClick={() => add(product)}
        className="mt-3 w-full rounded-full border border-[var(--line)] py-2 text-sm font-medium hover:bg-[var(--sand)]"
      >
        Add to cart
      </button>
    </article>
  );
}
