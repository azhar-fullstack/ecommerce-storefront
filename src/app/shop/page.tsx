import { Suspense } from "react";
import ShopClient from "./ShopClient";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-sm text-[var(--muted)]">Loading shop…</div>}>
      <ShopClient />
    </Suspense>
  );
}
