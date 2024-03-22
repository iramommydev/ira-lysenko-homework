// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial() {
  let number = Number(prompt('Введіть число'));
  if (isNaN(number) || number < 0) {
    console.log('Введіть число');
  }

  let result = number;

  while (number > 1) {
    result = result * (number - 1);
    number--;
  }
  return result;
}

export default factorial;
