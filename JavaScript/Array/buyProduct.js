function buyProduct(productName, shoppingList) {
  // функція перевіряє кожен елемент масиву по співпадінню назви
  const index = shoppingList.findIndex(item => item.name === productName);
  if (index !== -1) {
    // змінюємо статус знайденому продукту
    shoppingList[index].status = 'bought';
  }
}

export default buyProduct;