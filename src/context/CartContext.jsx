//context/CartContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "cart:v2";
const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  /* ------------------------------ addItem() ------------------------------ */
  const addItem = (item, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.productId === item.productId);

      // If already exists in cart → update quantity within stock limit
      if (idx >= 0) {
        const next = [...prev];
        const current = next[idx];
        const cap = typeof current.maxQty === "number" ? current.maxQty : Infinity;
        const desired = current.quantity + qty;
        next[idx] = { ...current, quantity: Math.min(desired, cap) };
        return next;
      }

      // Otherwise add new item
      const cap = typeof item.maxQty === "number" ? item.maxQty : Infinity;
      return [...prev, { ...item, quantity: Math.min(qty, cap) }];
    });
  };

  /* --------------------------- updateItemQty() --------------------------- */
  const updateItemQty = (productId, qty) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.productId === productId);
      if (idx === -1) return prev;

      const next = [...prev];
      const current = next[idx];
      const cap = typeof current.maxQty === "number" ? current.maxQty : Infinity;
      const bounded = Math.max(1, Math.min(qty, cap));

      next[idx] = { ...current, quantity: bounded };
      return next;
    });
  };

  /* ----------------------------- removeItem() ---------------------------- */
  const removeItem = (productId) => {
    setItems((prev) => prev.filter((p) => p.productId !== productId));
  };

  /* ------------------------------ clearCart() ---------------------------- */
  const clearCart = () => setItems([]);

  /* ------------------------------- totals -------------------------------- */
  const totalQty = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items]
  );

  const subtotalCents = useMemo(
    () => items.reduce((sum, it) => sum + it.pricePerRentalCents * it.quantity, 0),
    [items]
  );

  /* ------------------------------- context ------------------------------- */
  return (
    <CartContext.Provider
      value={{ items, addItem, updateItemQty, removeItem, clearCart, totalQty, subtotalCents }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 HOOK EXPORT                                */
/* -------------------------------------------------------------------------- */

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};