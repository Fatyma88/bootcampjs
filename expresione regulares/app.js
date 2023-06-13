// Caso 1
function validarIBAN(iban) {
    const codigoPais = iban.substr(0, 2);
    const numeros = iban.substr(2);
    
    if (codigoPais.length !== 2) {
      return false;
    }
    
    if (!numeros.match(/^\d+$/)) {
      return false;
    }
    
    return true;
  }
  
  const iban1 = 'ES6600190020961234567890';
  console.log(validarIBAN(iban1)); // true
  
  // Caso 2
  function validarIBANConEspacios(iban) {
    const codigoPais = iban.substr(0, 2);
    const numeros = iban.substr(2).replace(/\s/g, '');
    
    if (codigoPais.length !== 2) {
      return false;
    }
    
    if (!numeros.match(/^\d+$/)) {
      return false;
    }
    
    return true;
  }
  
  const iban2 = 'ES66 0019 0020 9612 3456 7890';
  console.log(validarIBANConEspacios(iban2)); // true

  // Validar matrícula coche
  // Caso 1
function validarMatricula(matricula) {
    if (matricula.match(/^\d{4} [A-Z]{3}$/) || matricula.match(/^\d{4}-[A-Z]{3}$/) || matricula.match(/^\d{4}[A-Z]{3}$/)) {
      return true;
    }
    return false;
  }
  
  const matricula1 = '2021 GMD';
  console.log(validarMatricula(matricula1)); // true
  
  // Caso 2
  function extraerPartesMatricula(matricula) {
    const digitos = matricula.match(/\d{4}/);
    const letras = matricula.match(/[A-Z]{3}/);
    
    return {
      digitos: digitos ? digitos[0] : '',
      letras: letras ? letras[0] : ''
    };
  }
  
  const matricula2 = '2345-GMD';
  console.log(extraerPartesMatricula(matricula2)); // { digitos: '2345', letras: 'GMD' }

  //Extraer imagenes de HTML
  // Caso 1
function extraerSrcDesdeLinea(linea) {
    const regex = /src="([^"]+)"/;
    const resultado = linea.match(regex);
    if (resultado) {
      return resultado[1];
    }
    return '';
  }
  
  const linea1 = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />';
  console.log(extraerSrcDesdeLinea(linea1)); // https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
  
  // Caso 2
  function extraerSrcDesdeHTML(html) {
    const regex = /<img\s+src="([^"]+)"\s*\/?>/g;
    const resultados = [];
    let resultado;
    
    while ((resultado = regex.exec(html))) {
      resultados.push(resultado[1]);
    }
    
    return resultados;
  }
  
  const html = `
  <html>
    <body>
      <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg" />
      <h1>ejemplo</h1>
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
    </body>
  </html>
  `;
  
  console.log(extraerSrcDesdeHTML(html)); // [ 'https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' ]

  // validar tarjeta crédito
  // Caso 1
function validarTarjetaCredito(tarjeta) {
    const numeros = tarjeta.replace(/[\s-]/g, '');
    
    if (numeros.length !== 16) {
      return false;
    }
    
    if (!numeros.match(/^5[0-5]\d{14}$/)) {
      return false;
    }
    
    return true;
  }
  
  const tarjeta1 = '5299 6400 0000 0000';
  console.log(validarTarjetaCredito(tarjeta1)); // true
  
  // Caso 2
  function extraerGruposTarjeta(tarjeta) {
    const grupos = tarjeta.match(/(\d{4})/g);
    return grupos ? grupos : [];
  }
  
  const tarjeta2 = '5299 6400 0000 0000';
  console.log(extraerGruposTarjeta(tarjeta2)); // [ '5299', '6400', '0000', '0000' ]

  // Validar clave
  // Comprobar si una clave es fuerte o no
function esClaveFuerte(clave) {
    if (!clave.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)) {
      return false;
    }
    return true;
  }
  
  const clave1 = 'Abc123$';
  console.log(esClaveFuerte(clave1)); // true
  
  // Comprobar si una clave es moderada o no
  function esClaveModerada(clave) {
    if (!clave.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
      return false;
    }
    return true;
  }
  
  const clave2 = 'Abc123';
  console.log(esClaveModerada(clave2)); // true
  
  // Validar una URL bien formada
  function esURLValida(url) {
    if (!url.match(/^(https?:\/\/)?([a-zA-Z]+\.)?[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,})(\/\S*)*$/)) {
      return false;
    }
    return true;
  }
  
  const url = 'https://www.lemoncode.net';
  console.log(esURLValida(url)); // true
  
  // Validar un color hexadecimal bien formado
  function esColorHexValido(color) {
    if (!color.match(/^#[0-9a-fA-F]{6}$/)) {
      return false;
    }
    return true;
  }
  
  const color = '#FF0000';
  console.log(esColorHexValido(color)); // true
  