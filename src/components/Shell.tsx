"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="font-display text-2xl tracking-tight text-[var(--ink)]">
          Harbor &amp; Oak
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          <Link href="/shop" className="hover:text-[var(--ink)]">
            Shop
          </Link>
          <Link href="/shop?category=Lighting" className="hover:text-[var(--ink)]">
            Lighting
          </Link>
          <Link href="/shop?category=Seating" className="hover:text-[var(--ink)]">
            Seating
          </Link>
          <Link href="/admin" className="hover:text-[var(--ink)]">
            Admin
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink)] hover:bg-[var(--sand)]"
        >
          Cart ({count})
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[var(--sand)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-[var(--muted)] md:flex-row md:justify-between">
        <p className="font-display text-lg text-[var(--ink)]">Harbor &amp; Oak</p>
        <p>Furniture &amp; lighting storefront — catalog, cart, checkout.</p>
      </div>
    </footer>
  );
}
