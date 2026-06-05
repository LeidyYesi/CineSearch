import { obtenerDetalle } from "./api.js";

// Muestra las peliculas en el DOM
export function mostrarPeliculas(datos) {
  const resultado =
    document.getElementById("resultado");

  resultado.innerHTML = "";

  if (datos.Response === "False") {
    resultado.innerHTML =
      "<p>No se encontraron películas.</p>";

    return;
  }

  datos.Search.forEach((pelicula) => {
    resultado.innerHTML += `
        <div class="pelicula" data-id="${pelicula.imdbID}">
        <h3>${pelicula.Title}</h3>
        <p>${pelicula.Year}</p>
        <img src="${pelicula.Poster}">
      </div>
    `;
  });
 
 const peliculas = document.querySelectorAll(".pelicula");
 peliculas.forEach((pelicula) => {
  
  pelicula.addEventListener("click", async () => {
    const imdbID = pelicula.getAttribute("data-id");
    const detalle = await obtenerDetalle(imdbID);

      mostrarDetalle(detalle);
      //console.log(detalle);
  });
 });

}

// Muestra el detalle de la pelicula en un modal
export function mostrarDetalle(detalle) {

  const modal =
    document.getElementById("modal");

  modal.innerHTML = `
    <div class="modal-contenido">

      <button class="cerrar">
        X
      </button>

      <h2>${detalle.Title}</h2>

      <img src="${detalle.Poster}">

      <p><strong>Año:</strong> ${detalle.Year}</p>

      <p><strong>Director:</strong> ${detalle.Director}</p>

      <p><strong>Actores:</strong> ${detalle.Actors}</p>

      <p><strong>Género:</strong> ${detalle.Genre}</p>

      <p><strong>IMDb:</strong> ${detalle.imdbRating}</p>

      <p>${detalle.Plot}</p>

    </div>
  `;

  modal.classList.remove("oculto");

  modal
    .querySelector(".cerrar")
    .addEventListener("click", () => {

      modal.classList.add("oculto");

    });

}  