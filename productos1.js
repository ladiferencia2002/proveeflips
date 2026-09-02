// EDITA AQUI TUS PRODUCTOS. No necesitas saber programar:
// - Copia un bloque { ... } entero para añadir un producto nuevo, o bórralo para eliminarlo.
// - "icono" es un emoji que representa el producto (copia y pega cualquier emoji ahi, ej: 👟 📱 💄 👗).
// - "link_pago" es el enlace de pago de Stripe de ESE producto concreto (te lo explico aparte).

const PRODUCTOS = [
  {
    id: "pack-express",
    nombre: "Pack Express",
    descripcion: "Proveedores de ropa, calzado, tecnología y perfumes con envío rápido garantizado. Ideal para empezar a vender esta misma semana.",
    icono: "📦",
    precio: 19.95,
    precio_antes: 39.95,
    link_pago: "https://buy.stripe.com/28E28sdWN3Zt6pf5ko7g401"
  },
  {
    id: "guia-vinted",
    nombre: "Guía Vinted",
    descripcion: "Guía paso a paso para vender en Vinted: fotos que venden, cómo fijar precios, subir el algoritmo y conseguir tus primeras ventas.",
    icono: "📘",
    precio: 9.95,
    precio_antes: 19.95,
    link_pago: "https://buy.stripe.com/3cI7sM6ul3Zt4h74gk7g400"
  }
];
