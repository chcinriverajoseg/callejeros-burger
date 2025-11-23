
import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import menuData from "../data/menuData";


const productos = [
  {
    nombre: "Burger Clásica",
    precio: "$7.99",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    nombre: "Burger Doble Queso",
    precio: "$9.99",
    imagen: "https://images.unsplash.com/photo-1550547660-2f33dd0e4e4b"
  },
  {
    nombre: "Papas Callejeras",
    precio: "$4.50",
    imagen: "https://images.unsplash.com/photo-1546039907-7fef22df6bc5"
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center text-[#fbbf24] mb-12">
          Nuestro Menú
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {productos.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg overflow-hidden"
            >
              <img src={p.imagen} alt={p.nombre} className="w-full h-40 object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-bold">{p.nombre}</h3>
                <p className="text-[#fbbf24] font-semibold mt-2">{p.precio}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
