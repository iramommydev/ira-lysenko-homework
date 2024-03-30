// на модальному вікні повинен бути текст і кнопка "Закрити".
const showModal = () => {
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

  // event for close button
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default showModal;
