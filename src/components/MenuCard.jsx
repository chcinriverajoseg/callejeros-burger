import { motion } from "framer-motion";
import { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "./cart/CartContext";

export default function MenuCard({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Imagen — clic lleva al detalle */}
      <div
        className="overflow-hidden h-48 cursor-pointer"
        onClick={() => (window.location.href = `/producto/${item.id}`)}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-xl font-bold mb-1 text-[#0A0A0A] cursor-pointer hover:text-red-600 transition-colors"
          onClick={() => (window.location.href = `/producto/${item.id}`)}
        >
          {item.name}
        </h3>

        {item.description && (
          <p className="text-sm text-gray-500 mb-3 leading-relaxed flex-1">
            {item.description}
          </p>
        )}

        {/* Precio + botones */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="text-lg font-bold text-[#D63426]">
            ${Number(item.price).toLocaleString("es-CL")}
          </span>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => (window.location.href = `/producto/${item.id}`)}
              className="text-sm text-gray-500 hover:text-red-600 font-medium transition-colors px-2 py-1"
            >
              Ver más
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCart(item)}
              className="flex items-center gap-1.5 bg-[#D63426] hover:bg-[#A6281C] text-white px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Añadir
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
