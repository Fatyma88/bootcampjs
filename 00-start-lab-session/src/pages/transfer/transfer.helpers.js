

// Importa la función realizarTransferencia si es necesario
import { realizarTransferencia } from './transfer.api.js';

// Datos de cuentas de usuario
const userAccounts = [
  {
    'id': '1',
    'iban': 'ES91 2100 0418 4502 0005 1332',
    'type': '1',
    'name': 'Gastos mes',
    'balance': 1490,
    'lastTransaction': '2019-12-09T21:30:00'
  },
  {
    'id': '2',
    'iban': 'ES79 2100 0813 6101 2345 6789',
    'type': '2',
    'name': 'Compartida',
    'balance': 2480,
    'lastTransaction': '2019-11-21T14:07:38',
    'alias': 'Compartida'
  },
  {
    'id': '3',
    'iban': 'ES66 2100 0418 4012 3456 7891',
    'type': '2',
    'name': 'Ahorro',
    'balance': 8500,
    'lastTransaction': '2019-11-15T08:29:04'
  }
];

export const getOption = (account) => {
  const option = document.createElement('option');
  option.value = account.id;
  option.textContent = account.name;
  return option;
};

export const setAccountOptions = (accounts, selectedId) => {
  const select = document.getElementById('select-account');

  accounts.forEach((account) => {
    const option = getOption(account);
    select.appendChild(option);
  });

  if (selectedId) {
    select.value = selectedId;
  }

  return select;
};

// Obtener los parámetros de la URL.
const urlParams = new URLSearchParams(window.location.search);
const cuentaId = urlParams.get('id');

if (!cuentaId) {
  // Puedes manejar el caso en que no se proporcione un ID de cuenta en la URL.
  console.error('No se proporcionó un ID de cuenta en la URL');
}

const transferForm = document.getElementById('transfer-form');
transferForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const destinatario = document.getElementById('destinatario').value;
  const monto = document.getElementById('monto').value;

  // Realizar validaciones de los campos.
  if (!destinatario || !monto) {
    console.error('Todos los campos son obligatorios.');
    return;
  }

  // Continuar con el proceso de transferencia.
  realizarTransferencia(cuentaId, destinatario, monto);
});
