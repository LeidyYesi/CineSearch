import { buscarPeliculas } from "./api.js";
import { mostrarPeliculas } from "./ui.js";

const boton =
  document.getElementById("buscar");

boton.addEventListener("click", async () => {
  const resultado =
    document.getElementById("resultado");

  resultado.innerHTML =
    "<p>Cargando películas...</p>";

  const texto =
    document.getElementById("busqueda").value;

  const datos =
    await buscarPeliculas(texto);

  mostrarPeliculas(datos);
});

