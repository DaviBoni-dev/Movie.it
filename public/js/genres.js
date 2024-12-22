import { getGenresId } from '../../src/api/getMovies.js';
import { createGridGenres } from '../../src/components/genresGrid.js';

const genresGrid = document.getElementById('genres-grid');

document.addEventListener("DOMContentLoaded", async () => {
  let genresHTML = await createGridGenres();
    genresGrid.innerHTML = genresHTML;
  //document.getElementById('loading-screen').style.display = 'none';
});
