// src/components/FloatingActionMenu.jsx
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

      {/* Botón central */}
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
