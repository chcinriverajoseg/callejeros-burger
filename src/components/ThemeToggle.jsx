// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="fixed top-20 right-4 z-50 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg text-lg"
    >
      {dark ? "☀️" : "🌙"}
    </motion.button>
  );
}
