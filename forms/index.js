const createAccountForm = () => {
  const DOMForm = document.getElementById('js-form');
  
  if (!DOMForm) return;

  DOMForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('e:', e);

  //   const form = new FormData(e.target);
  //   console.log('form', form);
  });
};
