const getOption = account => {
  const option = document.createElement('option');
  option.value = account.id;
  option.textContent = account.name;
  return option;
};

export const setAccountOptions = (accounts, selectedId) => {
  const select = document.getElementById('select-account');

  accounts.forEach(account => {
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

function realizarTransferencia(cuentaId, destinatario, monto) {
  fetch(`/api/cuentas/${cuentaId}/transferir`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      destinatario,
      monto,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Manejar la respuesta del servidor (puede ser un mensaje de éxito o error).
      console.log(data);
      // Actualizar la interfaz de usuario según sea necesario.
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


