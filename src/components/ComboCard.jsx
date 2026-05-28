// src/components/ComboCard.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "./cart/CartContext";

export default function ComboCard({ combo }) {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden flex flex-col"
    >
      {/* Imagen — clic lleva al detalle */}
      <Link to={`/combo/${combo.id}`} className="overflow-hidden h-48 block">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </Link>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/combo/${combo.id}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors">
            {combo.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed flex-1">
          {combo.description}
        </p>

        {/* Precio + botones */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <span className="text-lg font-bold text-red-600">
            ${Number(combo.price).toLocaleString("es-CL")}
          </span>

          <div className="flex items-center gap-2">
            <Link
              to={`/combo/${combo.id}`}
              className="text-sm text-gray-400 hover:text-red-600 font-medium transition-colors px-2 py-1"
            >
              Ver más
            </Link>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCart(combo)}
              className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
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
