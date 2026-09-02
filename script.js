function renderProductos() {
  const grid = document.getElementById("grid-productos");

  PRODUCTOS.forEach((producto) => {
    const descuento = Math.round(100 - (producto.precio / producto.precio_antes) * 100);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-media">
        <div class="card-icon">${producto.icono}</div>
        <div class="card-media-title">${producto.nombre}</div>
        <span class="badge-discount">Oferta ${descuento}%</span>
      </div>
      <div class="card-body">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <div class="precios">
          <span class="precio-antes">${producto.precio_antes.toFixed(2)}€</span>
          <span class="precio-actual">${producto.precio.toFixed(2)}€</span>
        </div>
        <a class="btn-buy" href="${producto.link_pago}" target="_blank" rel="noopener">Comprar ahora</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderProductos();
