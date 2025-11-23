import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#e50000] text-white py-12"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">Callejero Burger</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Las mejores hamburguesas callejeras, combos, snacks y bebidas.
            Calidad premium, sabor único y estilo urbano.
          </p>
        </div>

        {/* ENLACES */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition"><a href="#inicio">Inicio</a></li>
            <li className="hover:text-white transition"><a href="#menu">Menú</a></li>
            <li className="hover:text-white transition"><a href="#combos">Combos</a></li>
            <li className="hover:text-white transition"><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex items-center space-x-5">
            <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <Facebook />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <Instagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <Youtube />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <Mail />
            </motion.a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Callejero Burger — Todos los derechos reservados.
      </div>
    </motion.footer>
  );
}
