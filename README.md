
# 🍔 Callejeros Burger

Sitio web completo para una hamburguesería callejera. Construido con React 19 + Vite + Tailwind CSS + Framer Motion.

🌐 **[Demo en vivo](https://callejeros-burger.vercel.app)**

---

## ✨ Funcionalidades

- 🛒 **Carrito de compras** con persistencia en localStorage
- 📲 **Pedido por WhatsApp** — el carrito arma el mensaje automáticamente con todos los ítems y el total
- 🔔 **Toast de confirmación** al agregar productos
- 🔍 **Menú completo** con búsqueda por nombre y filtro por categoría (burgers, combos, snacks, bebidas, postres)
- 📄 **Páginas de detalle** para cada producto y combo con animaciones
- 📅 **Formulario de reserva** integrado con WhatsApp
- 🎞️ **Animaciones** con Framer Motion en cards, sidebar y hero
- 📱 **Responsive** — mobile, tablet y desktop
- 🔎 **SEO** dinámico con react-helmet-async
- ⚡ **Lazy loading** de páginas e imágenes
- 🌙 **Dark mode** con persistencia en localStorage
- 🚫 **Página 404** personalizada

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | UI y estado |
| Vite | Bundler y dev server |
| Tailwind CSS | Estilos utility-first |
| Framer Motion | Animaciones |
| React Router DOM | Navegación SPA |
| react-helmet-async | SEO dinámico |
| Lucide React | Iconos |
| localStorage | Persistencia del carrito y dark mode |

---

## 🚀 Instalación local

```bash
git clone https://github.com/chcinriverajoseg/callejeros-burger.git
cd callejeros-burger
npm install
npm run dev
```

---

## 📁 Estructura del proyecto

src/
├── components/
│   ├── cart/
│   │   ├── CartContext.jsx     ← Estado global del carrito
│   │   ├── CartButton.jsx      ← Botón flotante con contador
│   │   └── CartSidebar.jsx     ← Sidebar con botón WhatsApp
│   ├── ProductSection.jsx      ← Componente reutilizable
│   ├── LazyImage.jsx           ← Imagen con skeleton + fallback
│   └── Navbar.jsx              ← Navegación con badge del carrito
├── pages/
│   ├── AllProducts.jsx         ← Menú completo con filtros
│   ├── ProductPage.jsx         ← Detalle de producto
│   ├── ComboPage.jsx           ← Detalle de combo
│   ├── ReservasPage.jsx        ← Formulario de reserva
│   └── NotFound.jsx            ← Página 404
├── data/
│   └── products.js             ← Fuente única de datos
└── hooks/
└── useSEO.jsx              ← Hook de SEO

---

## 📐 Decisiones de arquitectura

**Fuente única de datos** — todos los productos viven en `src/data/products.js` con IDs únicos por rango (burgers: 1xx, combos: 2xx, snacks: 3xx, bebidas: 4xx, postres: 5xx).

**`ProductSection` reutilizable** — todas las secciones comparten el mismo componente base y solo cambian el título, la categoría y el color de fondo.

**`CartProvider` global** — el contexto del carrito envuelve todas las rutas, permitiendo que funcione en cualquier página.

---

## 👨‍💻 Autor

**Jose Gregorio Chacin**
- GitHub: [@chcinriverajoseg](https://github.com/chcinriverajoseg)

---

## 📄 Licencia

MIT License
