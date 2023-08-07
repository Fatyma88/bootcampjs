const BASE_URL = "https://rickandmortyapi.com/api";

// Función para obtener los personajes de un episodio
const fetchEpisodeCharacters = async (episode) => {
  try {
    const response = await fetch(episode.url);
    const data = await response.json();

    // Utilizamos Promise.all para realizar las peticiones a todos los personajes del episodio
    const charactersPromises = data.characters.map((characterUrl) => fetch(characterUrl));
    const charactersResponses = await Promise.all(charactersPromises);
    const charactersData = await Promise.all(charactersResponses.map((response) => response.json()));

    return charactersData;
  } catch (error) {
    console.error("Error fetching episode characters:", error);
    return [];
  }
};

export { fetchEpisodeCharacters };


