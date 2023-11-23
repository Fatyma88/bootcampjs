// property-validations.js

// Función para validar los datos antes de procesarlos
export const validatePropertyData = (propertyData) => {
    const errors = {};
  
    // Validar el email
    if (!isValidEmail(propertyData.email)) {
      errors.email = 'Ingrese un correo electrónico válido';
    }
  
    // Validar el mensaje
    if (!propertyData.message || propertyData.message.trim() === '') {
      errors.message = 'Ingrese un mensaje';
    }
  
  
    // Devolver un objeto con errores si los hay
    return Object.keys(errors).length > 0 ? errors : null;
  };
  
  // Función de utilidad para validar el formato del correo electrónico
  const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  