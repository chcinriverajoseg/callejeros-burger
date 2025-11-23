import { useState } from "react";

export default function ReservasPage() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsApp = () => {
    const mensaje = `👋 Hola, quiero hacer una reserva:

👤 Nombre: ${form.nombre}
📞 Teléfono: ${form.telefono}
📅 Fecha: ${form.fecha}
⏰ Hora: ${form.hora}
👥 Personas: ${form.personas}

¿Está disponible?`;

    const url = `https://wa.me/56944019952?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FFF6E5] px-6 py-20">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          📅 Reservar Hora
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Completa tus datos y te confirmaremos por WhatsApp.
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            className="w-full p-3 border rounded-xl bg-gray-100"
            value={form.nombre}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            className="w-full p-3 border rounded-xl bg-gray-100"
            value={form.telefono}
            onChange={handleChange}
          />

          <input
            type="date"
            name="fecha"
            className="w-full p-3 border rounded-xl bg-gray-100"
            value={form.fecha}
            onChange={handleChange}
          />

          <input
            type="time"
            name="hora"
            className="w-full p-3 border rounded-xl bg-gray-100"
            value={form.hora}
            onChange={handleChange}
          />

          <input
            type="number"
            name="personas"
            placeholder="Cantidad de personas"
            className="w-full p-3 border rounded-xl bg-gray-100"
            value={form.personas}
            onChange={handleChange}
          />

          <button
            onClick={enviarWhatsApp}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl text-lg hover:bg-green-700 transition"
          >
            📲 Enviar Reserva por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
