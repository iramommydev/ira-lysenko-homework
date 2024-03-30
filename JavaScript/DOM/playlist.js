const addItemToList = (DOMList, text) => {
  if (!DOMList) return;
  const li = document.createElement('li');
  li.classList.add('list-item');
  const span = document.createElement('span');
  span.innerText = text;
  li.appendChild(span);
  DOMList.appendChild(li);
};

export default addItemToList;
