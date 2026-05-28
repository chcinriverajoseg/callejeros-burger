// src/components/Navbar.jsx
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { X, ShoppingCart } from "lucide-react";
import { CartContext } from "./cart/CartContext";

const NAV_LINKS = [
  { label: "Inicio",   href: "#inicio" },
  { label: "Menú",     href: "#menu" },
  { label: "Combos",   href: "#combos" },
  { label: "Galería",  href: "#galeria" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, cart }         = useContext(CartContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── DESKTOP ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/30 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-red-500 tracking-wide hover:text-red-400 transition">
            CALLEJERO BURGER
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex gap-6 font-semibold text-white text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-red-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Acciones desktop */}
          <div className="hidden md:flex items-center gap-3">

            {/* Badge carrito */}
            <Link
              to="/menu-completo"
              className="relative flex items-center gap-2 text-white hover:text-red-400 transition-colors"
              aria-label="Ver carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1,   opacity: 1 }}
                    exit={{    scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {count > 9 ? "9+" : count}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* CTA */}
            <Link
              to="/menu-completo"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
            >
              Ver menú completo
            </Link>
          </div>

          {/* Botón mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-white"
            aria-label="Abrir menú"
          >
            <GiHamburgerMenu />
          </button>
        </nav>
      </header>

      {/* ── MOBILE ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-64 h-full bg-[#111] text-white p-6 shadow-2xl border-r border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header mobile */}
              <div className="flex justify-between items-center mb-10">
                <span className="text-lg font-extrabold text-red-500">CALLEJERO</span>
                <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                  <X className="text-red-500" size={26} />
                </button>
              </div>

              {/* Links */}
              <ul className="space-y-5 text-lg font-semibold">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block hover:text-red-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA mobile */}
              <Link
                to="/menu-completo"
                onClick={() => setOpen(false)}
                className="mt-10 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-xl transition-colors"
              >
                Ver menú completo
                {count > 0 && (
                  <span className="bg-white text-red-600 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
