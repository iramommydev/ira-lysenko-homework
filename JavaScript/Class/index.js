import Circle from './circle.js';
import  Marker from './marker.js';
import { EmpTable, Employee } from './employee.js';
import {User, Admin, signUp} from './user.js';
import createClock from './world-clock.js';

// * 1 Реалізуй клас, що описує коло.
const circle = new Circle(10);
console.log(circle.diameter);
  
// * завдання 2 Marker
const pinkMarker = new Marker('pink');

// Спроба написати текст маркером
pinkMarker.write('Чим більше ти пишеш, тим менше чорнила в маркері');

// Перевірка рівня чорнила після написання
console.log(`Рівень чорнила після написання: ${pinkMarker.inkLevel}%`);

// * завданн 3 створити список працівників і вивести його 
const bankEmployees = [
  new Employee('Зайчик Антон', 'менеджер'),
  new Employee('Пончик Яна', 'кредитний аналітик'),
  new Employee('Булка Сергій', 'головний менеджер'),
  new Employee('Гречко Ольга', 'директор'),
];
const empTable = new EmpTable(bankEmployees);

// Отримання HTML-коду таблиці
const html = empTable.getHtml();
document.body.innerHTML = html;


//  * Реалізуй клас User і Admin з заданими компонентами:
signUp('Ivan', 'admin');                                                                                                                        
console.log(admin);
admin.addUser('Bob', 'user');
admin.addUser('Gleb', 'admin');
console.log(admin.getAllUsers());
// const users = admin.getAllUsers();
// const user = users[0];
// console.log(user.getName());
// user.changeName('Jane');
// console.log(user.getName());
// console.log(user.getRole());
const user = new User('Jane')


// * WorldClock
const input = document.createElement('input');
input.type = 'text';
input.id = 'timezoneInput';
input.placeholder = "Enter Timezone (e.g.'Europe/Kiev')";

const button = document.createElement('button');
button.textContent = 'Create Clock';
button.addEventListener('click', createClock);

document.body.appendChild(input);
document.body.appendChild(button);

const clocksContainer = document.createElement('div');
clocksContainer.id = 'clocksContainer';
document.body.appendChild(clocksContainer);
