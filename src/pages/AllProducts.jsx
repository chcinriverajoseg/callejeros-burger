
/*import { useState } from "react";
import { motion } from "framer-motion";

export default function AllProducts() {
  const products = [
    { id: 1, name: "Cheese Burger", price: 5.99, category: "burgers", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800" },
    { id: 2, name: "Bacon Burger", price: 6.99, category: "burgers", img: "https://images.unsplash.com/photo-1606755962773-0c51b26f2a8b?w=800" },
    { id: 3, name: "BBQ Burger", price: 7.49, category: "burgers", img: "https://images.unsplash.com/photo-1594212699903-ea51b0fd5cbe?w=800" },
    { id: 4, name: "Papas Fritas", price: 3.49, category: "sides", img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800" },
    { id: 5, name: "Aros de Cebolla", price: 3.99, category: "sides", img: "https://images.unsplash.com/photo-1586201375761-83865001e31b?w=800" },
    { id: 6, name: "Coca-Cola", price: 1.99, category: "drinks", img: "https://images.unsplash.com/photo-1580910051074-e0d6607ed5c4?w=800" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Nuestro Menú Completo</h2>

      {/* Filtros *//*}
      <div className="flex justify-center gap-4 mb-10">
        {["all", "burgers", "sides", "drinks"].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl font-semibold transition 
              ${activeCategory === cat ? "bg-red-600 text-white" : "bg-white shadow"}`}
          >
            {cat === "all" ? "Todo" :
             cat === "burgers" ? "Hamburguesas" :
             cat === "sides" ? "Acompañantes" :
             "Bebidas"}
          </button>
        ))}
      </div>

      {/* Grid de productos *//*}
      <div className="grid md:grid-cols-3 gap-10">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => window.location.href = `/producto/${item.id}`}
            className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={item.name} className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-xl text-red-600 font-semibold mt-2">${item.price}</p>

              <motion.button
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver más
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}*/

/*import { useState } from "react";
import { motion } from "framer-motion";
import MenuCard from "../components/MenuCard";
import menuData from "../data/menuData";

// Datos locales del menú (los mismos que Menu.jsx)
const menuItems = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Carne 100% Angus, queso cheddar, tomate y lechuga",
    price: "6.990",
    image: "/imgs/burger1.jpg",
    category: "Hamburguesas",
  },
  {
    id: 2,
    name: "Burger Doble",
    description: "Doble carne, doble cheddar y pan brioche",
    price: "8.490",
    image: "/imgs/burger2.jpg",
    category: "Hamburguesas",
  },
  {
    id: 3,
    name: "Burger BBQ",
    description: "Salsa BBQ casera, cebolla crispy y cheddar",
    price: "7.990",
    image: "/imgs/burger3.jpg",
    category: "Hamburguesas",
  },
];

// Unimos todo el menú
const allProducts = [...menuItems, ...menuData];

// Extraemos todas las categorías
const categories = ["Todo", ...new Set(allProducts.map((item) => item.category || "Otros"))];

export default function AllProducts() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("Todo");

  // Filtrado por texto + categoría
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === "Todo" ? true : product.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FFF6E5] pt-24 px-6 text-gray-800">

      {/* Título *//*}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Menú Completo</h1>
        <p className="text-gray-600 mt-2">Busca y filtra entre todos nuestros productos</p>
      </div>

      {/* Buscador *//*}
      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Buscar hamburguesa, combo, snack..."
          className="w-full p-3 border border-gray-300 rounded-xl text-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filtros de categorías *//*}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
              filterCategory === cat
                ? "bg-yellow-600 text-white border-yellow-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid productos *//*}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-xl font-semibold text-gray-600">
            No se encontraron productos.
          </p>
        )}
      </div>
    </div>
  );
}*/

// src/pages/AllProducts.jsx
// src/pages/AllProducts.jsx
import { useState } from "react";
import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";

export default function AllProducts() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "burgers", label: "Hamburguesas" },
    { id: "sides", label: "Acompañamientos" },
    { id: "drinks", label: "Bebidas" },
  ];

  const filteredItems =
    filter === "all"
      ? menuData
      : menuData.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#FFF6E5] pt-28 pb-20">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Menú Completo
      </h1>

      {/* FILTROS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2 rounded-full font-semibold transition border 
            ${
              filter === cat.id
                ? "bg-yellow-500 text-black border-yellow-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* LISTA DE PRODUCTOS */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
      >
        {filteredItems.map((item) => (
          <motion.div key={item.id} layout>
            <MenuCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
