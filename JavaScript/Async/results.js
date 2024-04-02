import { createPagination, clearPagination } from './pagination.js';
import createFilmElement from './create-film-element.js';
import { apiUrl, apiKey } from './api.js';
import { resultsContainer } from './index.js';

function loadResults(title, type, page) {
  const url = `${apiUrl}${apiKey}&s=${title}&type=${type}&page=${page}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === 'True') {
        displayResults(data.Search);
        if (data.totalResults > 10)
          createPagination(Math.ceil(data.totalResults / 10), title, type);
      } else {
        resultsContainer.textContent = `${type} not found! ${data.Error}`;
        clearPagination;
      }
    })
    .catch((error) => console.error('Помилка:', error));
}

function displayResults(films) {
  resultsContainer.textContent = '';

  if (Array.isArray(films)) {
    films.forEach((film) => {
      const filmElement = createFilmElement(film);
      resultsContainer.appendChild(filmElement);
    });
  } else {
    resultsContainer.textContent =
      'Неможливо відобразити фільми. Переконайтеся, що API повертає коректні дані.';
  }
}

export default loadResults;
