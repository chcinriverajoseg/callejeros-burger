import React, { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children, onAdd }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    // Notifica al App para que abra el carrito y muestre el toast
    onAdd?.(product);
  }, [onAdd]);

  const increaseQty = (id) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, p) => acc + (Number(p.price) || 0) * p.qty, 0);
  const count = cart.reduce((acc, p) => acc + p.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
