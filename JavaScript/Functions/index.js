// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const sum = 0.1 + 0.2;
console.log(sum.toFixed(2));

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const first = '1';
const second = 2;
console.log( +first + second);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const size = +prompt('Вкажіть розмір вашої флешки в Гб?');
const file = 820;
alert(Math.floor((size * 1000) / 820));

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const sumOfMoney = +prompt('Скільки грошей у вас в гаманці?');
const chocolatePrice = +prompt('Скільки коштує шоколадка?');
alert(
  `Ви можете купити ${Math.floor(sumOfMoney / chocolatePrice)} шоколадки; ваша решта ${
    sumOfMoney - chocolatePrice * Math.floor(sumOfMoney / chocolatePrice)
  }`
);
console.log(
  Math.floor(sumOfMoney / chocolatePrice),
  sumOfMoney % chocolatePrice
);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const number = +prompt('Напишіть тризначне число');
const str = ""+number;
console.log(str[2]+""+str[1]+""+str[0]);
const strr = str.split('').reverse().join('');
console.log(strr);

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const depositAmount = +prompt('Введіть суму вкладу');
const discount = 5;
const period = 2;
const accruedInterest = ((depositAmount * 5) / 100 / 12) * 2;
alert(`сума нарахованих відсотків складатиме:, ${accruedInterest.toFixed(2)}`);
console.log( accruedInterest.toFixed(2));