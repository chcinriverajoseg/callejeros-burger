
// src/pages/ComboPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Users } from "lucide-react";
import { getById } from "../data/products";
import { CartContext } from "../components/cart/CartContext";
import useSEO from "../hooks/useSEO";

const WHATSAPP_NUMBER = "56944019952";

export default function ComboPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const combo = getById(id);

  // Verificar que sea un combo real
  if (!combo || combo.category !== "combos") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF6E5] gap-4">
        <p className="text-2xl font-bold text-gray-700">Combo no encontrado 😢</p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const msg = `¡Hola! Quiero pedir:\n• *${combo.name}* — $${Number(combo.price).toLocaleString("es-CL")}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF6E5] pt-24 pb-16 px-6">
      {useSEO({
        title: combo.name,
        description: combo.description,
        image: combo.image,
        url: `https://callejeroburger.cl/combo/${combo.id}`,
      })}

      {/* Botón volver */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-gray-600 hover:text-red-600 font-semibold transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">

          {/* Imagen */}
          <motion.div
            className="md:w-1/2 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={combo.image}
              alt={combo.name}
              className="w-full h-72 md:h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="md:w-1/2 p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              {/* Badge combo */}
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                <Users className="w-3 h-3" />
                Combo
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
                {combo.name}
              </h1>

              {combo.description && (
                <p className="text-gray-500 text-base mt-4 leading-relaxed">
                  {combo.description}
                </p>
              )}

              {/* Precio con ahorro visual */}
              <div className="mt-6">
                <p className="text-4xl font-extrabold text-red-600">
                  ${Number(combo.price).toLocaleString("es-CL")}
                </p>
                <p className="text-sm text-green-600 font-semibold mt-1">
                  ✓ Precio especial de combo
                </p>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-3 mt-8">
              <motion.button
                onClick={() => addToCart(combo)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Añadir al carrito
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir por WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
