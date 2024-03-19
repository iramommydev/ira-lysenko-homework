// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const age = Number(prompt('Скільки вам років?'));

let message =
  age <= 11
    ? 'Дитина'
    : age <= 17
    ? 'Підліток'
    : age <= 59
    ? 'Дорослий'
    : age > 60
    ? 'Пенсіонер'
    : 'Невірно внесено дані';
alert(message);
console.log(message);

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const symbol = {
  1: '!',
  2: '@',
  3: '#',
  4: '$',
  5: '%',
  6: '^',
  7: '&',
  8: '*',
  9: '(',
  0: ')',
};
const userNumber = Number(prompt('вкажіть число від 0 до 9'));
let answer = symbol[userNumber];
if (answer) {
  alert(answer);
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні
let start = Number(prompt('Введіть початкове число діапазону:'));
let end = Number(prompt('Введіть кінцеве число діапазону:'));

if (isNaN(start) || isNaN(end)) {
  alert('Будь ласка, введіть коректні числові значення.');
} else {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  alert(`Сума всіх чисел від ${start} до ${end} дорівнює ${sum}.`);
}

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let firstNum = Number(prompt('Введіть початкове число діапазону:'));
let secondNum = Number(prompt('Введіть кінцеве число діапазону:'));
if (isNaN(firstNum) || isNaN(secondNum)) {
  alert('Будь ласка, введіть коректні числові значення.');
}
else {
  while (firstNum !== secondNum) {
      if (firstNum > secondNum) {
          firstNum = firstNum - secondNum;
      } else {
          secondNum = secondNum - firstNum;
      }
  }
  alert(`Найбільший спільний дільник цих чисел є ${firstNum}.`);
}

// Запитай у користувача число і виведи всі дільники цього числа.
let divided = Number(prompt('Введіть число:'));
if (isNaN(divided)) {
  alert('Будь ласка, введіть коректне числове значення.');
} else {
  let divisors = '';
  for (let i = 1; i <= divided; i++) {
    if (divided % i === 0) {
      divisors += i + ' ';
    }
  }
  alert(`Дільники числа ${divided}: ${divisors}`);
}

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let number = prompt("Введіть п'ятирозрядне число:");

if (number !== null && number.length === 5 && !isNaN(number)) {
  if (number[0] === number[4] && number[1] === number[3]) {
    alert(`Число ${number} є паліндромом.`);
  } else {
    alert(`Число ${number} не є паліндромом.`);
  }
} else {
  alert("Введіть коректне п'ятирозрядне число.");
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою: від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%.
let checkAmount = Number(prompt('Введіть суму покупки:'));

if (isNaN(checkAmount)) {
  alert('Некоректна сумма');
} else {
  let discount = 0;

  if (checkAmount >= 200 && checkAmount < 300) {
    discount = 3;
  } else if (checkAmount >= 300 && checkAmount < 500) {
    discount = 5;
  } else if (checkAmount >= 500) {
    discount = 7;
  }

  let totalToPay = checkAmount - (checkAmount * discount) / 100;

  alert(
    `Сума до оплати з урахуванням знижки: ${totalToPay.toFixed(
      2
    )} (знижка ${discount}%)`
  );
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
  let number = Number(prompt(`Введіть число #${i + 1}:`));

  if (!isNaN(number)) {
    if (number > 0) {
      positive+=1;
    } else if (number < 0) {
      negative+=1;
    } else {
      zero+=1;
    }

    if (number % 2 === 0) {
      even+=1;
    } else {
      odd+=1;
    }
  } else {
    alert('Було введено не число, спробуйте ще раз.');
    i--;
  }
}

alert(`Було введено:
Додатні числа: ${positive}
Від'ємні числа: ${negative}
Нулі: ${zero}
Парні числа: ${even}
Непарні числа: ${odd}`);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let week = [
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Субота',
  'Неділя',
];
let currentDay = 0;

while (confirm(`${week[currentDay]}. Хочеш побачити наступний день?`)) {
  currentDay = (currentDay + 1) % week.length;
}

// Гра "Вгадай число":
let first = 0;
let last = 100;
let guess;

alert('Загадайте число від 0 до 100');

while (first <= last) {
  guess = Math.floor((first + last) / 2);

  let clarifyingQuestion = prompt(
    `Ваше число > ${guess}, < ${guess}, або == ${guess}? Введіть '>', '<', або '=='.`
  );
  if (clarifyingQuestion === '==') {
    alert(`Ваше число ${guess}`);
    break;
  } else if (clarifyingQuestion === '>') {
    first = guess + 1;
  } else if (clarifyingQuestion === '<') {
    last = guess - 1;
  }  else {
    alert("Введіть один з символів: '>', '<', або '=='.");
}
}

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
for (let i = 2; i <= 9; i++ ) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
let day = Number(prompt("Введіть день:"));
let month = Number(prompt("Введіть місяць (1-12):")) - 1; 
let year = Number(prompt("Введіть рік:"));
let date = new Date(year, month, day);

date.setDate(date.getDate() + 1);

alert(`Наступна дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);