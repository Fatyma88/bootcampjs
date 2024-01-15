const apiUrl = 'https://api.bancaonline.com/transfers';

import { getAccountOptions, makeTransfer } from './transfer.api.js';

const initTransferPage = () => {
  // Obtener cuentas del usuario (puedes obtener esta información de la API)
  const userAccounts = [
    {
      'id': '1',
      'iban': 'ES91 2100 0418 4502 0005 1332',
      'name': 'Gastos mes',
      'balance': 1490,
    },
    {
      'id': '2',
      'iban': 'ES79 2100 0813 6101 2345 6789',
      'name': 'Compartida',
      'balance': 2480,
      'alias': 'Compartida',
    },
    {
      'id': '3',
      'iban': 'ES66 2100 0418 4012 3456 7891',
      'name': 'Ahorro',
      'balance': 8500,
    },
  ];

  // Configurar opciones de cuentas en el formulario de transferencia
  getAccountOptions(userAccounts);

  // Configurar el evento de clic para el botón de realizar transferencia
  const transferButton = document.getElementById('transfer-button');
  transferButton.addEventListener('click', handleTransfer);
};

const handleTransfer = async () => {
  // Obtener datos del formulario de transferencia
  const transferData = {
    accountId: document.getElementById('select-account').value,
    recipientIban: document.getElementById('iban').value,
    recipientName: document.getElementById('name').value,
    amount: document.getElementById('amount').value,
    concept: document.getElementById('concept').value,
    notes: document.getElementById('notes').value,
  };

  // Validar datos antes de realizar la transferencia
  const validationErrors = validateTransferData(transferData);
  if (Object.keys(validationErrors).length > 0) {
    // Manejar errores de validación (mostrar mensajes de error en la interfaz, etc.)
    console.error('Errores de validación:', validationErrors);
    return;
  }

  // Si no hay errores, proceder con la lógica para realizar la transferencia
  try {
    const result = await makeTransfer(transferData);
    // Manejar la respuesta de la transferencia, actualizar la interfaz, etc.
    console.log('Transferencia exitosa:', result);
  } catch (error) {
    // Manejar errores de la transferencia (puede ser un error de red, error en la API, etc.)
    console.error('Error en la transferencia:', error);
  }
};

// Función de validación de datos de transferencia (debes implementarla)
const validateTransferData = (data) => {
  // Implementa la validación aquí y devuelve un objeto con los errores (si los hay)
  // Ejemplo: { recipientIban: 'El IBAN es obligatorio', amount: 'El monto debe ser un número válido' }
  return {};
};

// Inicializar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initTransferPage);

