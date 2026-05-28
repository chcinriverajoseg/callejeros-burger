/*import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "./cart/CartContext";
import { productos } from "../data/products";

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const menuProducts = productos.filter((p) => p.category === "menu");

  return (
    <section id="menu" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#fbbf24] mb-12">
          Nuestro Menú
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {menuProducts.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-[#fbbf24] font-semibold mt-2">${p.price}</p>
                <button
                  className="mt-auto bg-red-600 text-white px-4 py-2 rounded font-semibold"
                  onClick={() => addToCart(p)}
                >
                  Añadir al carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/















import ProductSection from "./ProductSection";

export default function Menu() {
  return (
    <ProductSection
      id="menu"
      category="burgers"
      title="Nuestro Menú"
      bg="bg-[#0f172a]"
    />
  );
}



