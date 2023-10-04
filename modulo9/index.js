import "./styles.css";
// index.js
import { fetchCharacters } from "./data-business.js";

document.addEventListener("DOMContentLoaded", async () => {
  const rootElement = document.getElementById("root");
  const characterDetailElement = document.getElementById("character-detail");

  // Obtén la lista de personajes
  const characters = await fetchCharacters();

  // Función para mostrar el detalle de un personaje
  const showCharacterDetail = (character) => {
    characterDetailElement.innerHTML = "";
    // Usa la función "showCharacter" de utils.js para mostrar el detalle
    // aquí puedes expandir la información del personaje si lo deseas.
    showCharacter(character);
  };

  // Crea una fila para cada personaje y agrégala al DOM
  characters.forEach((character) => {
    const characterRow = createCharacterRow(character);
    rootElement.appendChild(characterRow);

    // Agrega un listener para mostrar el detalle al hacer clic en el personaje
    characterRow.addEventListener("click", () => {
      showCharacterDetail(character);
    });
  });
});


