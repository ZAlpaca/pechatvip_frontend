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

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string, size: string) => void;
  updateQty: (id: string, size: string, qty: number) => void;
  clear: () => void;
  setOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "pechatvip-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* noop */
    }
  }, [items]);

  const addItem = useCallback(
    (item: Omit<CartItem, "qty">, qty = 1) => {
      setItems((prev) => {
        const idx = prev.findIndex(
          (i) => i.id === item.id && i.size === item.size,
        );
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = { ...next[idx], qty: next[idx].qty + qty };
          return next;
        }
        return [...prev, { ...item, qty }];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((id: string, size: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size)),
    );
  }, []);

  const updateQty = useCallback((id: string, size: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id && i.size === size
            ? { ...i, qty: Math.max(0, qty) }
            : i,
        )
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const setOpen = useCallback((v: boolean) => setIsOpen(v), []);

  const value = useMemo(() => {
    const count = items.reduce((a, i) => a + i.qty, 0);
    const total = items.reduce((a, i) => a + i.qty * i.price, 0);
    return { items, count, total, isOpen, addItem, removeItem, updateQty, clear, setOpen };
  }, [items, isOpen, addItem, removeItem, updateQty, clear, setOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
