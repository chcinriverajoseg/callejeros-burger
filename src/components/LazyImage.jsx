// src/components/LazyImage.jsx
// Imagen con lazy loading nativo + fallback si la URL falla.
// Úsalo en lugar de <img> en cualquier lugar del proyecto.

import { useState } from "react";

const FALLBACK = "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=60";

export default function LazyImage({ src, alt, className = "", fallback = FALLBACK }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton mientras carga */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        src={error ? fallback : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => { setError(true); setLoaded(true); }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
