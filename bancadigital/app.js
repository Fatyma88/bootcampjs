// Esperamos a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a elementos HTML
    const loginForm = document.getElementById("loginForm");
    const nombreUsuarioInput = document.getElementById("nombreUsuario");
    const contrasenaInput = document.getElementById("contrasena");
    const mensajeError = document.getElementById("mensajeError");

    // Agregar un controlador de eventos al formulario
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos
        const nombreUsuario = nombreUsuarioInput.value;
        const contrasena = contrasenaInput.value;

        // Realizar validaciones
        if (!nombreUsuario || !contrasena) {
            mensajeError.textContent = "Por favor, complete todos los campos.";
            return;
        }

        // Verificar credenciales (simulando con valores fijos)
        if (nombreUsuario === "Fatima" && contrasena === "patata") {
            // Autenticación exitosa
            // Puedes redirigir al usuario a la siguiente página aquí
            window.location.href = "pagina_de_inicio.html";
        } else {
            // Autenticación fallida
            mensajeError.textContent = "Nombre de usuario o contraseña incorrectos.";
        }
    });
});
// Esta función se ejecuta cuando el usuario envía el formulario de inicio de sesión
function iniciarSesion() {
    // Recoger los valores del formulario
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    // Realizar la autenticación (aquí puedes agregar tu lógica de autenticación)

    if (usuario === "Fatima" && contraseña === "patata") {
        // Autenticación exitosa
        console.log("Autenticación exitosa. Redirigiendo al usuario...");
        // Aquí puedes agregar el código para redirigir al usuario a la siguiente página
    } else {
        // Autenticación fallida
        console.error("Autenticación fallida. Nombre de usuario o contraseña incorrectos.");
        // Aquí puedes agregar el código para mostrar un mensaje de error al usuario
    }
}
// Realizar una solicitud al servidor para obtener las cuentas disponibles
fetch('/api/cuentas') // Reemplaza '/api/cuentas' con la URL de tu punto final
  .then(response => response.json())
  .then(data => {
    // Aquí 'data' contiene la lista de cuentas recibida del servidor
    // Puedes procesar y mostrar estas cuentas en tu página web
    mostrarCuentas(data);
  })
  .catch(error => {
    console.error('Error al recuperar las cuentas:', error);
  });

  // Agrega un evento de clic a un elemento de cuenta
document.getElementById('cuenta1').addEventListener('click', function () {
    // Navega a la página de transferencias para la cuenta 1
    window.location.href = '/transferencias/cuenta1'; // Reemplaza con la URL adecuada
  });
// Agrega un evento de clic a un botón de "Crear Nueva Cuenta"
document.getElementById('crearCuentaBtn').addEventListener('click', function () {
    // Navega a la página de creación de nueva cuenta
    window.location.href = '/crear-cuenta'; // Reemplaza con la URL adecuada
  });
  document.getElementById('formularioCuenta').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita la recarga de la página
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const saldoCuenta = parseFloat(document.getElementById('saldoCuenta').value);
    // Aquí puedes continuar con las validaciones y el envío al servidor
  });
  document.getElementById('formularioCuenta').addEventListener('submit', function (event) {
    event.preventDefault();
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const saldoCuenta = parseFloat(document.getElementById('saldoCuenta').value);
  
    // Validación: Verificar si el número de cuenta está vacío
    if (!numeroCuenta) {
      alert('Por favor, ingresa un número de cuenta válido.');
      return; // Detiene el proceso si la validación falla
    }
  
    // Validación: Verificar si el saldo es un número válido
    if (isNaN(saldoCuenta)) {
      alert('Por favor, ingresa un saldo válido.');
      return;
    }
  
    // Aquí puedes continuar con el envío al servidor si las validaciones pasan
  });
  document.getElementById('formularioCuenta').addEventListener('submit', function (event) {
    event.preventDefault();
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const saldoCuenta = parseFloat(document.getElementById('saldoCuenta').value);
  
    // Validaciones (código de validación aquí)
  
    // Envío de datos al servidor
    fetch('/api/crearCuenta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numeroCuenta, saldoCuenta }), // Convierte los datos en JSON
    })
      .then(response => {
        if (response.ok) {
          // Éxito: La cuenta se creó correctamente, puedes redirigir o realizar otras acciones
          window.location.href = '/listadoCuentas'; // Redirige a la lista de cuentas
        } else {
          // Error: Muestra un mensaje de error adecuado
          alert('Error al crear la cuenta. Por favor, inténtalo de nuevo.');
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
        alert('Hubo un error en la conexión. Por favor, inténtalo de nuevo.');
      });
  });
  const url = window.location.href;
  let modoEditar = false;
  let numeroCuentaEditar = null;
  
  if (url.includes('/editar/')) {
    // Estás en modo edición
    modoEditar = true;
    const match = /\/editar\/(\d+)/.exec(url);
    if (match) {
      numeroCuentaEditar = parseInt(match[1]);
    }
  }
  const url = window.location.href;
  const match = /\/movimientos\/(\d+)/.exec(url);
  
  if (match) {
    const idCuenta = parseInt(match[1]);
    // Ahora, `idCuenta` contiene el ID de la cuenta de la URL
  } else {
    // La URL no contiene un ID válido de cuenta, maneja el error
    console.error('URL no válida');
  }
// Supongamos que tienes una API que responde a /api/movimientos/{idCuenta}
fetch(`/api/movimientos/${idCuenta}`)
  .then(response => {
    if (response.ok) {
      // Procesa los datos de los movimientos aquí (ver siguiente paso)
    } else {
      // Maneja errores aquí
      console.error('Error al recuperar movimientos.');
    }
  })
  .catch(error => {
    // Maneja errores de red aquí
    console.error('Error de red:', error);
  });
  const url = window.location.href;
  const match = /\/transferencias\/(\d+)/.exec(url);
  
  if (match) {
    const idCuenta = parseInt(match[1]);
    // Ahora, `idCuenta` contiene el ID de la cuenta de la URL
  } else {
    // La URL no contiene un ID válido de cuenta, maneja el error
    console.error('URL no válida');
  }
  const origenCuenta = document.getElementById('origenCuenta').value;
  const destinoCuenta = document.getElementById('destinoCuenta').value;
  const monto = parseFloat(document.getElementById('monto').value);
  if (!validarCuenta(origenCuenta) || !validarCuenta(destinoCuenta) || monto <= 0) {
    // Muestra un mensaje de error al usuario
    console.error('Datos de transferencia no válidos');
    return; // No continúes con el proceso
  }
  const datosTransferencia = {
    origenCuenta: origenCuenta,
    destinoCuenta: destinoCuenta,
    monto: monto
  };
  
  fetch(`/api/transferencias/${idCuenta}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosTransferencia)
  })
    .then(response => {
      if (response.ok) {
        // Procesa la respuesta del servidor si es necesario
      } else {
        // Maneja errores aquí
        console.error('Error al realizar la transferencia.');
      }
    })
    .catch(error => {
      // Maneja errores de red aquí
      console.error('Error de red:', error);
    });
            
            