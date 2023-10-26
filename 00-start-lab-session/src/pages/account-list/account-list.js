import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

getAccountList().then(accountList => {
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
  addAccountRows(viewModelAccountList);

  viewModelAccountList.forEach(account => {
    onUpdateField(`select-${account.id}`, event => {
      const route = event.target.value;
      history.push(route);
    });
  });
});

// Realizar una solicitud GET al servidor para obtener las cuentas disponibles.
fetch('/api/accounts')
  .then((response) => response.json())
  .then((data) => {
    // Data contiene la información de las cuentas disponibles.
    console.log(data);
    // Puedes mostrar esta información en la página o realizar acciones adicionales con ella.
  })
  .catch((error) => {
    console.error('Error:', error);
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
