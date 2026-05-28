# 🍔 Callejero Burger

Sitio web completo para una hamburguesería callejera. Proyecto de portafolio construido con **React 19 + Vite + Tailwind CSS + Framer Motion**.

🌐 **Demo en vivo:** [callejeroburger.vercel.app](https://callejeroburger.vercel.app)  
📦 **Repositorio:** [github.com/tu-usuario/callejeros-burger](https://github.com/tu-usuario/callejeros-burger)

---

## ✨ Funcionalidades

- 🛒 **Carrito de compras** con persistencia en `localStorage` — agrega, elimina y ajusta cantidades
- 📲 **Pedido por WhatsApp** — el carrito arma el mensaje automáticamente con todos los ítems y el total
- 🔔 **Toast de confirmación** al agregar productos y apertura automática del sidebar
- 🔍 **Menú completo** con búsqueda por nombre y filtro por categoría (burgers, combos, snacks, bebidas, postres)
- 📄 **Páginas de detalle** para cada producto y combo con animaciones de entrada
- 📅 **Formulario de reserva** integrado con WhatsApp
- 🎞️ **Animaciones** con Framer Motion en cards, sidebar, hero y transiciones de página
- 📱 **Responsive** — adaptado para mobile, tablet y desktop
- 🔎 **SEO** — `<title>`, `<meta description>` y Open Graph dinámicos por página con `react-helmet-async`
- ⚡ **Lazy loading** de páginas con `React.lazy` + `Suspense` y de imágenes con fallback automático

---

## 🗂️ Estructura del proyecto

```
src/
├── components/
│   ├── cart/
│   │   ├── CartContext.jsx     # Estado global del carrito con localStorage
│   │   ├── CartButton.jsx      # Botón flotante con contador animado
│   │   └── CartSidebar.jsx     # Sidebar con overlay, scroll bloqueado y botón WhatsApp
│   ├── ProductSection.jsx      # Componente base reutilizable para todas las secciones
│   ├── LazyImage.jsx           # Imagen con skeleton + fallback automático
│   ├── Navbar.jsx              # Navegación responsive con scroll detection
│   ├── Footer.jsx              # Footer con redes sociales y navegación
│   └── ...otros componentes
├── pages/
│   ├── AllProducts.jsx         # Menú completo con búsqueda y filtros
│   ├── ProductPage.jsx         # Detalle de producto
│   └── ComboPage.jsx           # Detalle de combo
├── data/
│   └── products.js             # Fuente única de datos — todos los productos con categoría
├── hooks/
│   └── useSEO.js               # Hook de SEO con react-helmet-async
└── main.jsx                    # Rutas con lazy loading
```

---

## 🚀 Cómo correrlo localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/callejeros-burger.git
cd callejeros-burger

# 2. Instalar dependencias
npm install

# 3. Instalar dependencias adicionales usadas en el proyecto
npm install react-helmet-async

# 4. Correr en desarrollo
npm run dev

# 5. Build de producción
npm run build
```

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
| LocalStorage | Persistencia del carrito |

---

## 📐 Decisiones de arquitectura

**Fuente única de datos** — todos los productos viven en `src/data/products.js` con IDs únicos por rango (burgers: 1xx, combos: 2xx, snacks: 3xx, bebidas: 4xx, postres: 5xx). Las funciones `getByCategory` y `getById` evitan duplicar lógica de filtrado.

**`ProductSection` reutilizable** — en lugar de 5 componentes idénticos (`Menu`, `Combos`, `DrinksSection`, etc.), todos comparten el mismo componente base y solo cambian el título, la categoría y el color de fondo.

**`CartContext` con callback `onAdd`** — el contexto recibe un prop `onAdd` del `App.jsx` que permite abrir el sidebar y mostrar el toast sin acoplar el contexto a la UI.

---

## 📸 Capturas

> *(Agrega capturas de pantalla aquí)*

---

## 👤 Autor

Desarrollado por **José** como proyecto de portafolio.  
Contacto: [LinkedIn](https://linkedin.com/in/tu-usuario) · [GitHub](https://github.com/tu-usuario)
