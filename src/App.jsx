/*import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Combos from "./components/Combos";
import DrinksSection from "./components/DrinksSection";
import SnacksSection from "./components/SnacksSection";
import PostresSection from "./components/PostresSection";
import Promos from "./components/Promos";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import Reserva from "./components/Reserva";
import CTA from "./components/CTA";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import FloatingActionMenu from "./components/FloatingActionMenu";
import ThemeToggle from "./components/ThemeToggle";

import { CartProvider } from "./components/cart/CartContext";
import CartButton from "./components/cart/CartButton";
import CartSidebar from "./components/cart/CartSidebar";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null); // { name: string }

  const handleAddToCart = useCallback((product) => {
    // Abrir el carrito si estaba cerrado
    setCartOpen(true);

    // Mostrar toast
    setToast({ name: product.name });
    setTimeout(() => setToast(null), 2500);
  }, []);

  return (
    <CartProvider onAdd={handleAddToCart}>
      <div className="bg-gradient-to-b from-[#FFF9F2] via-[#FFEEDD] to-[#F7E2D4] text-[#0A0A0A]">

        {/* ── NAVEGACIÓN ── *//*}
        <Navbar />

        {/* ── SECCIONES PRINCIPALES ── *//*}
        <Hero />
        <About />
        <Menu />
        <Combos />
        <DrinksSection />
        <SnacksSection />
        <PostresSection />
        <Promos />
        <Gallery />
        <Testimonials />
        <Schedule />
        <Reserva />
        <CTA />
        <Contacto />

        {/* ── PIE DE PÁGINA ── *//*}
        <Footer />

        {/* ── ELEMENTOS FLOTANTES ── *//*}
        <ThemeToggle />
        <FloatingActionMenu />
        <CartButton onOpen={() => setCartOpen(true)} />
        <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

        {/* ── TOAST de confirmación ── *//*}
        <AnimatePresence>
          {toast && (
            <motion.div
              key="toast"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 bg-[#111] text-white px-5 py-3 rounded-2xl shadow-2xl"
            >
              <ShoppingCart className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-sm font-semibold">
                <span className="text-red-400">{toast.name}</span> añadido al carrito
              </span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </CartProvider>
  );
}*/







// src/App.jsx
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import About           from "./components/About";
import Menu            from "./components/Menu";
import Combos          from "./components/Combos";
import DrinksSection   from "./components/DrinksSection";
import SnacksSection   from "./components/SnacksSection";
import PostresSection  from "./components/PostresSection";
import Promos          from "./components/Promos";
import Gallery         from "./components/Gallery";
import Testimonials    from "./components/Testimonials";
import Schedule        from "./components/Schedule";
import Reserva         from "./components/Reserva";
import CTA             from "./components/CTA";
import Contacto        from "./components/Contacto";
import Footer          from "./components/Footer";
import FloatingActionMenu from "./components/FloatingActionMenu";
import ThemeToggle     from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#FFF9F2] via-[#FFEEDD] to-[#F7E2D4] text-[#0A0A0A]">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Combos />
      <DrinksSection />
      <SnacksSection />
      <PostresSection />
      <Promos />
      <Gallery />
      <Testimonials />
      <Schedule />
      <Reserva />
      <CTA />
      <Contacto />
      <Footer />
      <ThemeToggle />
      <FloatingActionMenu />
    </div>
  );
}



