// src/pages/ReservasPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "56944019952";

export default function ReservasPage() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid = form.nombre.trim() && form.fecha && form.hora && form.personas;

  const enviarWhatsApp = () => {
    const mensaje = `👋 Hola, quiero hacer una reserva:\n\n👤 Nombre: ${form.nombre}\n📞 Teléfono: ${form.telefono || "No indicado"}\n📅 Fecha: ${form.fecha}\n⏰ Hora: ${form.hora}\n👥 Personas: ${form.personas}\n\n¿Está disponible?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  const inputClass = "w-full p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition";

  return (
    <div className="min-h-screen bg-[#FFF6E5] flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8 border border-red-100"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">📅 Reservar Hora</h1>
            <p className="text-gray-500 mt-2 text-sm">
              Completa tus datos y te confirmaremos por WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo *"
              className={inputClass}
              value={form.nombre}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono (opcional)"
              className={inputClass}
              value={form.telefono}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Fecha *</label>
                <input
                  type="date"
                  name="fecha"
                  className={inputClass}
                  value={form.fecha}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Hora *</label>
                <input
                  type="time"
                  name="hora"
                  className={inputClass}
                  value={form.hora}
                  onChange={handleChange}
                />
              </div>
            </div>
            <input
              type="number"
              name="personas"
              placeholder="Cantidad de personas *"
              min="1"
              max="20"
              className={inputClass}
              value={form.personas}
              onChange={handleChange}
            />

            <motion.button
              onClick={enviarWhatsApp}
              disabled={!isValid}
              whileHover={isValid ? { scale: 1.02 } : {}}
              whileTap={isValid ? { scale: 0.97 } : {}}
              className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-2xl text-lg transition-colors ${
                isValid
                  ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar Reserva por WhatsApp
            </motion.button>

            <p className="text-xs text-center text-gray-400">* Campos obligatorios</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
