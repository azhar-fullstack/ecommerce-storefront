"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(1);

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="font-display text-3xl">Checkout</h1>
        <p className="mt-3 text-[var(--muted)]">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="font-display text-4xl">Checkout</h1>
      <div className="mt-4 flex gap-2 text-sm">
        {["Shipping", "Payment", "Review"].map((label, i) => (
          <span
            key={label}
            className={`rounded-full px-3 py-1 ${step === i + 1 ? "bg-[var(--ink)] text-white" : "bg-[var(--sand)] text-[var(--muted)]"}`}
          >
            {i + 1}. {label}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <form
          className="space-y-4 rounded-2xl border border-[var(--line)] bg-white p-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (step < 3) setStep(step + 1);
            else {
              clear();
              router.push("/checkout/success");
            }
          }}
        >
          {step === 1 && (
            <>
              <input required placeholder="Full name" className="w-full rounded-xl border border-[var(--line)] px-4 py-3" />
              <input required placeholder="Address" className="w-full rounded-xl border border-[var(--line)] px-4 py-3" />
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="City" className="rounded-xl border border-[var(--line)] px-4 py-3" />
                <input required placeholder="Postal code" className="rounded-xl border border-[var(--line)] px-4 py-3" />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <input required placeholder="Card number" className="w-full rounded-xl border border-[var(--line)] px-4 py-3" />
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="MM/YY" className="rounded-xl border border-[var(--line)] px-4 py-3" />
                <input required placeholder="CVC" className="rounded-xl border border-[var(--line)] px-4 py-3" />
              </div>
            </>
          )}
          {step === 3 && (
            <p className="text-sm text-[var(--muted)]">
              Place order for {lines.length} item(s). Shipping calculated at fulfillment.
            </p>
          )}
          <button type="submit" className="w-full rounded-full bg-[var(--ink)] py-3 text-sm font-semibold text-white">
            {step < 3 ? "Continue" : "Place order"}
          </button>
        </form>

        <aside className="h-fit rounded-2xl bg-[var(--sand)] p-6">
          <h2 className="font-display text-xl">Order summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {lines.map((l) => (
              <li key={l.product.id} className="flex justify-between">
                <span>
                  {l.product.name} × {l.qty}
                </span>
                <span>${l.product.price * l.qty}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-[var(--line)] pt-3 font-semibold">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
