import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 bg-primary text-white px-4 py-2 rounded-xl shadow-md"
    >
      {dark ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}
