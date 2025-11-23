import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-[#FFBB33] text-black text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        ¿Listo para disfrutar las mejores hamburguesas callejeras?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg"
      >
        Haz tu pedido ahora mismo o reserva una mesa.
      </motion.p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
        {/* Botón WhatsApp */}
        <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          href="https://wa.me/56912345678"
          target="_blank"
          className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 transition"
        >
          Hacer Pedido por WhatsApp
        </motion.a>

        {/* Botón Reservar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to="/reserva"
            className="px-8 py-4 bg-black text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            Reservar Mesa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
