"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";
import { products } from "@/data/products";

type CartLine = { product: Product; qty: number };
type StoredLine = { id: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  count: number;
  subtotal: number;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "harbor-oak-cart";

function hydrate(stored: StoredLine[]): CartLine[] {
  return stored
    .map(({ id, qty }) => {
      const product = products.find((p) => p.id === id);
      return product && qty > 0 ? { product, qty } : null;
    })
    .filter(Boolean) as CartLine[];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(hydrate(JSON.parse(raw) as StoredLine[]));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const payload: StoredLine[] = lines.map((l) => ({
      id: l.product.id,
      qty: l.qty,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [lines, ready]);

  const add = useCallback((product: Product, qty = 1) => {
    setLines((prev) => {
      const hit = prev.find((l) => l.product.id === product.id);
      if (hit) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { product, qty }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.product.id === id ? { ...l, qty } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines]);
  const subtotal = useMemo(
    () => lines.reduce((n, l) => n + l.product.price * l.qty, 0),
    [lines],
  );

  const value = useMemo(
    () => ({ lines, open, setOpen, add, remove, setQty, count, subtotal, clear }),
    [lines, open, add, remove, setQty, count, subtotal, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
