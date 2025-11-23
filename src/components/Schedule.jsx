import { Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        {/* Horario */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Clock size={28} /> Horarios
          </h2>

          <ul className="text-lg space-y-2">
            <li><b>Lunes a Viernes:</b> 12:00 pm – 11:00 pm</li>
            <li><b>Sábado:</b> 12:00 pm – 01:00 am</li>
            <li><b>Domingo:</b> 2:00 pm – 10:00 pm</li>
          </ul>
        </motion.div>

        {/* Ubicación resumida */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <MapPin size={28} /> Ubicación
          </h2>

          <p className="text-lg leading-relaxed">
            Estamos en el corazón de la ciudad, cerca de las principales avenidas.
            Atención rápida, ambiente callejero y sabor brutal.
          </p>

          <p className="mt-4 text-yellow-400 font-semibold">
            📍 Dirección: Avenida Principal Callejeros #123
          </p>
        </motion.div>

      </div>
    </section>
  );
}
