const baseUrl = "https://rickandmortyapi.com/api";

async function getAllCharacters() {
  const response = await fetch(`${baseUrl}/character`);
  const data = await response.json();
  return data.results;
}

async function getCharacterById(id) {
  const response = await fetch(`${baseUrl}/character/${id}`);
  const data = await response.json();
  return data;
}

export { getAllCharacters, getCharacterById };
