// movements.js

import { getMovements } from './movements.api.js';
import { mapMovementsToPage } from './movements.mappers.js';

const initMovementsPage = () => {
  // Obtener el ID de la cuenta (puedes obtenerlo de la URL, de un token, etc.)
  const accountId = 'cuenta123'; // Reemplaza con la lógica real para obtener el ID de la cuenta

  // Obtener movimientos desde la API y mapearlos a la página
  getMovements(accountId)
    .then((movementsData) => {
      mapMovementsToPage(movementsData);
    })
    .catch((error) => {
      console.error('Error al obtener movimientos:', error.message);
      // Puedes manejar el error según tus necesidades (mostrar mensaje de error, redirigir, etc.)
    });
};

// Inicializar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initMovementsPage);
