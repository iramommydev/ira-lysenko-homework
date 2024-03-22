import isNumber from './checkNumber.js';

// Функцію, яка приймає три окремі цифри і перетворює їх в одне число
function transform(a, b, c) {
  if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
    console.log('Invalid number');
    return;
  }
  let numberString = String(a) + String(b) + String(c);
  let transformedNumber = Number(numberString);
  console.log(transformedNumber);
  return transformedNumber;
}

export default transform;
