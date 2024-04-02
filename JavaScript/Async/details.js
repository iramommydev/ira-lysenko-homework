import { apiUrl, apiKey } from './api.js';

function movieDetails(movieId) {
  const url = `${apiUrl}${apiKey}&i=${movieId}&plot=short`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === 'True') {
        return data.Plot;
      } else {
        throw new Error('Failed to fetch movie details.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      return 'Не вдалося завантажити деталі фільму.';
    });
}

export default movieDetails;
