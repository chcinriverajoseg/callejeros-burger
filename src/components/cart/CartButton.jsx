import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function CartButton({ onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 bg-[#d7263d] text-white p-4 rounded-full shadow-lg z-50"
    >
      <ShoppingCart size={24} />
    </motion.button>
  );
}
