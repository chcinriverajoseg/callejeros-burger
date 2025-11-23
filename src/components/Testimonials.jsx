import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "María López",
    comment: "Las mejores hamburguesas que he probado. El pan suave y la carne jugosa, una locura.",
    rating: 5
  },
  {
    name: "Carlos Ramírez",
    comment: "La atención increíble y el sabor callejero de verdad. Recomendado 100%.",
    rating: 5
  },
  {
    name: "Ana Fernández",
    comment: "El ambiente brutal, la comida llega rápido y caliente. Volveré seguro.",
    rating: 4
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800"
            >
              
              {/* Estrellas */}
              <div className="flex gap-1 mb-3">
                {Array(r.rating).fill().map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-lg mb-4">{r.comment}</p>
              <h4 className="text-yellow-400 font-semibold">{r.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
