import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function CartSidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">Tu Carrito</h2>
              <button onClick={onClose}>
                <X size={28} />
              </button>
            </div>

            <p className="text-gray-600">Tu carrito está vacío por ahora.</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
