/*import { motion } from "framer-motion";

export default function Combos() {
  const combos = [
    {
      id: 1,
      name: "Combo Callejero",
      desc: "Burger + Papas + Bebida",
      price: "$9.99",
      img: "https://images.unsplash.com/photo-1606755962773-0c51b26f2a8b?w=800",
    },
    {
      id: 2,
      name: "Combo Doble Smash",
      desc: "Doble carne, queso extra, papas",
      price: "$11.99",
      img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800",
    },
    {
      id: 3,
      name: "Combo BBQ XL",
      desc: "Burger XL + Papas grandes + Bebida",
      price: "$12.49",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Combos Destacados
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {combos.map((combo) => (
          <motion.div
            key={combo.id}
            className="rounded-2xl shadow-xl bg-[#FFF6E5] overflow-hidden hover:shadow-2xl transition border border-red-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={combo.img}
              alt={combo.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{combo.name}</h3>
              <p className="text-gray-600 mt-2">{combo.desc}</p>

              <p className="mt-4 text-red-600 text-2xl font-extrabold">
                {combo.price}
              </p>

              <motion.button
                className="mt-5 w-full bg-red-600 text-white py-3 rounded-xl font-bold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                Ordenar combo
              </motion.button>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}*/
// src/components/Combos.jsx
import { motion } from "framer-motion";

const combos = [
  {
    name: "Combo Callejero",
    desc: "Hamburguesa + Papas + Bebida",
    price: "$9.990",
    img: "https://i.ibb.co/1fxYbKR/combo1.png",
  },
  {
    name: "Combo Doble Smash",
    desc: "Doble hamburguesa + Papas + Bebida",
    price: "$11.990",
    img: "https://i.ibb.co/pRLfVWQ/combo2.png",
  },
];

export default function CombosSection() {
  return (
    <section className="py-24 bg-gradient-to-tr from-black via-[#1a1a1a] to-red-700 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center">
          Combos <span className="text-red-300">Especiales</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {combos.map((combo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-black/40 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-red-500/40"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img src={combo.img} className="w-40 drop-shadow-lg" />

                <div>
                  <h3 className="text-3xl font-bold">{combo.name}</h3>
                  <p className="text-gray-300 mt-2">{combo.desc}</p>
                  <p className="text-red-400 font-bold text-xl mt-3">{combo.price}</p>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 inline-block px-5 py-2 bg-red-600 hover:bg-red-700 rounded-xl font-semibold"
                  >
                    Pedir
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
