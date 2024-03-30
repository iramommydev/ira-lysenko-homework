// Function to switch div to textarea
function switchToTextarea(divElement) {
  const textarea = document.createElement('textarea');
  textarea.id = divElement.id;
  textarea.value = divElement.innerHTML; // Save current text as value
  divElement.replaceWith(textarea);
  textarea.focus(); // Focus on the newly created textarea
}

// Function to switch textarea back to div
function switchToDiv(textareaElement) {
  const div = document.createElement('div');
  div.id = textareaElement.id;
  div.innerHTML = textareaElement.value; // Save edited text
  textareaElement.replaceWith(div);
  }

export {switchToTextarea,switchToDiv};