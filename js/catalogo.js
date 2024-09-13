// Array que contiene los datos del catálogo
const catalogo = [
  {
    nombre: "Lentes de Sol Modernos",
    descripcion: "Protección UV 400. Diseño elegante y moderno.",
    precio: "$199.99",
    imagen: "./catalogImages/1.jpg",
  },
  {
    nombre: "Lentes Graduados Clásicos",
    descripcion: "Montura ligera y resistente, ideal para uso diario.",
    precio: "$249.99",
    imagen: "./catalogImages/2.jpg",
  },
  {
    nombre: "Lentes Deportivos",
    descripcion: "Perfectos para actividades al aire libre. Alta durabilidad.",
    precio: "$179.99",
    imagen: "./catalogImages/3.jpg",
  },
  {
    nombre: "Lentes de Sol Vintage",
    descripcion: "Diseño retro con montura de acetato. Estilo único.",
    precio: "$229.99",
    imagen: "./catalogImages/4.jpg",
  },
  {
    nombre: "Lentes Graduados Modernos",
    descripcion: "Montura metálica resistente. Filtro de luz azul.",
    precio: "$279.99",
    imagen: "./catalogImages/5.jpg",
  },
  {
    nombre: "Lentes Deportivos Premium",
    descripcion: "Resistentes al impacto y al agua. Ideales para deportes extremos.",
    precio: "$299.99",
    imagen: "./catalogImages/6.jpg",
  }
];

// Variables para la paginación
let currentPage = 1;
const itemsPerPage = 3; // Número de productos por página

// Función para renderizar los productos de una página
function renderizarCatalogo(page) {
  const container = document.getElementById("catalogo-container");
  container.innerHTML = ""; // Limpiar el contenedor

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = catalogo.slice(startIndex, endIndex);

  itemsToShow.forEach((lente) => {
    const cardHTML = `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 text-center shadow-sm">
          <img src="${lente.imagen}" class="card-img-top" alt="${lente.nombre}">
          <div class="card-body">
            <h5 class="card-title">${lente.nombre}</h5>
            <p class="card-text">${lente.descripcion}</p>
            <p class="precio">${lente.precio}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// Función para crear los botones de paginación
function crearPaginacion() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = ""; // Limpiar el contenedor

  const totalPages = Math.ceil(catalogo.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    if (i === currentPage) pageItem.classList.add("active");

    const pageLink = document.createElement("a");
    pageLink.classList.add("page-link");
    pageLink.href = "#";
    pageLink.innerText = i;
    pageLink.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderizarCatalogo(currentPage);
      crearPaginacion(); // Actualizar la paginación
    });

    pageItem.appendChild(pageLink);
    paginationContainer.appendChild(pageItem);
  }
}

// Renderizar la primera página cuando se carga el documento
document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo(currentPage);
  crearPaginacion();
});
