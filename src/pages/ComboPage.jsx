/*// src/pages/ComboPage.jsx
import { useParams } from "react-router-dom";
import menuData from "../data/menuData"; 
import combosData from "../data/combosData"; 



export default function ComboPage() {
  const { id } = useParams();
  const combo = combosData.find((c) => c.id === Number(id));

  if (!combo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF6E5]">
        <h2 className="text-3xl font-bold text-red-600">
          Combo no encontrado 😢
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6E5] flex flex-col items-center py-16 px-6">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800">{combo.name}</h1>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            {combo.description}
          </p>

          <p className="mt-6 text-3xl font-extrabold text-yellow-600">
            ${combo.price}
          </p>

          <button
            className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-bold text-lg transition"
            onClick={() =>
              window.open(
                `https://wa.me/56912345678?text=Hola! Quiero el ${combo.name}`,
                "_blank"
              )
            }
          >
            Pedir por WhatsApp
          </button>
        </div>
      </div>

      <button
        className="mt-8 text-lg underline text-gray-800"
        onClick={() => window.history.back()}
      >
        ← Volver
      </button>
    </div>
  );
}*/
import combosData from "../data/combosData";
import ComboCard from "../components/ComboCard";

export default function CombosPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Nuestros Combos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {combosData.map((combo) => (
          <ComboCard key={combo.id} combo={combo} />
        ))}
      </div>
    </div>
  );
}


