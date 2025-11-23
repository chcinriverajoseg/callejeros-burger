import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ComboCard({ combo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 0.3 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition cursor-pointer p-4 overflow-hidden"
    >
      <Link to={`/combo/${combo.id}`}>
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h3 className="text-xl font-bold">{combo.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{combo.description}</p>

        <span className="text-green-600 font-semibold text-lg">
          ${combo.price}
        </span>
      </Link>
    </motion.div>
  );
}
