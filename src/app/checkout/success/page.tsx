import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Order confirmed</p>
      <h1 className="font-display mt-3 text-4xl">Thank you</h1>
      <p className="mt-4 text-[var(--muted)]">
        Your order is confirmed. A receipt and shipping updates will arrive by email.
      </p>
      <Link href="/shop" className="mt-8 inline-block rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white">
        Continue shopping
      </Link>
    </div>
  );
}
