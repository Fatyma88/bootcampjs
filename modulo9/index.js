import { createCharacterRow, showCharacter } from "./utils.js";
import { fetchEpisodeCharacters } from "./data-business.js";

// ... (código existente)

const loadCharacters = async () => {
  const episode = {
    id: 10,
    name: "Close Rick-counters of the Rick Kind",
    air_date: "April 7, 2014",
    episode: "S01E10",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      // ... (otros enlaces de personajes)
      "https://rickandmortyapi.com/api/character/663"
    ],
    url: "https://rickandmortyapi.com/api/episode/10",
    created: "2017-11-10T12:56:34.747Z"
  };

  const characters = await fetchEpisodeCharacters(episode);
  renderCharactersList(characters);
};

// ... (resto del código)



