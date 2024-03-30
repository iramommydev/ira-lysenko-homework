import { switchToTextarea, switchToDiv } from './switchto.js';
import { startResize, handleMouseMove, stopResize } from './resizer.js';
import createTable from './createtable.js';

// Task1. Div switch to textarea and back
document.addEventListener('keydown', handleKeypress);
function handleKeypress(event) {
  if (event.ctrlKey && (event.key === 'e' || event.key === 's')) {
    event.preventDefault();
    console.log(`Detected Ctrl+${event.key} keypress`);

    // Dynamically find the current editable element by its ID or class
    let currentElement = document.getElementById('edit-text');

    if (event.key === 'e') {
      if (currentElement && currentElement.tagName === 'DIV') {
        switchToTextarea(currentElement);
      }
    } else if (event.key === 's') {
      // Since we are dynamically finding the element, ensure it's a textarea before switching
      if (currentElement && currentElement.tagName === 'TEXTAREA') {
        switchToDiv(currentElement);
      }
    }
  }
}

// task2. Create a table. add sirting by titles
const books = [
  {
    title: 'Володар Перснів',
    author: 'Дж. Р. Р. Толкін',
    year: 1954,
    genre: 'Фентезі',
  },
  {
    title: 'Гаррі Поттер і Філософський камінь',
    author: 'Дж. К. Ролінґ',
    year: 1997,
    genre: 'Фентезі',
  },
  {
    title: 'Шерлок Холмс',
    author: 'Артур Конан Дойл',
    year: 1887,
    genre: 'Детектив',
  },
  { title: '1984', author: 'Джордж Орвелл', year: 1949, genre: 'Дистопія' },
  {
    title: 'Великий Гетсбі',
    author: 'Ф. Скотт Фіцджеральд',
    year: 1925,
    genre: 'Роман',
  },
];
createTable(books);

// task3. Resizing block
const resizer = document.getElementById('js-resizer');
const resizeableDiv = document.getElementById('js-block');

resizer.addEventListener('mousedown', (e) => {
  e.preventDefault();
  startResize(e);
  document.addEventListener('mousemove', (e) =>
    handleMouseMove(resizeableDiv, e)
  );
  document.addEventListener('mouseup', stopResize);
});
