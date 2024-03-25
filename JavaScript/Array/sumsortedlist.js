function sumSortedList(shoppingList, sortOrder = 'min') {
  return shoppingList.sort((a, b) => {
    if (sortOrder === 'min') {
      return a.sum - b.sum; // Сортування від меншого до більшого
    } else if (sortOrder === 'max') {
      return b.sum - a.sum; // Сортування від більшого до меншого
    }
  });
}

export default sumSortedList;