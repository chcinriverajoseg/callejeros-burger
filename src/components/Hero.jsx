import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#e50000] text-white flex items-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* TEXTOS */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            El sabor <span className="text-red-400">callejero</span>  
            que marca la diferencia
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Hamburguesas artesanales, combos explosivos y bebidas premium.  
            ¡Pide ahora y prueba la verdadera experiencia Callejero Burger!
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex gap-4">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-bold shadow-lg"
            >
              Ver Menú
            </motion.a>

            <motion.a
              href="https://wa.me/56944019952"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-red-500 hover:bg-red-600/20 rounded-xl font-bold"
            >
              Pedir Ahora
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co/4NVhghx/burger-premium.png"
            alt="Hamburguesa Premium"
            className="w-80 md:w-[420px] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
