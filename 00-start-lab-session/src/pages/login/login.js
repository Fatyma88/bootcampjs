import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

let login = {
  user: '',
  password: '',
};

onUpdateField('user', event => {
  const value = event.target.value;
  // login.user = value;
  login = {
    ...login,
    user: value,
  };

  formValidation.validateField('user', login.user).then(result => {
    onSetError('user', result);
  });
});

onUpdateField('password', event => {
  const value = event.target.value;
  // login.password = value;
  login = {
    ...login,
    password: value,
  };

  formValidation.validateField('password', login.password).then(result => {
    onSetError('password', result);
  });
});

const onNavigate = isValid => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña no válidos');
  }
};

onSubmitForm('login-button', () => {
  formValidation.validateForm(login).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
      isValidLogin(login).then(isValid => {
        onNavigate(isValid);
      });
    }
  });
});

const user = document.getElementById('user').value;
const password = document.getElementById('password').value;


// Realizar la solicitud POST al servidor
fetch('/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ user, password }),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Redirigir a la página de inicio de sesión exitosa.
      window.location.href = '/dashboard';
    } else {
      // Mostrar un mensaje de error en la página de inicio de sesión.
      document.getElementById('user-error').textContent = 'Credenciales incorrectas.';
      document.getElementById('password-error').textContent = 'Credenciales incorrectas.';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  console.log('login page');

