import addItemToList from './playlist.js';
import showModal from './button.js';

const DOMList = document.getElementById('js-list');
if (DOMList) { 
  [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },
  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },
  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },
  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },
  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },
  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },
  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },
  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
].forEach((item) => {
    addItemToList(DOMList, item.author + ', ' + item.song);
  });
  console.log(DOMList);
}

// button opens a modal window
const DOMbutton = document.getElementById('js-button');
if (DOMbutton) {
  DOMbutton.addEventListener('click', showModal);
}
