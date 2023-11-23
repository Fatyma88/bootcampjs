// transfer.js

import { setAccountOptions } from './transfer.helpers.js';
import { makeTransfer } from './transfer.api.js';

const initTransferPage = () => {
  // Obtener cuentas del usuario (puedes obtener esta información de la API)
  const userAccounts = [
    { id: 'cuenta1', name: 'Cuenta Corriente' },
    { id: 'cuenta2', name: 'Cuenta de Ahorros' },
    // ... más cuentas
  ];

  // Configurar opciones de cuentas en el formulario de transferencia
  setAccountOptions(userAccounts);

  // Configurar el evento de clic para el botón de realizar transferencia
  const transferButton = document.getElementById('transfer-button');
  transferButton.addEventListener('click', handleTransfer);
};

const handleTransfer = async () => {
  // Obtener datos del formulario de transferencia
  const accountId = document.getElementById('select-account').value;
  const recipientIban = document.getElementById('iban').value;
  const recipientName = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;
  const concept = document.getElementById('concept').value;
  const notes = document.getElementById('notes').value;

  // Validar datos antes de realizar la transferencia
  const validationErrors = validateTransferData(accountId, recipientIban, recipientName, amount);
  if (validationErrors) {
    // Manejar errores de validación (puedes mostrar mensajes de error, etc.)
    console.error('Errores de validación:', validationErrors);
    return;
  }

  // Crear un objeto con los datos de la transferencia
  const transferData = {
    accountId,
    recipientIban,
    recipientName,
    amount,
    concept,
    notes,
  };

  try {
    // Intentar realizar la transferencia a la API
    const result = await makeTransfer(transferData);
    // La transferencia fue exitosa, puedes realizar acciones adicionales si es necesario
    console.log('Transferencia realizada exitosamente:', result);
  } catch (error) {
    // Manejar errores durante la transferencia (puedes mostrar mensajes de error, etc.)
    console.error('Error durante la transferencia:', error.message);
  }
};

const validateTransferData = (accountId, recipientIban, recipientName, amount) => {
  const errors = {};

  // Implementa lógica de validación según tus necesidades
  // Aquí tienes un ejemplo básico:

  if (!accountId) {
    errors.accountId = 'Seleccione una cuenta de origen';
  }

  if (!recipientIban || !isValidIban(recipientIban)) {
    errors.recipientIban = 'Ingrese un IBAN válido';
  }

  if (!recipientName || recipientName.trim() === '') {
    errors.recipientName = 'Ingrese el nombre del beneficiario';
  }

  if (!amount || isNaN(amount)) {
    errors.amount = 'Ingrese un monto válido';
  }

  return Object.keys(errors).length > 0 ? errors : null;
};

const isValidIban = (iban) => {
  // Implementa la lógica de validación de IBAN según tus necesidades
  // Aquí tienes un ejemplo básico:
  const ibanRegex = /^[A-Z]{2}\d{2}[A-Z\d]{4}\d{7}([A-Z\d]?){0,16}$/;
  return ibanRegex.test(iban);
};

// Inicializar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initTransferPage);
