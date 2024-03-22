import isNumber from './checkNumber.js';

function area(a, b) {
  if (!isNumber(a) || (b !== undefined && !isNumber(b))) {
    console.log('Введіть числові значення.');
    return;
  }
  if (b !== undefined) {
    return a * b;
  } else {
    return a ** 2;
  }
}

export default area;
