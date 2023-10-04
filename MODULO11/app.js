// Define las reservas del cliente
const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1
  }
];

// Define el porcentaje de IVA
const porcentajeIVA = 21;

// Función para calcular el subtotal de una reserva
function calcularSubtotal(reserva) {
  // Define el costo por noche para cada tipo de habitación
  const costos = {
    standard: 100, // Precio por noche para habitación standard
    suite: 200     // Precio por noche para suite
  };

  // Calcula el costo total de la reserva (precio por noche * número de noches)
  const costoTotal = costos[reserva.tipoHabitacion] * reserva.noches;

  return costoTotal;
}

// Función para calcular el total con IVA
function calcularTotalConIVA(reservas) {
  let subtotal = 0;

  // Calcula el subtotal sumando los costos de todas las reservas
  for (const reserva of reservas) {
    subtotal += calcularSubtotal(reserva);
  }

  // Calcula el IVA aplicando el porcentaje
  const iva = (subtotal * porcentajeIVA) / 100;

  // Calcula el total sumando el subtotal y el IVA
  const total = subtotal + iva;

  return { subtotal, total };
}

// Calcula el subtotal y el total de las reservas del cliente
const { subtotal, total } = calcularTotalConIVA(reservas);

// Imprime los resultados
console.log(`Subtotal (sin IVA): $${subtotal.toFixed(2)}`);
console.log(`Total (con IVA al ${porcentajeIVA}%): $${total.toFixed(2)}`);





class CalculadoraReservas {
  constructor(reservas) {
    this.reservas = reservas;
    this.precioHabitaciones = {
      standard: 100,
      suite: 150,
    };
    this.cargoPersonaAdicional = 40;
    this.porcentajeIVA = 21;
  }

  calcularSubtotal(reserva) {
    const { tipoHabitacion, pax, noches } = reserva;
    const precioNoche = this.precioHabitaciones[tipoHabitacion];
    return precioNoche * noches + this.cargoPersonaAdicional * (pax - 1) * noches;
  }

  calcularTotal() {
    const subtotal = this.reservas.reduce((total, reserva) => {
      return total + this.calcularSubtotal(reserva);
    }, 0);

    const totalIVA = (subtotal * this.porcentajeIVA) / 100;
    const totalConIVA = subtotal + totalIVA;

    return {
      subtotal,
      total: totalConIVA,
    };
  }
}

class CalculadoraTourOperador extends CalculadoraReservas {
  constructor(reservas) {
    super(reservas);
    // Las habitaciones tienen un precio fijo de 100 € para el tour operador.
    this.precioHabitaciones = {
      standard: 100,
      suite: 100,
    };
    // El tour operador recibe un 15% de descuento adicional.
    this.descuentoTourOperador = 15;
  }

  // Sobreescribimos el método calcularSubtotal para aplicar el descuento.
  calcularSubtotal(reserva) {
    const subtotalSinDescuento = super.calcularSubtotal(reserva);
    const descuento = (subtotalSinDescuento * this.descuentoTourOperador) / 100;
    return subtotalSinDescuento - descuento;
  }
}

// Ejemplo de uso para un cliente particular
const reservasClienteParticular = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

const calculadoraClienteParticular = new CalculadoraReservas(reservasClienteParticular);
const { subtotal: subtotalClienteParticular, total: totalClienteParticular } = calculadoraClienteParticular.calcularTotal();

console.log(`Subtotal para Cliente Particular (sin IVA): $${subtotalClienteParticular.toFixed(2)}`);
console.log(`Total para Cliente Particular (con IVA al ${calculadoraClienteParticular.porcentajeIVA}%): $${totalClienteParticular.toFixed(2)}`);

// Ejemplo de uso para un tour operador
const reservasTourOperador = [
  {
    tipoHabitacion: "standard",
    pax: 2,
    noches: 3,
  },
  {
    tipoHabitacion: "suite",
    pax: 3,
    noches: 2,
  },
];

const calculadoraTourOperador = new CalculadoraTourOperador(reservasTourOperador);
const { subtotal: subtotalTourOperador, total: totalTourOperador } = calculadoraTourOperador.calcularTotal();

console.log(`Subtotal para Tour Operador (sin IVA): $${subtotalTourOperador.toFixed(2)}`);
console.log(`Total para Tour Operador (con IVA al ${calculadoraTourOperador.porcentajeIVA}%): $${totalTourOperador.toFixed(2)}`);
