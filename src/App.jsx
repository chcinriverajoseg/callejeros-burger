// App.jsx
import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Combos from "./components/Combos";
import Promos from "./components/Promos";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Reserva from "./components/Reserva";

import DrinksSection from "./components/DrinksSection";
import SnacksSection from "./components/SnacksSection";
import PostresSection from "./components/PostresSection";

import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import ReservaButton from "./components/ReservaButton";
import WhatsAppReservaButton from "./components/WhatsAppReservaButton";
import WhatsAppReservaButtonAnimated from "./components/WhatsAppReservaButtonAnimated";
import WhatsAppReservaButtonPremium from "./components/WhatsAppReservaButtonPremium";
import WhatsAppReservaButtonTooltip from "./components/WhatsAppReservaButtonTooltip";
import FloatingActionMenu from "./components/FloatingActionMenu";

import ThemeToggle from "./components/ThemeToggle";

// 🛒 Carrito
import { CartProvider } from "./components/cart/CartContext";
import CartButton from "./components/cart/CartButton";
import CartSidebar from "./components/cart/CartSidebar";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-gradient-to-b from-[#FFF9F2] via-[#FFEEDD] to-[#F7E2D4] text-[#0A0A0A]">

      <CartProvider>
        <ThemeToggle />
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Combos />
        <Promos />
        <CTA />

        <DrinksSection />
        <SnacksSection />
        <PostresSection />

        <ReservaButton />
        <WhatsAppReservaButton />
        <FloatingActionMenu />

        <Footer />
        <Contacto />
        <Testimonials />
        <WhatsAppButton />
        <WhatsAppFloatButton />
        <Schedule />
        <Gallery />
        <Reserva />

        <WhatsAppReservaButtonAnimated />
        <WhatsAppReservaButtonPremium />
        <WhatsAppReservaButtonTooltip />

        {/* Botón del carrito */}
        <CartButton onOpen={() => setOpen(true)} />

        {/* Sidebar del carrito */}
        <CartSidebar open={open} onClose={() => setOpen(false)} />
      </CartProvider>

    </div>
  );
}
