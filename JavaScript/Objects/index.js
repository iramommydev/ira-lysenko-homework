// Задача 1.Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії)
const car = {
  manufacturer: 'Kia',
  model: 'Ceed',
  year: 2022,
  averageSpeed: 150,
  fuelCapacity: 55,
  averageFuelConsumption100km: 7,
  drivers: ['Петренко', 'Іваненко', 'Колодій'],
};

// Метод, який виводить на екран інформацію про автомобіль.
console.log(car);

// Додавання ім’я водія у список:
car.drivers.push('Шевченко');
console.log(car);

// Перевірка водія на наявність його ім’я у списку:
let driverToCheck = prompt('введіть прізвище для перевірки:');
let yourDriver = car.drivers.includes(driverToCheck);
if (yourDriver) {
  alert(`Значення ${driverToCheck} знайдено в масиві.`);
} else {
  alert(`Значення ${driverToCheck} не знайдено в масиві.`);
}

// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
let distance = Number(prompt('Введіть відстань в км:'));
let duration = Math.round(distance / car.averageSpeed);
let fuel = ((distance / 100) * car.averageFuelConsumption100km);
alert(`Для подолання цієї відстані ви витратите ${duration} годин і ${fuel} л палива`);
console.log(duration);
console.log(fuel);

// Задача 2.Створити об'єкт, що описує час (години, хвилини, секунди):
const time = { 
  hours: 0,
  minutes: 0,
  seconds: 0,

  setTime: function (hours, minutes, seconds) {
  },
  // функція для виведення часу на екран:
  displayTime: function () {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes
      .toString()
      .padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
  },
  //  функція Зміни часу на передану кількість секунд, хвилин, годин.
  addHour: function(hours) {
    this.hours = (this.hours + hours) % 24;
  },

  addMinutes: function(minutes) {
    this.minutes += minutes;
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.addHour(1);
    }
  },

    addSeconds: function(seconds) {
    this.seconds += seconds;
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.addMinutes(1);
    }
  },
};
time.setTime();
console.log(time.displayTime());

time.addSeconds(56);
console.log(time.displayTime());

time.addMinutes(76);
console.log(time.displayTime());

time.addHour(7);
console.log(time.displayTime());


//Задача 3. Створи об'єкт, що описує звичайний дріб:
let fraction = {
  numerator: 1, // Чисельник
  denominator: 2, // Знаменник

  // Метод для виведення дробу
  display: function() {
    console.log(`${this.numerator}/${this.denominator}`);
  },
  
  // скорочення
  reduce: function() {
    let gcd = function(a, b) {
      if (!b) return a;
      return gcd(b, a % b);
    };
    let greatestCommonDivisor = gcd(this.numerator, this.denominator);
    this.numerator /= greatestCommonDivisor;
    this.denominator /= greatestCommonDivisor;
  },

  // Метод для додавання дробів
  add: function(frac) {
    this.numerator = this.numerator * frac.denominator + frac.numerator * this.denominator;
    this.denominator = this.denominator * frac.denominator;
    this.reduce(); 
  },

  // Метод для віднімання дробів
  subtract: function(frac) {
    this.numerator = this.numerator * frac.denominator - frac.numerator * this.denominator;
    this.denominator = this.denominator * frac.denominator;
    this.reduce(); 
  },

  // Метод для множення дробів
  multiply: function(frac) {
    this.numerator *= frac.numerator;
    this.denominator *= frac.denominator;
    this.reduce(); 
  },

  // Метод для ділення дробів
  divide: function(frac) {
    this.numerator *= frac.denominator;
    this.denominator *= frac.numerator;
    this.reduce(); 
  }
};

// Перевірка
fraction.display();
fraction.add({numerator: 5, denominator: 6});
fraction.display(); 
fraction.divide({numerator: 2, denominator: 3});
fraction.display();
