import { motion } from "framer-motion";
import promosData from "../data/promosData";
import PromoCard from "./PromoCard";

export default function Promos() {
  return (
    <section id="promos" className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Promociones</h2>
        <p className="text-gray-600 mt-3">
          ¡Aprovecha nuestras mejores ofertas del día!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {promosData.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
