import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MenuItem } from "./menu-data";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: MenuItem) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  subtotal: number;
  itemCount: number;
};

const CartCtx = createContext<CartState | null>(null);
const STORAGE_KEY = "croissantwala_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {}
  }, [lines, hydrated]);

  const value = useMemo<CartState>(() => {
    const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
    const itemCount = lines.reduce((s, l) => s + l.qty, 0);
    return {
      lines,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (item) => {
        setLines((prev) => {
          const existing = prev.find((l) => l.id === item.id);
          if (existing) {
            return prev.map((l) =>
              l.id === item.id ? { ...l, qty: l.qty + 1 } : l,
            );
          }
          return [
            ...prev,
            { id: item.id, name: item.name, price: item.price, qty: 1 },
          ];
        });
        setIsOpen(true);
      },
      setQty: (id, qty) => {
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.id !== id)
            : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
        );
      },
      remove: (id) => setLines((prev) => prev.filter((l) => l.id !== id)),
      clear: () => setLines([]),
      subtotal,
      itemCount,
    };
  }, [lines, isOpen]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
