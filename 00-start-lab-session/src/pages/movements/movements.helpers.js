const getMovementRow = movement => {
  const transactionCell = document.createElement('td');
  transactionCell.textContent = movement.transaction;

  const realTransactionCell = document.createElement('td');
  realTransactionCell.textContent = movement.realTransaction;

  const descriptionCell = document.createElement('td');
  descriptionCell.textContent = movement.description;

  const amountCell = document.createElement('td');
  amountCell.classList.add('align-right');
  const amount = parseInt(movement.amount);
  if (amount < 0) {
    amountCell.classList.add('gasto');
  }
  amountCell.textContent = movement.amount;

  const balanceCell = document.createElement('td');
  balanceCell.classList.add('align-right');
  const balance = parseInt(movement.balance);
  if (balance < 0) {
    balanceCell.classList.add('gasto');
  }
  balanceCell.textContent = movement.balance;

  const row = document.createElement('tr');
  row.appendChild(transactionCell);
  row.appendChild(realTransactionCell);
  row.appendChild(descriptionCell);
  row.appendChild(amountCell);
  row.appendChild(balanceCell);
  return row;
};

export const addMovementRows = movementList => {
  movementList.forEach(movement => {
    const row = getMovementRow(movement);
    const listElement = document.getElementById('movement-list');
    listElement.appendChild(row);
  });
};

// Obtener los parámetros de la URL.
const urlParams = new URLSearchParams(window.location.search);
const cuentaId = urlParams.get('id');


if (cuentaId) {
  // Realizar una solicitud al servidor para obtener los movimientos de la cuenta.
  fetch(`/api/cuentas/${cuentaId}/movimientos`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      // Manejar la respuesta del servidor (puede ser una lista de movimientos asociados a la cuenta).
      console.log(data);
      // Aquí puedes actualizar la interfaz de usuario para mostrar los movimientos.
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

