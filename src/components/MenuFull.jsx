import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuFull() {
  const [category, setCategory] = useState("hamburguesas");

  const menu = {
    hamburguesas: [
      { name: "Burger Clásica", price: "$4.000" },
      { name: "Burger Doble Carne", price: "$5.500" },
      { name: "BBQ Bacon", price: "$5.800" },
      { name: "Cheddar Supreme", price: "$6.000" },
    ],
    bebidas: [
      { name: "Coca-Cola", price: "$1.500" },
      { name: "Fanta", price: "$1.500" },
      { name: "Sprite", price: "$1.500" },
      { name: "Jugo Natural", price: "$2.000" },
    ],
    snacks: [
      { name: "Papas Fritas", price: "$2.000" },
      { name: "Tequeños", price: "$3.500" },
      { name: "Nuggets", price: "$3.000" },
      { name: "Aros de Cebolla", price: "$2.500" },
    ],
    postres: [
      { name: "Brownie", price: "$2.000" },
      { name: "Helado", price: "$1.800" },
      { name: "Torta de Chocolate", price: "$2.500" },
      { name: "Cheesecake", price: "$2.800" },
    ],
  };

  return (
    <section id="menu-completo" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          Nuestro Menú
        </motion.h2>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "hamburguesas", label: "Hamburguesas" },
            { id: "bebidas", label: "Bebidas" },
            { id: "snacks", label: "Snacks" },
            { id: "postres", label: "Postres" },
          ].map((btn) => (
            <motion.button
              key={btn.id}
              onClick={() => setCategory(btn.id)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition 
                ${
                  category === btn.id
                    ? "bg-[#D7263D] text-white shadow-lg"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }
              `}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* LISTADO DE PRODUCTOS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {menu[category].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-[#D7263D] font-bold mt-2">{item.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
