import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--sand)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              New season collection
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[1.05] text-[var(--ink)] md:text-6xl">
              Furniture that feels lived-in from day one
            </h1>
            <p className="mt-5 max-w-md text-[var(--muted)]">
              Browse lighting, seating, and tables with filters, galleries, and a checkout flow built for conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"
              >
                Shop collection
              </Link>
              <Link
                href="/product/ho-03"
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold"
              >
                View best seller
              </Link>
            </div>
          </div>
          <div
            className="min-h-[340px] rounded-3xl bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80)",
            }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl">Featured pieces</h2>
          <Link href="/shop" className="text-sm text-[var(--accent)] underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
