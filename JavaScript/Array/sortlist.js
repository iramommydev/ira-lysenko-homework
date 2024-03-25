function displayShoppingList(list) {
  // Сортування масиву так, щоб продукти, які потрібно купити, були на початку
  const sortedList = list.sort((a, b) => {
    if (a.status === 'to buy' && b.status === 'bought') {
      return -1;
    } else if (a.status === 'bought' && b.status === 'to buy') {
      return 1;
    }
    return 0;
  });

  // Виведення відсортованого списку
  sortedList.forEach((item) => {
    console.log(
      `Name: ${item.name}, Quantity: ${item.quantity}, Status: ${item.status}, Price per unit: ${item.price}, Total sum: ${item.sum}`
    );
  });
}

export default displayShoppingList;
