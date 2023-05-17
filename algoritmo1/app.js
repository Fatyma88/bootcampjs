// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// Función para generar los elementos HTML de la lista de productos.
function generateProductElements() {
  const productList = document.getElementById("product-list");

  // Recorremos la lista de productos y generamos los elementos HTML correspondientes.
  products.forEach((product, index) => {
    // Creamos un div para cada producto.
    const productDiv = document.createElement("div");
    productDiv.setAttribute("class", "product");

    // Creamos un elemento para la descripción.
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;

    // Creamos un elemento para el precio unitario.
    const priceElement = document.createElement("p");
    priceElement.textContent = "Precio unitario: " + product.price.toFixed(2) + "€";

    // Creamos un input para las unidades.
    const unitsInput = document.createElement("input");
    unitsInput.setAttribute("class", "product-unit");
    unitsInput.setAttribute("type", "number");
    unitsInput.setAttribute("min", "0");
    unitsInput.setAttribute("max", product.stock.toString());
    unitsInput.setAttribute("value", product.units.toString());
    unitsInput.addEventListener("change", () => {
      product.units = parseInt(unitsInput.value);
    });

    // Añadimos los elementos al div del producto.
    productDiv.appendChild(descriptionElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(unitsInput);

    // Añadimos el div del producto al contenedor de la lista.
    productList.appendChild(productDiv);
  });
}

// Función para calcular la factura.
function calculateInvoice() {
  let subtotal = 0;
  let totalTax = 0;

  // Recorremos la lista de productos y realizamos los cálculos pertinentes.
  products.forEach((product) => {
    const productTotal = product.price * product.units;
    const productTax = (productTotal * product.tax) / 100;

    subtotal += productTotal;
    totalTax += productTax;
  });

  const total = subtotal + totalTax;

  // Mostramos los resultados en los campos correspondientes.
  document.getElementById("subtotal").textContent = "Subtotal: " + subtotal.toFixed(2) + "€";
  document.getElementById("tax").textContent = "Impuestos: " + totalTax.toFixed(2) + "€";
  document.getElementById("total").textContent = "Total: " + total.toFixed(2) + "€";
}

// Evento al cargar la página para generar los elementos de la lista de productos.
window.addEventListener("load", () => {
  generateProductElements();
});

// Evento al hacer clic en el botón de calcular para calcular la factura.
document.getElementById("calculate-btn").addEventListener("click", calculateInvoice);
