// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const DOMbutton = document.getElementById('js-button');
if (DOMbutton) {
  DOMbutton.addEventListener('click', () => {
    //  modal window
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    const text = document.createElement('p');
    text.textContent = 'Модальне вікно для перевірки.';

    modalContent.appendChild(closeButton);
    modalContent.appendChild(text);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Обробник подій для кнопки закриття модального вікна
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
}

export default DOMbutton;