/*import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: "$5.99",
      desc: "Una hamburguesa clásica con queso cheddar derretido y pan artesanal.",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900",
    },
    {
      id: 2,
      name: "Bacon Burger",
      price: "$6.99",
      desc: "Crujiente bacon ahumado con queso suizo y salsa especial de la casa.",
      img: "https://images.unsplash.com/photo-1606755962773-0c51b26f2a8b?w=900",
    },
    {
      id: 3,
      name: "BBQ Burger",
      price: "$7.49",
      desc: "Carne jugosa bañada en BBQ con cebolla caramelizada y doble queso.",
      img: "https://images.unsplash.com/photo-1594212699903-ea51b0fd5cbe?w=900",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Producto no encontrado 🍔❌
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#0A0A0A] p-6 pt-28">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">

        {/* Imagen *//*}
        <motion.img
          src={product.img}
          alt={product.name}
          className="rounded-2xl shadow-xl w-full md:w-1/2 object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Información *//*}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-red-600">{product.name}</h1>
          <p className="text-xl mt-4">{product.desc}</p>

          <p className="text-3xl font-bold text-red-500 mt-6">{product.price}</p>

         <a
  href={`https://wa.me/56999999999?text=Hola!%20Quiero%20pedir%20la%20${encodeURIComponent(product.name)}%20(${product.price})`}
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    className="mt-8 w-full bg-red-600 text-white py-3 rounded-xl text-lg font-semibold"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Hacer pedido por WhatsApp
  </motion.button>
</a>


          <a
            href="/"
            className="block mt-4 text-center text-red-600 font-semibold underline"
          >
            ← Volver al menú
          </a>
        </motion.div>
      </div>
    </div>
  );
}*/


/*import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// 🟡 Aquí más adelante lo conectaremos a tu API real
import menuData from "../data/menuData"; // Asegúrate de tener tu lista de productos

export default function ProductPage() {
  const { id } = useParams();

  // Buscar el producto por ID
  const product = menuData.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Producto no encontrado 🥲
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6E5] px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10"
      >
        {/* Imagen *//*}
        <div className="w-full overflow-hidden rounded-2xl shadow-md">
          <motion.img
            key={product.id}
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Texto *//*}
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>

          <p className="text-lg text-gray-700 mb-4">{product.description}</p>

          <p className="text-2xl font-semibold text-[#d35400] mb-6">
            ${product.price}
          </p>

          {/* Botón WhatsApp *//*}
          <a
            href={`https://wa.me/56912345678?text=Hola! quiero ordenar: ${product.name}`}
            target="_blank"
            className="inline-block w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-green-700 transition"
          >
            Ordenar por WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}*/

/*import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import menuData from "../data/menuData";

// Datos locales (los mismos que Menu.jsx)
const menuItems = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Carne 100% Angus, queso cheddar, tomate y lechuga",
    price: "6.990",
    image: "/imgs/burger1.jpg",
  },
  {
    id: 2,
    name: "Burger Doble",
    description: "Doble carne, doble cheddar y pan brioche",
    price: "8.490",
    image: "/imgs/burger2.jpg",
  },
  {
    id: 3,
    name: "Burger BBQ",
    description: "Salsa BBQ casera, cebolla crispy y cheddar",
    price: "7.990",
    image: "/imgs/burger3.jpg",
  },
];

// Fusionamos TODO el menú
const allProducts = [...menuItems, ...menuData];

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscamos el producto por ID
  const product = allProducts.find((item) => item.id == id);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-bold">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6E5] text-gray-800 pt-20 px-6">

      {/* Botón volver *///}/*
    /* <button
        onClick={() => navigate(-1)}
        className="mb-6 text-lg underline text-yellow-700"
      >
        ← Volver
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="mt-4 text-gray-600 text-lg">
            {product.description}
          </p>

          <p className="mt-6 text-3xl font-bold text-yellow-600">
            ${product.price}
          </p>

          {/* Botón WhatsApp *//*}
          <a
            href={`https://wa.me/56912345678?text=Hola!%20Quiero%20pedir:%20${product.name}`}
            target="_blank"
            className="mt-8 block w-full text-center bg-green-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-green-700 transition"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
*/
// src/pages/ProductPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar producto por ID
  const product = menuData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF6E5]">
        <h2 className="text-2xl font-bold text-gray-800">Producto no encontrado</h2>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hola! Quiero pedir la *${product.name}* 🍔`;
    window.open(`https://wa.me/56912345678?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FFF6E5] flex flex-col pt-24 pb-16 px-6">

      {/* Botón Volver */}
      <button
        onClick={() => navigate(-1)}
        className="w-fit mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
      >
        ← Volver
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Imagen */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover"
        />

        {/* Información */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

          <p className="text-gray-600 text-lg mt-3">{product.description}</p>

          <p className="text-gray-500 mt-2">
            Categoría: <span className="font-semibold">{product.category}</span>
          </p>

          <p className="text-3xl font-bold text-yellow-600 mt-5">
            ${product.price}
          </p>

          {/* CTA */}
          <button
            onClick={handleWhatsApp}
            className="mt-8 w-full py-3 bg-green-600 text-white font-bold text-lg rounded-xl shadow hover:bg-green-700 transition"
          >
            Pedir por WhatsApp
          </button>
        </div>
      </motion.div>
    </div>
  );
}
