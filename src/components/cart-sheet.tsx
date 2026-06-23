import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export function CartSheet() {
  const { isOpen, closeCart, lines, setQty, remove, subtotal } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <h2 className="font-display text-lg">Your basket</h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary">
                <ShoppingBag className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="mt-4 font-display text-xl">Nothing in here yet.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                A warm croissant is one tap away.
              </p>
              <Link
                to="/menu"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Browse the menu
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {lines.map((l) => (
                <li key={l.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 px-5 py-4">
                  <div className="min-w-0">
                    <p className="truncate font-medium">{l.name}</p>
                    <p className="text-sm text-muted-foreground">₹{l.price}</p>
                    <div className="mt-3 inline-flex items-center rounded-full border border-border">
                      <button
                        aria-label="Decrease"
                        onClick={() => setQty(l.id, l.qty - 1)}
                        className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm tabular-nums">{l.qty}</span>
                      <button
                        aria-label="Increase"
                        onClick={() => setQty(l.id, l.qty + 1)}
                        className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end justify-between">
                    <span className="font-medium tabular-nums">₹{l.price * l.qty}</span>
                    <button
                      onClick={() => remove(l.id)}
                      aria-label="Remove"
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border px-5 py-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span className="text-base font-semibold text-foreground tabular-nums">₹{subtotal}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Taxes & delivery calculated at checkout.</p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
