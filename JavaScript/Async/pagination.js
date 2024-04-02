function createPagination(totalPages, title, type) {
  const paginationContainer = document.getElementById('pagination');
  clearPagination();

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = page;
    pageButton.addEventListener('click', () => loadResults(title, type, page));
    paginationContainer.appendChild(pageButton);
  }
}
function clearPagination() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';
}

export { createPagination, clearPagination };
