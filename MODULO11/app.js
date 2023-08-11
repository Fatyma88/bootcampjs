class ReservasHotel {
    constructor(preciosHabitaciones) {
      this.preciosHabitaciones = preciosHabitaciones;
      this.iva = 0.21;
    }
  
    // Método para calcular el precio por noche de una habitación
    calcularPrecioNoche(tipoHabitacion, desayuno) {
      const precioBase = this.preciosHabitaciones[tipoHabitacion];
      const cargoDesayuno = desayuno ? 15 : 0;
      return precioBase + cargoDesayuno;
    }
  
    // Método para calcular el subtotal y total de una reserva
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
        suite: 100, // El tour operador tiene un precio especial para todas las habitaciones
      };
      super(preciosHabitaciones);
      this.descuentoServicios = 0.15;
    }
  
    // Override del método calcularTotales para aplicar descuento
    calcularTotales(reserva) {
      const { subtotal, total } = super.calcularTotales(reserva);
      const subtotalConDescuento = subtotal * (1 - this.descuentoServicios);
      const totalConDescuento = subtotalConDescuento * (1 + this.iva);
      return { subtotal: subtotalConDescuento, total: totalConDescuento };
    }
  }
  
  // Ejemplo de uso:
  
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
  
  // Cliente Particular
  const clienteParticular = new ReservasClienteParticular();
  for (const reserva of reservas) {
    const { subtotal, total } = clienteParticular.calcularTotales(reserva);
    console.log("Cliente Particular - Subtotal:", subtotal, "Total:", total);
  }
  
  // Tour Operador
  const tourOperador = new ReservasTourOperador();
  for (const reserva of reservas) {
    const { subtotal, total } = tourOperador.calcularTotales(reserva);
    console.log("Tour Operador - Subtotal:", subtotal, "Total:", total);
  }
  