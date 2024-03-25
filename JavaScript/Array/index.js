import displayShoppingList from "./sortlist.js";
import buyProduct from "./buyProduct.js";
import deleteProduct from "./deleteProduct.js";
import addProduct from "./addProduct.js";
import calculateTotalSum from "./calctotalsum.js";
import sumSortedList from "./sumsortedlist.js";

const shoppingList = [
  {name: 'eggs', quantity: 10, status: 'bought', price: 6, sum: 60},
  {name: 'bread', quantity: 1, status: 'to buy', price: 27, sum: 27},
  {name: 'chocolade', quantity: 2, status: 'bought', price: 79, sum: 158}, 
  {name: 'yogurt', quantity: 3, status: 'to buy', price: 29, sum: 58}, 
  
];
console.log(shoppingList);

// displayShoppingList(shoppingList);
// buyProduct('yogurt', shoppingList);
// console.log(shoppingList);
// const refreshedShoppingList = deleteProduct(shoppingList, 'eggs');
// console.log(refreshedShoppingList);
// addProduct(shoppingList, { name: 'bread', quantity: 2, price: 27 });
// addProduct(shoppingList, { name: 'milk', quantity: 1, price: 22 });

// console.log(shoppingList);
// const totalSum = calculateTotalSum(shoppingList);
// console.log(`Загальна сума всіх продуктів: ${totalSum}`);
// const totalSumToBuy = calculateTotalSum(shoppingList, 'to buy');
// console.log(`Загальна сума продуктів, які ще не куплені: ${totalSumToBuy}`);

// const totalSumBought = calculateTotalSum(shoppingList, 'bought');
// console.log(`Загальна сума куплених продуктів: ${totalSumBought}`);

// Сортування від меншого до більшого
// console.log('Сортування від меншого до більшого:');
// console.log(sumSortedList(shoppingList, 'min'));

// Сортування від більшого до меншого
// console.log('Сортування від більшого до меншого:');
// console.log(sumSortedList(shoppingList, 'max'));