// src/components/WhatsAppReservaButtonTooltip.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppReservaButtonTooltip() {
  const [open, setOpen] = useState(false);

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 700, damping: 25 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 20,
      transition: { type: "spring", stiffness: 700, damping: 25 },
    },
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
      <AnimatePresence>
        {open && (
          <>
            {/* Tooltip Reservar */}
            <motion.a
              href="/reservas"
              className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-2xl shadow-xl flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
            >
              📅 <span>Reservar ahora</span>
            </motion.a>

            {/* Tooltip WhatsApp */}
            <motion.a
              href="https://wa.me/56944019952"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-2xl shadow-xl flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
            >
              💬 <span>Contáctanos</span>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-4xl shadow-2xl"
        animate={{ rotate: open ? 45 : 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 700, damping: 20 }}
      >
        {open ? "✕" : "📲"}
      </motion.button>
    </div>
  );
}
