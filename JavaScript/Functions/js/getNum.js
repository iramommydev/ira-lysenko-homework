import isNumber from './checkNumber.js';

// Напиши функцію, яка приймає 2 числа і повертає :-1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге; 0 - якщо числа рівні.
function getNum(first, second) {
  if (!isNumber(first) || !isNumber(second)) {
    console.log('Введіть числові значення.');
  }
  if (first < second) {
    return -1;
  } else if (first > second) {
    return 1;
  } else {
    return 0;
  }
}

export default getNum;
