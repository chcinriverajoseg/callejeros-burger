// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF6E5] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="text-8xl mb-6">🍔</div>

        <h1 className="text-7xl font-extrabold text-red-600 mb-2">404</h1>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Página no encontrada
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Parece que esta página se la comieron. Vuelve al inicio y encuentra tu burger perfecta.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              🏠 Volver al inicio
            </motion.button>
          </Link>

          <Link to="/menu-completo">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 font-bold px-6 py-3 rounded-xl border border-gray-200 transition-colors"
            >
              🍔 Ver el menú
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
