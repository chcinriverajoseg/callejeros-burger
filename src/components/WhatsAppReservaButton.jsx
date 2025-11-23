// src/components/WhatsAppReservaButton.jsx
import { useState } from "react";

export default function WhatsAppReservaButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
      
      {/* Botones secundarios */}
      {open && (
        <>
          <a
            href="/reservas"
            className="bg-yellow-500 text-black font-bold py-3 px-5 rounded-lg shadow-lg hover:bg-yellow-600 transition flex items-center space-x-2"
          >
            📅 <span>Reservar</span>
          </a>

          <a
            href="https://wa.me/56944019952"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-3 px-5 rounded-lg shadow-lg hover:bg-green-600 transition flex items-center space-x-2"
          >
            💬 <span>WhatsApp</span>
          </a>
        </>
      )}

      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-yellow-400 w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition"
      >
        {open ? "✕" : "📲"}
      </button>
    </div>
  );
}
