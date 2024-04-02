import movieDetails from './details.js';

function createFilmElement(film) {
  const filmDiv = document.createElement('div');
  filmDiv.id = film.imdbID;

  const h2 = document.createElement('h2');
  h2.textContent = `${film.Title} (${film.Year})`;
  filmDiv.appendChild(h2);

  if (film.Poster) {
    const img = document.createElement('img');
    img.src = film.Poster;
    img.alt = 'Постер фільму';
    img.style.width = '100px';
    filmDiv.appendChild(img);
  }

  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = 'Details';
  details.appendChild(summary);

  const detailsContent = document.createElement('div');
  detailsContent.className = `${film.imdbID}-details-content`;
  details.appendChild(detailsContent);

  details.addEventListener('toggle', function (event) {
    if (this.open && !detailsContent.hasAttribute('data-fetched')) {
      detailsContent.textContent = 'Loading...';
      movieDetails(film.imdbID).then((plot) => {
        detailsContent.textContent = plot;
        detailsContent.setAttribute('data-fetched', 'true');
      });
    }
  });

  filmDiv.appendChild(details);

  return filmDiv;
}

export default createFilmElement;
