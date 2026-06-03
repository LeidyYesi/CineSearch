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
      <div>
        <h3>${pelicula.Title}</h3>
        <p>${pelicula.Year}</p>
        <img src="${pelicula.Poster}">
      </div>
    `;
  });
}