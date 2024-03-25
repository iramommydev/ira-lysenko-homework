function deleteProduct(shoppingList, productName) {
  // Створення нового масиву без елементу, який потрібно видалити
  const refreshedList = shoppingList.filter(item => item.name !== productName);
  return refreshedList;
}

export default deleteProduct;