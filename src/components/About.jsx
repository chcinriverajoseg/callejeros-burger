import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-[#fbbf24]">¿Quiénes Somos?</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            En <b>Callejeros Burger</b> combinamos pasión por la comida callejera
            con un estilo moderno, atrevido y lleno de sabor. Nuestra misión es
            llevarte las mejores hamburguesas, papas, combos y postres con una
            experiencia de primera.
          </p>
          <p className="mt-4 text-gray-400">
            Comida real, callejera, con actitud. Eso somos nosotros.
          </p>
        </motion.div>

        {/* Imagen */}
        <motion.img
          src="https://images.unsplash.com/photo-1550317138-10000687a72b"
          alt="Callejeros Burger"
          className="rounded-2xl shadow-2xl border border-white/10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </section>
  );
}
