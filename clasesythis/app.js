class ReservasHotel {
    constructor(preciosHabitaciones) {
      this.preciosHabitaciones = preciosHabitaciones;
      this.iva = 0.21;
    }
  
    calcularPrecioNoche(tipoHabitacion, desayuno) {
      const precioBase = this.preciosHabitaciones[tipoHabitacion];
      const cargoDesayuno = desayuno ? 15 : 0;
      return precioBase + cargoDesayuno;
    }
  
    calcularTotales(reserva) {
      const { tipoHabitacion, desayuno, pax, noches } = reserva;
      const precioNoche = this.calcularPrecioNoche(tipoHabitacion, desayuno);
      const subtotal = precioNoche * noches * pax;
      const total = subtotal * (1 + this.iva);
      return { subtotal, total };
    }
  }
  
  class ReservasClienteParticular extends ReservasHotel {
    constructor() {
      const preciosHabitaciones = {
        standard: 100,
        suite: 150,
      };
      super(preciosHabitaciones);
    }
  }
  
  class ReservasTourOperador extends ReservasHotel {
    constructor() {
      const preciosHabitaciones = {
        standard: 100,
        suite: 100,
      };
      super(preciosHabitaciones);
      this.descuentoServicios = 0.15;
    }
  
    calcularTotales(reserva) {
      const { subtotal, total } = super.calcularTotales(reserva);
      const subtotalConDescuento = subtotal * (1 - this.descuentoServicios);
      const totalConDescuento = subtotalConDescuento * (1 + this.iva);
      return { subtotal: subtotalConDescuento, total: totalConDescuento };
    }
  }
  
  const reservas = [
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 3,
    },
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 4,
    },
    {
      tipoHabitacion: "suite",
      desayuno: true,
      pax: 2,
      noches: 1,
    },
  ];
  
  const clienteParticular = new ReservasClienteParticular();
  const resultadosClienteParticular = [];
  for (const reserva of reservas) {
    const { subtotal, total } = clienteParticular.calcularTotales(reserva);
    resultadosClienteParticular.push({ tipoHabitacion: reserva.tipoHabitacion, subtotal, total });
  }
  
  const tourOperador = new ReservasTourOperador();
  const resultadosTourOperador = [];
  for (const reserva of reservas) {
    const { subtotal, total } = tourOperador.calcularTotales(reserva);
    resultadosTourOperador.push({ tipoHabitacion: reserva.tipoHabitacion, subtotal, total });
  }
  
  const resultadosStr = `
    Resultados para Cliente Particular:
    ${JSON.stringify(resultadosClienteParticular, null, 2)}
  
    Resultados para Tour Operador:
    ${JSON.stringify(resultadosTourOperador, null, 2)}
  `;
  
  console.log(resultadosStr);
  
  // ... (código anterior en reservasHotel.js)

const resultadosClienteParticularElement = document.getElementById("resultadosClienteParticular");
const resultadosTourOperadorElement = document.getElementById("resultadosTourOperador");

function mostrarResultadosEnTabla(resultados, tablaElement) {
  const tabla = tablaElement.querySelector("table");
  for (const resultado of resultados) {
    const fila = document.createElement("tr");
    const tipoHabitacion = document.createElement("td");
    tipoHabitacion.textContent = resultado.tipoHabitacion;
    const subtotal = document.createElement("td");
    subtotal.textContent = resultado.subtotal.toFixed(2);
    const total = document.createElement("td");
    total.textContent = resultado.total.toFixed(2);
    fila.appendChild(tipoHabitacion);
    fila.appendChild(subtotal);
    fila.appendChild(total);
    tabla.appendChild(fila);
  }
}

mostrarResultadosEnTabla(resultadosClienteParticular, resultadosClienteParticularElement);
mostrarResultadosEnTabla(resultadosTourOperador, resultadosTourOperadorElement);
