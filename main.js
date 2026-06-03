import { buscarPeliculas } from "./api.js";
import { mostrarPeliculas } from "./ui.js";

const boton = document.getElementById("buscar");
const inputBusqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", async () => {

const titulo = inputBusqueda.value.trim();
 if (titulo === "") {
  resultado.innerHTML =
    "<p style='color: red;'>Por favor, escribe el nombre de una película.</p>";

  inputBusqueda.focus();    //devuelve el foco al input automáticamente para que el usuario escriba nuvamente.

  return;
}
  resultado.innerHTML = "<p>Cargando películas...</p>";

  const texto = inputBusqueda.value;
  
  const datos = await buscarPeliculas(texto);

  mostrarPeliculas(datos);
});

inputBusqueda.addEventListener("keydown", (event) => {          // Escucha cada tecla que presionas dentro del imput.
  if (event.key === "Enter") {                                  // Cuando la tecla es enter: simula un click sobre el botón.
    boton.click();
  }
});