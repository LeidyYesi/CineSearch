import { API_KEY } from "./config.js";


export async function buscarPeliculas(titulo) {
  const respuesta = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`
  );

  const datos = await respuesta.json();

  return datos;
}