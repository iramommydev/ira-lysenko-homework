let isResizing = false;
// change size of element
function handleMouseMove(resizeableDiv, e) {
  if (isResizing) {
    const width = e.clientX - resizeableDiv.offsetLeft;
    const height = e.clientY - resizeableDiv.offsetTop;
    resizeableDiv.style.width = width + 'px';
    resizeableDiv.style.height = height + 'px';
  }
}

function startResize(e) {
  e.preventDefault();
  isResizing = true;
}

function stopResize() {
  isResizing = false;
}

export { startResize, handleMouseMove, stopResize };
