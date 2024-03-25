function addProduct(shoppingList, product) {
  // Пошук індексу продукту в масиві за назвою
  const index = shoppingList.findIndex(item => item.name === product.name);

  if (index !== -1) {
    // Якщо продукт існує, збільшуємо кількість і перераховуємо суму
    shoppingList[index].quantity += product.quantity;
    shoppingList[index].sum = shoppingList[index].quantity * shoppingList[index].price;
  } else {
    // Якщо продукту немає, додаємо його в масив і обчислюємо суму
    product.sum = product.quantity * product.price;
    shoppingList.push(product);
  }
}

export default addProduct;