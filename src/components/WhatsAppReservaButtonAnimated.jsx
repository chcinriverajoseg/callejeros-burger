// src/components/WhatsAppReservaButtonAnimated.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppReservaButtonAnimated() {
  const [open, setOpen] = useState(false);

  // Variantes para animación de los botones secundarios
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 500, damping: 30 } },
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              href="/reservas"
              className="bg-yellow-500 text-black font-bold py-3 px-5 rounded-lg shadow-lg hover:bg-yellow-600 transition flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants}
            >
              📅 <span>Reservar</span>
            </motion.a>

            <motion.a
              href="https://wa.me/56944019952"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-5 rounded-lg shadow-lg hover:bg-green-600 transition flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants}
            >
              💬 <span>WhatsApp</span>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="bg-black text-yellow-400 w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        {open ? "✕" : "📲"}
      </motion.button>
    </div>
  );
}
