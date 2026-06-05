const API_KEY = "f8e92d19";  // APi_Key publica con fines educativos

// Buesca peliculas por titulo
export async function buscarPeliculas(titulo) {
  const respuesta = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`
  );

  const datos = await respuesta.json();

  return datos;
}

// Obtiene el detalle de la pelicula
export async function obtenerDetalle(id) {
  const respuesta = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );

  const datos = await respuesta.json();

  return datos;
}