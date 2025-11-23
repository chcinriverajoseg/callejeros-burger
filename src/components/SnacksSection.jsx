import { motion } from "framer-motion";
import snacksData from "../data/snacksData";



export default function SnacksSection() {
  const snacks = [
    { name: "Papas Fritas", price: "$2.000" },
    { name: "Tequeños", price: "$3.500" },
    { name: "Nuggets", price: "$3.000" },
    { name: "Aros de Cebolla", price: "$2.500" },
  ];

  return (
    <section id="snacks" className="py-16 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-10"
        >
          Snacks
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {snacks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition cursor-pointer"
            >
              <h3 className="text-xl text-white font-semibold">{item.name}</h3>
              <p className="text-[#D7263D] font-bold mt-2">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
