import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAV DESKTOP */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          
          {/* LOGO */}
          <h2 className="text-2xl font-extrabold text-red-500 tracking-wide">
            CALLEJERO BURGER
          </h2>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 font-semibold text-white">
            <li><a href="#inicio" className="hover:text-red-500 transition">Inicio</a></li>
            <li><a href="#menu" className="hover:text-red-500 transition">Menú</a></li>
            <li><a href="#contacto" className="hover:text-red-500 transition">Contacto</a></li>
          </ul>

          {/* Mobile button */}
          <button 
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-white"
          >
            <GiHamburgerMenu />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Side menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-64 h-full bg-[#111] text-white p-6 shadow-2xl border-r border-white/10"
            >
              
              {/* Close */}
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)}>
                  <X className="text-red-500" size={28} />
                </button>
              </div>

              {/* Items */}
              <ul className="mt-10 space-y-6 text-lg font-semibold">
                <li>
                  <a 
                    href="#inicio" 
                    onClick={() => setOpen(false)}
                    className="block hover:text-red-400"
                  >
                    Inicio
                  </a>
                </li>

                <li>
                  <a 
                    href="#menu" 
                    onClick={() => setOpen(false)}
                    className="block hover:text-red-400"
                  >
                    Menú
                  </a>
                </li>

                <li>
                  <a 
                    href="#contacto" 
                    onClick={() => setOpen(false)}
                    className="block hover:text-red-400"
                  >
                    Contacto
                  </a>
                </li>
              </ul>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
