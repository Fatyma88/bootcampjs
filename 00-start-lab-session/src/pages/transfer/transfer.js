import { validateTransferData } from './transfer.validator.js';
import { setAccountOptions } from './transfer.helpers.js';
import { makeTransfer } from './transfer.api.js';

const initTransferPage = () => {
  // Obtener cuentas del usuario (puedes obtener esta información de la API)
  const userAccounts = [
    {
      'id': '1',
      'description': 'Nómina noviembre',
      'amount': 900,
      'balance': 1490,
      'transaction': '2019-12-09T21:30:00',
      'realTransaction': '2019-12-09T21:30:00',
      'accountId': '1'
    },
    {
      'id': '2',
      'description': 'Alquiler noviembre',
      'amount': -400,
      'balance': 590,
      'transaction': '2019-12-07T11:30:00',
      'realTransaction': '2019-12-08T20:00:10',
      'accountId': '1'
    },
    {
      'id': '3',
      'description': 'Gastos móvil',
      'amount': -24,
      'balance': 990,
      'transaction': '2019-12-01T07:01:00',
      'realTransaction': '2019-12-02T12:00:10',
      'accountId': '1'
    },
    {
      'id': '4',
      'description': 'Luz diciembre',
      'amount': -110,
      'balance': 2480,
      'transaction': '2020-01-02T10:00:00',
      'realTransaction': '2020-01-03T10:00:00',
      'accountId': '2'
    },
    {
      'id': '5',
      'description': 'Agua diciembre',
      'amount': -20,
      'balance': 2590,
      'transaction': '2020-01-01T09:00:00',
      'realTransaction': '2020-01-01T09:00:00',
      'accountId': '2'
    },
    {
      'id': '6',
      'description': 'Internet diciembre',
      'amount': -35,
      'balance': 2610,
      'transaction': '2020-01-01T08:00:00',
      'realTransaction': '2020-01-01T08:00:00',
      'accountId': '2'
    },
    {
      'id': '7',
      'description': 'Luz noviembre',
      'amount': -89,
      'balance': 2645,
      'transaction': '2019-12-01T07:01:00',
      'realTransaction': '2019-12-02T12:00:10',
      'accountId': '2'
    },
    {
      'id': '8',
      'description': 'Ahorro diciembre',
      'amount': 1500,
      'balance': 8500,
      'transaction': '2019-12-29T13:30:10',
      'realTransaction': '2019-12-30T13:30:10',
      'accountId': '3'
    },
    {
      'id': '9',
      'description': 'Ahorro noviembre',
      'amount': 2200,
      'balance': 6000,
      'transaction': '2019-11-29T11:30:10',
      'realTransaction': '2019-11-29T11:30:10',
      'accountId': '3'
    }
  ];
  

  // Configurar opciones de cuentas en el formulario de transferencia
  setAccountOptions(userAccounts);[
    {
      'id': '1',
      'description': 'Nómina noviembre',
      'amount': 900,
      'balance': 1490,
      'transaction': '2019-12-09T21:30:00',
      'realTransaction': '2019-12-09T21:30:00',
      'accountId': '1'
    },
    {
      'id': '2',
      'description': 'Alquiler noviembre',
      'amount': -400,
      'balance': 590,
      'transaction': '2019-12-07T11:30:00',
      'realTransaction': '2019-12-08T20:00:10',
      'accountId': '1'
    },
    {
      'id': '3',
      'description': 'Gastos móvil',
      'amount': -24,
      'balance': 990,
      'transaction': '2019-12-01T07:01:00',
      'realTransaction': '2019-12-02T12:00:10',
      'accountId': '1'
    },
    {
      'id': '4',
      'description': 'Luz diciembre',
      'amount': -110,
      'balance': 2480,
      'transaction': '2020-01-02T10:00:00',
      'realTransaction': '2020-01-03T10:00:00',
      'accountId': '2'
    },
    {
      'id': '5',
      'description': 'Agua diciembre',
      'amount': -20,
      'balance': 2590,
      'transaction': '2020-01-01T09:00:00',
      'realTransaction': '2020-01-01T09:00:00',
      'accountId': '2'
    },
    {
      'id': '6',
      'description': 'Internet diciembre',
      'amount': -35,
      'balance': 2610,
      'transaction': '2020-01-01T08:00:00',
      'realTransaction': '2020-01-01T08:00:00',
      'accountId': '2'
    },
    {
      'id': '7',
      'description': 'Luz noviembre',
      'amount': -89,
      'balance': 2645,
      'transaction': '2019-12-01T07:01:00',
      'realTransaction': '2019-12-02T12:00:10',
      'accountId': '2'
    },
    {
      'id': '8',
      'description': 'Ahorro diciembre',
      'amount': 1500,
      'balance': 8500,
      'transaction': '2019-12-29T13:30:10',
      'realTransaction': '2019-12-30T13:30:10',
      'accountId': '3'
    },
    {
      'id': '9',
      'description': 'Ahorro noviembre',
      'amount': 2200,
      'balance': 6000,
      'transaction': '2019-11-29T11:30:10',
      'realTransaction': '2019-11-29T11:30:10',
      'accountId': '3'
    }
  ];

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
  // ...
};

export default initTransferPage;
