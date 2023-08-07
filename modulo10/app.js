const hasId = (obj) => "id" in obj;
const head = ([first, ...rest]) => first;
const tail = ([first, ...rest]) => rest;
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
const excludeId = ({ id, ...rest }) => rest;
const wordsStartingWithA = (words) => words.filter((word) => word.startsWith("a") || word.startsWith("A"));
const concat = (...strings) => strings.join(" | ");
const multArray = (arr, x) => arr.map((num) => num * x);
const calcMult = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
const firstEqual = (char, ...strings) => strings.every((word) => word.startsWith(char));
const longest = (...arrays) => arrays.reduce((longestArr, currentArr) => (currentArr.length > longestArr.length ? currentArr : longestArr), []);
const searchInStringV1 = (str, char) => Array.from(str).filter((c) => c === char).length;
const searchInStringV2 = (str, char) => Array.from(str).reduce((count, c) => (c === char ? count + 1 : count), 0);
const sortCharacters = (str) => Array.from(str).sort().join("");
const shout = (...words) => words.map((word) => word.toUpperCase() + "!").join(" ");
const shoppingCartWithIVA = shoppingCart.map((item) => ({ ...item, total: item.price * item.units * 1.21 }));
const sortedShoppingCart = shoppingCart.sort((a, b) => b.units - a.units);
const subtotalDrogueria = shoppingCart.reduce((subtotal, item) => (item.category === "Droguería" ? subtotal + item.price * item.units : subtotal), 0);
const printShoppingCartByCategory = () => {
    const shoppingCartByCategory = shoppingCart.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push({ product: item.product, total: item.price * item.units });
      return acc;
    }, {});
  
    Object.entries(shoppingCartByCategory).forEach(([category, items]) => {
      console.log(`Category: ${category}`);
      items.forEach((item) => console.log(`${item.product} -> ${item.total.toFixed(2)} €`));
    });
  };
  
  printShoppingCartByCategory();
  