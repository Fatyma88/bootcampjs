import "./styles.css";
import { createCharacterRow, showCharacter } from "./utils.js";
import { getAllCharacters, getCharacterById } from "./data-business.js";

window.onload = async function () {
  const characters = await getAllCharacters();
  const root = document.getElementById("root");

  for (let character of characters) {
    const row = createCharacterRow(character);
    row.addEventListener("click", async () => {
      const characterDetail = await getCharacterById(character.id);
      showCharacter(characterDetail);
    });
    root.appendChild(row);
  }
};
