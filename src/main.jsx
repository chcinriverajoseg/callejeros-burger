// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import ProductPage from "./pages/ProductPage";
import AllProducts from "./pages/AllProducts";
import ComboPage from "./pages/ComboPage";  // si existe
import Reserva from "./components/Reserva";  // muy importante
import ReservasPage from "./pages/ReservasPage";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>

      {/* 🏠 Página principal */}
      <Route path="/" element={<App />} />

      {/* 🔥 Página dinámica de producto */}
      <Route path="/producto/:id" element={<ProductPage />} />

      {/* 🍽️ Menú completo */}
      <Route path="/menu-completo" element={<AllProducts />} />

      {/* 🥤 Página de combo si existe */}
      <Route path="/combo/:id" element={<ComboPage />} />

      {/* 📅 Página de reservas */}
      <Route path="/reservas" element={<Reserva />} />

     <Route path="/reservas" element={<ReservasPage />} />



    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
