import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartButton({ onOpen }) {
  const { count } = useContext(CartContext);

  return (
    <motion.button
      onClick={onOpen}
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#111214] text-white px-4 py-3 rounded-full shadow-2xl ring-1 ring-white/10"
    >
      <ShoppingCart className="w-6 h-6" />

      <span className="text-sm font-semibold">Carrito</span>

      {count > 0 && (
        <motion.span
          key={count}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="ml-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-red-600 text-white"
        >
          {count}
        </motion.span>
      )}
    </motion.button>
  );
}
