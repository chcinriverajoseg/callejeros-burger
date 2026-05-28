import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

// Cambia estas URLs por las reales del negocio
const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://facebook.com/callejeroburger",  label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/callejeroburger", label: "Instagram" },
  { icon: Youtube,   href: "https://youtube.com/@callejeroburger",  label: "YouTube" },
  { icon: Mail,      href: "mailto:contacto@callejeroburger.cl",    label: "Email" },
];

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

        {/* NAVEGACIÓN */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              { label: "Inicio",   href: "#inicio" },
              { label: "Menú",     href: "#menu" },
              { label: "Combos",   href: "#combos" },
              { label: "Galería",  href: "#galeria" },
              { label: "Reservas", href: "#reservas" },
              { label: "Contacto", href: "#contacto" },
            ].map((link) => (
              <li key={link.href} className="hover:text-white transition">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex items-center space-x-5">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                className="text-gray-300 hover:text-white transition"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-400">
            📍 Av. Principal 123, Concón<br />
            📞 +56 9 4401 9952
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 mt-10 border-t border-white/10 pt-6 text-sm">
        © {new Date().getFullYear()} Callejero Burger — Todos los derechos reservados.
      </div>
    </motion.footer>
  );
}
