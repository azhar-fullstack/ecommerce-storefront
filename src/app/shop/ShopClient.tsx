"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function ShopClient() {
  const params = useSearchParams();
  const initial = params.get("category") || "All";
  const [category, setCategory] = useState(initial);
  const [maxPrice, setMaxPrice] = useState(1500);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => (category === "All" || p.category === category) && p.price <= maxPrice,
      ),
    [category, maxPrice],
  );

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-2xl border border-[var(--line)] bg-white p-5">
        <h2 className="font-display text-xl">Filters</h2>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Category</p>
        <div className="mt-2 space-y-2">
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="cat"
                checked={category === c}
                onChange={() => setCategory(c)}
              />
              {c}
            </label>
          ))}
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          Max price · ${maxPrice}
        </p>
        <input
          type="range"
          min={80}
          max={1500}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-2 w-full"
        />
      </aside>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-display text-3xl">Shop</h1>
          <p className="text-sm text-[var(--muted)]">{filtered.length} products</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
