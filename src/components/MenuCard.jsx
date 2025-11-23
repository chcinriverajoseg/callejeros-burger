import { motion } from "framer-motion";

export default function MenuCard({ item }) {
  return (
    <motion.div
      key={item.id}
      onClick={() => (window.location.href = `/producto/${item.id}`)}
      className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
      
      // Animación de entrada suave
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}

      // Hover moderno
      whileHover={{ scale: 1.03, rotate: 0.4 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Imagen */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-[#0A0A0A]">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#D63426]">${item.price}</span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-[#D63426] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#A6281C] transition"
          >
            Ver más
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
