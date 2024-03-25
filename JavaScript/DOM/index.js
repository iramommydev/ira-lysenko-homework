const DOMList = document.getElementById('js-list');
if (DOMList) {
  const addItemToList = (text) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span);
    DOMList.appendChild(li);
  };

  const playList = [
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
    addItemToList(item.author + ', ' + item.song);
  });
}
