import { motion } from "framer-motion";

function PromoCard({ promo }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 cursor-pointer overflow-hidden"
      
      // Animación al aparecer en pantalla
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}

      // Animación al pasar el mouse
      whileHover={{ scale: 1.03, rotate: 0.3 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Imagen */}
      <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
        <img
          src={promo.img}
          alt={promo.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto */}
      <h3 className="text-xl font-bold">{promo.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{promo.description}</p>

      {/* Precio */}
      <p className="text-lg font-bold text-red-600 mt-3">{promo.price}</p>

      {/* Botón */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl font-semibold hover:bg-red-700 transition"
      >
        Ver Promoción
      </motion.button>
    </motion.div>
  );
}

export default PromoCard;
