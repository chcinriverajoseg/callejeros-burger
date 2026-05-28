// src/components/ProductSection.jsx
// Componente base reutilizable para Menu, Combos, Drinks, Snacks y Postres.
// Recibe la categoría, el título, colores y el id de la sección.

import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "./cart/CartContext";
import { getByCategory } from "../data/products";
import { ShoppingCart } from "lucide-react";

export default function ProductSection({
  id,
  category,
  title,
  bg = "bg-[#0f172a]",
}) {
  const { addToCart } = useContext(CartContext);
  const items = getByCategory(category);

  return (
    <section id={id} className={`py-20 ${bg} text-white`}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-[#fbbf24] mb-12"
        >
          {title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-1 gap-2">
                <h3 className="text-lg font-bold leading-snug">{p.name}</h3>

                {p.description && (
                  <p className="text-sm text-white/60 leading-relaxed flex-1">
                    {p.description}
                  </p>
                )}

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#fbbf24] font-bold text-lg">
                    ${Number(p.price).toLocaleString("es-CL")}
                  </span>

                  <motion.button
                    whileTap={{ scale: 0.93 }}
                    onClick={() => addToCart(p)}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Añadir
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
