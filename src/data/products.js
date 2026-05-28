// src/data/products.js
// Fuente única de verdad para todos los productos del menú.
// Reemplaza: menuData.js, combosData.js, drinksData.js, snacksData.js, postresData.js

export const products = [

  // ── HAMBURGUESAS ─────────────────────────────────────────────
  {
    id: 101,
    name: "Cheese Bacon Burger",
    description: "Carne Angus, queso cheddar doble, tocino crujiente y salsa especial",
    price: 8990,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  },
  {
    id: 102,
    name: "Burger Clásica XL",
    description: "Carne 200g, tomate, lechuga, pepinillos y mayonesa casera",
    price: 7990,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
  },
  {
    id: 103,
    name: "Chicken Crispy Burger",
    description: "Pollo frito crujiente, lechuga, pickles y salsa mayo-garlic",
    price: 7490,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
  },

  // ── COMBOS ───────────────────────────────────────────────────
  {
    id: 201,
    name: "Combo Familiar",
    description: "2 Hamburguesas + Papas grandes + 2 Refrescos + Nuggets",
    price: 17990,
    category: "combos",
    image: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg",
  },
  {
    id: 202,
    name: "Combo Pareja",
    description: "2 Smash Burgers + Papas medianas + 2 bebidas",
    price: 13990,
    category: "combos",
    image: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg",
  },
  {
    id: 203,
    name: "Combo Individual",
    description: "1 Hamburguesa clásica + papas + bebida",
    price: 8990,
    category: "combos",
    image: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg",
  },
  {
    id: 204,
    name: "Combo Premium",
    description: "Burger doble carne + papas especiales + bebida",
    price: 10990,
    category: "combos",
    image: "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg",
  },

  // ── SNACKS ───────────────────────────────────────────────────
  {
    id: 301,
    name: "Papas Fritas Clásicas",
    description: "Porción de papas crujientes recién hechas",
    price: 2500,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
  },
  {
    id: 302,
    name: "Papas con Cheddar y Bacon",
    description: "Papas bañadas en cheddar derretido y tocino",
    price: 3500,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80",
  },
  {
    id: 303,
    name: "Nuggets de Pollo",
    description: "8 unidades con salsa a elección",
    price: 3000,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  },
  {
    id: 304,
    name: "Aros de Cebolla",
    description: "Aros crujientes y dorados",
    price: 2800,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80",
  },

  // ── BEBIDAS ──────────────────────────────────────────────────
  {
    id: 401,
    name: "Coca-Cola 350ml",
    description: "Botella fría para acompañar tu burger",
    price: 1500,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80",
  },
  {
    id: 402,
    name: "Fanta 350ml",
    description: "Refrescante sabor naranja",
    price: 1500,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1624552184280-9e48154b12e4?w=600&q=80",
  },
  {
    id: 403,
    name: "Sprite 350ml",
    description: "Limonada gasificada ultra refrescante",
    price: 1500,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80",
  },
  {
    id: 404,
    name: "Jugo Natural",
    description: "100% fruta natural según disponibilidad",
    price: 2000,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
  },

  // ── POSTRES ──────────────────────────────────────────────────
  {
    id: 501,
    name: "Churros Dulces",
    description: "6 churros con azúcar y canela",
    price: 2500,
    category: "postres",
    image: "https://images.unsplash.com/photo-1624371414361-e670edf4b0bc?w=600&q=80",
  },
  {
    id: 502,
    name: "Brownie con Helado",
    description: "Brownie tibio con bola de helado de vainilla",
    price: 3800,
    category: "postres",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80",
  },
  {
    id: 503,
    name: "Milkshake Oreo",
    description: "Malteada cremosa con trozos de Oreo",
    price: 3500,
    category: "postres",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
  },
  {
    id: 504,
    name: "Helado Sundae",
    description: "Vainilla con salsa de chocolate y maní",
    price: 2800,
    category: "postres",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
  },
];

// Helpers de filtrado reutilizables
export const getByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getById = (id) =>
  products.find((p) => p.id === Number(id));

// Alias para compatibilidad con componentes existentes que importan { productos }
export const productos = products;

export default products;
