// src/pages/AllProducts.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCard from "../components/MenuCard";
import { products as allProducts } from "../data/products";
import useSEO from "../hooks/useSEO.jsx";

const categories = [
  { id: "all",     label: "🍽️ Todos" },
  { id: "burgers", label: "🍔 Hamburguesas" },
  { id: "combos",  label: "🎁 Combos" },
  { id: "snacks",  label: "🍟 Snacks" },
  { id: "bebidas", label: "🥤 Bebidas" },
  { id: "postres", label: "🍨 Postres" },
];

export default function AllProducts() {
  const [filter, setFilter]   = useState("all");
  const [search, setSearch]   = useState("");

  const filtered = allProducts.filter((p) => {
    const matchCat    = filter === "all" || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFF6E5] pt-28 pb-20">
      {useSEO({
        title: "Menú Completo",
        description: "Explora toda nuestra carta: hamburguesas, combos, snacks, bebidas y postres.",
        url: "https://callejeroburger.cl/menu-completo",
      })}

      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Menú Completo
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Busca y filtra entre todos nuestros productos
        </p>

        {/* Buscador */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition border ${
                filter === cat.id
                  ? "bg-red-600 text-white border-red-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                >
                  <MenuCard item={item} />
                </motion.div>
              ))
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-xl font-semibold text-gray-400 py-20"
              >
                No se encontraron productos.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
