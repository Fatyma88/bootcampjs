// movements.api.js

const apiUrl = 'https://api.bancaonline.com/movements';

export const getMovements = async (accountId) => {
  try {
    const response = await fetch(`${apiUrl}/${accountId}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener movimientos. Código: ${response.status}`);
    }

    const movementsData = await response.json();
    return movementsData;
  } catch (error) {
    console.error('Error en la solicitud a la API:', error.message);
    throw error;
  }
};
