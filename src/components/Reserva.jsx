import { motion } from "framer-motion";
import { useState } from "react";

export default function Reserva() {
  const [nombre, setNombre] = useState("");
  const [pedido, setPedido] = useState("");
  const [personas, setPersonas] = useState("1");

  const enviarPedido = () => {
    const mensaje = `Hola! Mi nombre es ${nombre}. 
Quiero hacer este pedido/reserva: ${pedido}. 
Número de personas: ${personas}.`;

    const url = `https://wa.me/56999999999?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="reserva" className="py-20 bg-[#FFF6E5]">
      <h2 className="text-4xl font-bold text-center mb-10">
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

          {/* Nombre */}
          <input
            type="text"
            placeholder="Tu nombre"
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          {/* Pedido */}
          <textarea
            placeholder="¿Qué deseas pedir o reservar?"
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 h-28"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
          />

          {/* Personas */}
          <select
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          >
            <option>1 persona</option>
            <option>2 personas</option>
            <option>3 personas</option>
            <option>4 personas</option>
            <option>5 personas o más</option>
          </select>

          {/* Botón WhatsApp */}
          <motion.button
            onClick={enviarPedido}
            className="mt-4 bg-red-600 text-white py-3 rounded-xl font-bold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Enviar por WhatsApp
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
