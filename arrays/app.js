const carrito = [
    {
      id: 198752,
      name: "Tinta DJ27 Color",
      price: 52.95,
      count: 3,
      premium: true,
    },
    {
      id: 75621,
      name: "Impresora ticketera PRO-201",
      price: 32.75,
      count: 2,
      premium: true,
    },
    {
      id: 54657,
      name: "Caja de rollos de papel para ticketera",
      price: 5.95,
      count: 3,
      premium: false,
    },
    {
      id: 3143,
      name: "Caja de folios DIN-A4 80gr",
      price: 9.95,
      count: 2,
      premium: false,
    },
  ];
  
  // Exercise 1: List all the products in the shopping cart
  function listProducts(cart) {
    cart.forEach((product) => {
      console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Count: ${product.count}, Premium: ${product.premium}`);
    });
  }
  
  // Exercise 2: Remove a product from the shopping cart by its ID
  function removeProductById(cart, id) {
    const index = cart.findIndex((product) => product.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      console.log(`Product with ID ${id} removed from cart.`);
    } else {
      console.log(`Product with ID ${id} not found in cart.`);
    }
  }
  
  // Exercise 3: Calculate the total value of the shopping cart
  function calculateTotal(cart) {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.count;
    });
    return total;
  }
  
  // Exercise 4: Filter the products that are premium
  function filterByPremium(cart) {
    return cart.filter((product) => product.premium);
  }
  
  // Test the functions
  listProducts(carrito);
  removeProductById(carrito, 54657);
  console.log(`Total value of cart: $${calculateTotal(carrito)}`);
  console.log(`Premium products:`);
  console.log(filterByPremium(carrito));
  
