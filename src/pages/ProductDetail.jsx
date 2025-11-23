import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: "$5.99",
      description: "Jugosa hamburguesa con queso cheddar y pan artesanal.",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    },
    {
      id: 2,
      name: "Bacon Burger",
      price: "$6.99",
      description: "Hamburguesa con crujiente bacon y queso americano.",
      img: "https://images.unsplash.com/photo-1606755962773-0c51b26f2a8b?w=800",
    },
    {
      id: 3,
      name: "BBQ Burger",
      price: "$7.49",
      description: "Carne a la parrilla bañada con salsa BBQ casera.",
      img: "https://images.unsplash.com/photo-1594212699903-ea51b0fd5cbe?w=800",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center py-20 text-2xl">Producto no encontrado</h2>;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.img
        src={product.img}
        alt={product.name}
        className="w-full h-80 object-cover rounded-2xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div className="mt-8">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl text-red-600 font-semibold mt-2">{product.price}</p>
        <p className="mt-4 text-lg">{product.description}</p>

        <motion.button
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Añadir al carrito
        </motion.button>
      </div>
    </section>
  );
}
