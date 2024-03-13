let name = prompt('What is your name?', '');
alert(`Hello, ${name}`);

const YEAR = 2024;
let birthYear = +prompt('What year were you born?');
console.log('You are:', YEAR - birthYear);

let SquareLength = +prompt('Specify the length of the side of the square');
console.log('Perimeter of the square:', 4 * SquareLength);

let radius = +prompt('Specify the radius of the circle');
console.log('The area of the circle:', radius ** 2 * 3.14);

let tripDistance = prompt('What is the distance from Kyiv to Lviv?');
let tripDuration = prompt('How much time you plan to get there?');
console.log('Your speed must be:', tripDistance / tripDuration, 'km/h');

const DOLLAR = 0.901;
let currencyEuro = prompt('How many dollars do you want to change?');
console.log('You will get:', DOLLAR * currencyEuro, 'EURO');
