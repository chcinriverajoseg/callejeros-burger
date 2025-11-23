import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#fbbf24]">
          Contáctanos
        </h2>
        <p className="mt-3 text-gray-300">
          ¿Quieres hacer un pedido o tienes alguna consulta? ¡Escríbenos!
        </p>

        <motion.a
          href="https://wa.me/584125551234?text=Hola%20quiero%20hacer%20un%20pedido%20🍔🔥"
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block bg-[#25D366] text-black font-semibold px-6 py-3 rounded-xl shadow-lg"
        >
          Escribir por WhatsApp
        </motion.a>
      </div>

    </section>
  );
}
