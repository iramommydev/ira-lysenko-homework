import { clearPagination } from './pagination.js';
import loadResults from './results.js';

const filmSearchForm = document.getElementById('filmSearch');
export const resultsContainer = document.getElementById('results');

if (filmSearchForm) {
  filmSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const movieInputForm = event.target;
    const movieTitle = movieInputForm.querySelector('#title').value;
    const movieType = movieInputForm.querySelector('#type').value;
    if (movieTitle.length > 2) {
      loadResults(movieTitle, movieType, 1);
    } else {
      clearPagination();
      resultsContainer.textContent = `Введіть мінімум 3 символи для пошуку.`;
    }
  });
}
