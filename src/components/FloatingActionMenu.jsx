/*// src/components/FloatingActionMenu.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActionMenu() {
  const [open, setOpen] = useState(false);

  const actions = [
    { id: 1, label: "WhatsApp", icon: "💬", href: "https://wa.me/56944019952", target: "_blank", bg: "bg-green-500" },
    { id: 2, label: "Reservar Hora", icon: "📅", href: "/reservas", bg: "bg-blue-600" },
    { id: 3, label: "Llamar", icon: "📞", href: "tel:+56944019952", bg: "bg-yellow-500" },
    { id: 4, label: "Promociones", icon: "🔥", href: "/promos", bg: "bg-red-500" },
  ];

  const radius = 120; // distancia radial
  const angleStep = Math.PI / (actions.length - 1); // divide 180° entre botones

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {open &&
          actions.map((action, index) => {
            const angle = index * angleStep;
            const x = radius * Math.cos(angle);
            const y = -radius * Math.sin(angle);

            return (
              <motion.a
                key={action.id}
                href={action.href}
                target={action.target || "_self"}
                className={`absolute flex items-center space-x-2 text-white font-bold py-2 px-4 rounded-2xl shadow-xl ${action.bg}`}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ x, y, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 25, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-lg">{action.icon}</span>
                <span>{action.label}</span>
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* Botón central *//*}
      <motion.button
        onClick={() => setOpen(!open)}
        className="relative w-16 h-16 rounded-full bg-black text-yellow-400 flex items-center justify-center text-4xl shadow-2xl"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {open ? "✕" : "📲"}
      </motion.button>
    </div>
  );
}
*/



// src/components/FloatingActionMenu.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "56944019952";

const actions = [
  {
    id: 1,
    label: "WhatsApp",
    icon: "💬",
    href: `https://wa.me/${PHONE}?text=${encodeURIComponent("¡Hola! Quiero hacer un pedido 🍔")}`,
    target: "_blank",
    bg: "bg-green-500 hover:bg-green-600",
  },
  {
    id: 2,
    label: "Reservar",
    icon: "📅",
    href: "#reservas",
    bg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 3,
    label: "Llamar",
    icon: "📞",
    href: `tel:+${PHONE}`,
    bg: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    id: 4,
    label: "Promociones",
    icon: "🔥",
    href: "#combos",
    bg: "bg-red-500 hover:bg-red-600",
  },
];

const radius  = 130;
const angleStep = Math.PI / (actions.length - 1);

export default function FloatingActionMenu() {
  const [open, setOpen] = useState(false);

  return (
    // Separado del CartButton: bottom-8 left-8 (esquina inferior izquierda)
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {open &&
          actions.map((action, index) => {
            // Abre hacia arriba y a la derecha (cuadrante superior derecho)
            const angle = Math.PI - index * angleStep;
            const x =  radius * Math.cos(angle);
            const y = -radius * Math.sin(angle);

            return (
              <motion.a
                key={action.id}
                href={action.href}
                target={action.target || "_self"}
                onClick={() => setOpen(false)}
                className={`absolute flex items-center gap-2 text-white font-bold py-2 px-4 rounded-2xl shadow-xl whitespace-nowrap transition-colors ${action.bg}`}
                style={{ bottom: 0, left: 0 }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ x, y: y - 32, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 22,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{action.icon}</span>
                <span className="text-sm">{action.label}</span>
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* Botón central */}
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú de acciones"}
        className="relative w-16 h-16 rounded-full bg-[#111] text-yellow-400 flex items-center justify-center text-3xl shadow-2xl ring-2 ring-yellow-400/30"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {open ? "✕" : "📲"}
      </motion.button>
    </div>
  );
}
