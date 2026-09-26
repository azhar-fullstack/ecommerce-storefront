"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { open, setOpen, lines, remove, setQty, subtotal } = useCart();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
      <button type="button" className="flex-1" aria-label="Close" onClick={() => setOpen(false)} />
      <aside className="flex h-full w-full max-w-md flex-col bg-[var(--bg)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
          <h2 className="font-display text-xl">Your cart</h2>
          <button type="button" onClick={() => setOpen(false)} className="text-sm text-[var(--muted)]">
            Close
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">Cart is empty.</p>
          ) : (
            lines.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-3">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-[var(--sand)]">
                  <Image src={product.image} alt="" fill className="object-cover" sizes="80px" unoptimized />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-[var(--muted)]">${product.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="h-7 w-7 rounded border border-[var(--line)]"
                      onClick={() => setQty(product.id, qty - 1)}
                    >
                      −
                    </button>
                    <span className="text-sm">{qty}</span>
                    <button
                      type="button"
                      className="h-7 w-7 rounded border border-[var(--line)]"
                      onClick={() => setQty(product.id, qty + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-xs text-[var(--muted)] underline"
                      onClick={() => remove(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t border-[var(--line)] px-5 py-4">
          <div className="mb-3 flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(0)}</span>
          </div>
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-[var(--ink)] py-3 text-center text-sm font-semibold text-white"
          >
            Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
