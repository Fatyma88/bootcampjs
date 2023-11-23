
export const validatePropertyData = (propertyData) => {
    // Lógica de validación de datos de propiedad
    // ...
  
    // Ejemplo:
    if (!propertyData.title || !propertyData.price || propertyData.features.length === 0) {
      throw new Error('Please fill in all required fields.');
    }
  };
  