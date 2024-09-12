// Array que contiene los datos del catálogo
const catalogo = [
    {
      nombre: "Lentes de Sol Modernos",
      descripcion: "Protección UV 400. Diseño elegante y moderno.",
      precio: "$199.99",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      nombre: "Lentes Graduados Clásicos",
      descripcion: "Montura ligera y resistente, ideal para uso diario.",
      precio: "$249.99",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      nombre: "Lentes Deportivos",
      descripcion: "Perfectos para actividades al aire libre. Alta durabilidad.",
      precio: "$179.99",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      nombre: "Lentes de Sol Vintage",
      descripcion: "Diseño retro con montura de acetato. Estilo único.",
      precio: "$229.99",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      nombre: "Lentes Graduados Modernos",
      descripcion: "Montura metálica resistente. Filtro de luz azul.",
      precio: "$279.99",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      nombre: "Lentes Deportivos Premium",
      descripcion: "Resistentes al impacto y al agua. Ideales para deportes extremos.",
      precio: "$299.99",
      imagen: "https://via.placeholder.com/300x200",
    }
  ];
  
  // Función que renderiza el catálogo
  function renderizarCatalogo() {
    const container = document.getElementById("catalogo-container");
  
    catalogo.forEach((lente) => {
      // Crear la tarjeta HTML
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
  
      // Insertar la tarjeta en el contenedor
      container.innerHTML += cardHTML;
    });
  }
  
  // Llamar a la función para renderizar el catálogo cuando la página se cargue
  document.addEventListener("DOMContentLoaded", renderizarCatalogo);