function calculateTotalSum(shoppingList, statusFilter) {
  return shoppingList
  .filter(item => item.status === statusFilter)
  .reduce((total, item) => total + item.sum, 0);
}

export default calculateTotalSum;