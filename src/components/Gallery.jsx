import { motion } from "framer-motion";

const images = [
  "https://i.ibb.co/mcTvPtn/gallery1.jpg",
  "https://i.ibb.co/Wxq3pwT/gallery2.jpg",
  "https://i.ibb.co/YXK5whG/gallery3.jpg",
  "https://i.ibb.co/gvWgY6M/gallery4.jpg",
  "https://i.ibb.co/mHMbTXP/gallery5.jpg",
  "https://i.ibb.co/SKfpBfC/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center">
          Nuestra <span className="text-red-500">Galería</span>
        </h2>

        <p className="text-gray-300 text-center mt-3">
          Un vistazo al sabor callejero.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={src}
                alt={`Galería ${i + 1}`}
                className="w-full h-40 md:h-52 object-cover hover:scale-110 transition-all duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
