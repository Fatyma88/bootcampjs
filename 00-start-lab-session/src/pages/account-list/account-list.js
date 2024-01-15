import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

console.log('account-list page');

// Llamar a getAccountList una sola vez y luego realizar operaciones en los datos.
getAccountList().then(accountList => {
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
  addAccountRows(viewModelAccountList);

  viewModelAccountList.forEach(account => {
    onUpdateField(`select-${account.id}`, event => {
      const route = event.target.value;
      history.push(route);
    });
  });

  // Supongamos que tienes una lista de cuentas y cada cuenta tiene un identificador único.
  const accountsList = document.querySelectorAll('.account-item'); // Selecciona los elementos de cuenta.

  // Agrega un evento de clic a cada cuenta.
  accountsList.forEach((account) => {
    account.addEventListener('click', function () {
      const accountId = account.dataset.id; // Supongamos que usas el atributo "data-id" para almacenar el ID de la cuenta.
      // Redirige al usuario a la página de transferencias o movimientos de la cuenta seleccionada.
      window.location.href = `/transactions?account=${accountId}`;
    });
  });

  const createAccountButton = document.getElementById('create-account-button'); // Supongamos que tienes un botón o enlace con el ID "create-account-button".

  createAccountButton.addEventListener('click', function () {
    // Redirige al usuario a la página de creación de una nueva cuenta.
    window.location.href = '/create-account';
  });
});
