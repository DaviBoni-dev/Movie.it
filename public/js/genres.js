import { getGenresId } from '../../src/api/getMovies.js';
import { createGridGenres } from '../../src/components/genresGrid.js';

const genresGrid = document.getElementById('genres-grid');

document.addEventListener("DOMContentLoaded", async () => {
  let genresHTML = await createGridGenres();
    genresGrid.innerHTML = genresHTML;
  //document.getElementById('loading-screen').style.display = 'none';

  const genres = document.querySelectorAll(".genre-box");

genres.forEach(div => {
    div.addEventListener("click", () => {
        // Obtém o id da div clicada
        const genreId = div.id;
        // const novaURL = `${window.location.origin}${window.location.hostname}/src/pages/genresResult.html?gender=${genreId}`;
        // window.history.pushState({ path: novaURL }, '', novaURL);
        // window.location.href = novaURL;

        /*Para testar no GitHub */
        const novaURL = `/Movie.it/src/pages/genresResult.html?gender=${genreId}`;
window.history.pushState({ path: novaURL }, '', novaURL);
window.location.href = novaURL;

    });
});
});

window.onload = async () => {
  document.getElementById('loading-screen').style.display = 'none';
};

