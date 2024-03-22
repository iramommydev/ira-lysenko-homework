import isNumber from './checkNumber.js';

function perfectNumber(number) {
  if (!isNumber(number) || number <= 1) {
    return false;
  }
  let sum = 0;

    for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
}

export default perfectNumber;
