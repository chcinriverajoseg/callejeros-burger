import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "56944019952"; // Mismo número que el resto del proyecto

export default function Reserva() {
  const [nombre, setNombre] = useState("");
  const [pedido, setPedido] = useState("");
  const [personas, setPersonas] = useState("1 persona");

  const enviarPedido = () => {
    const mensaje = `¡Hola! Mi nombre es ${nombre}.\nQuiero hacer esta reserva/pedido: ${pedido}.\nNúmero de personas: ${personas}.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <section id="reservas" className="py-20 bg-[#FFF6E5]">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Hacer Pedido o Reserva
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 border border-red-200"
      >
        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Tu nombre"
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 text-gray-800"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <textarea
            placeholder="¿Qué deseas pedir o reservar?"
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 h-28 resize-none text-gray-800"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
          />

          <select
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 text-gray-800"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          >
            <option>1 persona</option>
            <option>2 personas</option>
            <option>3 personas</option>
            <option>4 personas</option>
            <option>5 personas o más</option>
          </select>

          <motion.button
            onClick={enviarPedido}
            disabled={!nombre.trim() || !pedido.trim()}
            className="mt-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-lg transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Enviar por WhatsApp
          </motion.button>

        </div>
      </motion.div>
    </section>
  );
}

