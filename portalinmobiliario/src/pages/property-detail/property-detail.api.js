

// URL de la API
const apiUrl = 'https://api.localhost:3000/properties/property-detail';

// Función para obtener datos de la propiedad desde la API
export const getPropertyDetailsFromAPI = async (propertyId) => {
  try {
    // Simular una solicitud a la API utilizando fetch
    const response = await fetch(`${apiUrl}/${propertyId}`);
    
    // Verificar si la solicitud fue exitosa (código 200)
    if (!response.ok) {
      throw new Error(`Error al obtener detalles de la propiedad. Código: ${response.status}`);
    }

    // Convertir la respuesta a formato JSON
    const propertyData = await response.json();

    // Devolver los datos de la propiedad
    return propertyData;
  } catch (error) {
    console.error('Error en la solicitud a la API:', error.message);
    // Puedes manejar el error según tus necesidades (mostrar un mensaje, redirigir, etc.)
    throw error;
  }
};
