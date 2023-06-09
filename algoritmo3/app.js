// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  // Datos
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];
  
  // 1. Generación aleatoria de la disponibilidad
  for (var i = 0; i < myTeam.length; i++) {
    var member = myTeam[i];
    for (var j = 0; j < WORK_HOURS.length; j++) {
      member.availability[j] = Math.random() < 0.5; // Asigna true o false aleatoriamente
    }
  }
  
  // 2. Mostrar la disponibilidad por consola
  for (var i = 0; i < myTeam.length; i++) {
    var member = myTeam[i];
    console.log("Disponibilidad de " + member.name);
    for (var j = 0; j < WORK_HOURS.length; j++) {
      console.log("  " + WORK_HOURS[j] + ": " + (member.availability[j] ? "Si" : "No"));
    }
  }
  
  // 3. Buscar el primer hueco libre
  var firstAvailableHour = null;
  for (var j = 0; j < WORK_HOURS.length; j++) {
    var allAvailable = true;
    for (var i = 0; i < myTeam.length; i++) {
      if (!myTeam[i].availability[j]) {
        allAvailable = false;
        break;
      }
    }
    if (allAvailable) {
      firstAvailableHour = WORK_HOURS[j];
      break;
    }
  }
  
  // Mostrar el resultado de la búsqueda
  if (firstAvailableHour) {
    console.log("Hueco encontrado en el horario " + firstAvailableHour);
  } else {
    console.log("Lo siento. No hay hueco disponible en el equipo.");
  }
  