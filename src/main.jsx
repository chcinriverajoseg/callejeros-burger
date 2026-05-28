// src/main.jsx
import React, { lazy, Suspense, useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import "./index.css";

import App from "./App";
import { CartProvider } from "./components/cart/CartContext";
import CartButton  from "./components/cart/CartButton";
import CartSidebar from "./components/cart/CartSidebar";

// Páginas lazy
const ProductPage  = lazy(() => import("./pages/ProductPage"));
const AllProducts  = lazy(() => import("./pages/AllProducts"));
const ComboPage    = lazy(() => import("./pages/ComboPage"));
const ReservasPage = lazy(() => import("./pages/ReservasPage"));
const NotFound     = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6E5]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 font-semibold text-sm">Cargando...</p>
      </div>
    </div>
  );
}

function RootLayout() {
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast]       = useState(null);

  const handleAdd = useCallback((product) => {
    setCartOpen(true);
    setToast({ name: product.name });
    setTimeout(() => setToast(null), 2500);
  }, []);

  return (
    <CartProvider onAdd={handleAdd}>

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"              element={<App />} />
          <Route path="/producto/:id"  element={<ProductPage />} />
          <Route path="/menu-completo" element={<AllProducts />} />
          <Route path="/combo/:id"     element={<ComboPage />} />
          <Route path="/reservas"      element={<ReservasPage />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Carrito flotante — visible en todas las páginas */}
      <CartButton onOpen={() => setCartOpen(true)} />
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Toast global */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{   opacity: 0, y: 20,  scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 bg-[#111] text-white px-5 py-3 rounded-2xl shadow-2xl pointer-events-none"
          >
            <ShoppingCart className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span className="text-sm font-semibold">
              <span className="text-red-400">{toast.name}</span> añadido al carrito
            </span>
          </motion.div>
        )}
      </AnimatePresence>

    </CartProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
