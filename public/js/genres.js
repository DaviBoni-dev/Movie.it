import { getGenresId } from '../../src/api/getMovies.js';
import { createGridGenres } from '../../src/components/genresGrid.js';

const genresGrid = document.getElementById('genres-grid');

document.addEventListener("DOMContentLoaded", async () => {
  let genresHTML = await createGridGenres();
    genresGrid.innerHTML = genresHTML;
  //document.getElementById('loading-screen').style.display = 'none';

  const genres = document.querySelectorAll(".genre-box");
console.log(genres);

genres.forEach(div => {
    div.addEventListener("click", () => {
        // Obtém o id da div clicada
        const genreId = div.id;
        console.log(`Você clicou na div com ID: ${genreId}`);
        const novaURL = `${window.location.origin}/src/pages/genresResult.html?gender=${genreId}`;
        window.history.pushState({ path: novaURL }, '', novaURL);
        window.location.href = novaURL;
    });
});
});

window.onload = async () => {
  document.getElementById('loading-screen').style.display = 'none';
};

