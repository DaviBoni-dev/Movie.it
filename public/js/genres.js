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

// Seleciona o botão e o menu
const menuToggle = document.getElementById('menu-toggle');
const headerRight = document.getElementById('header-right');
const headerLeft = document.getElementById('header-left');
const headerList = document.getElementById('header-list');

let isClose = true;
// Alterna a classe 'open' ao clicar no botão
menuToggle.addEventListener('click', () => {
if(isClose){
  headerRight.style.display = "none";
  headerLeft.style.display = "none";
  headerList.style.display = "flex";
  headerList.classList.add('open')
  isClose = false;
} else {
  headerRight.style.display = "flex";
  headerLeft.style.display = "flex";
  headerList.style.display = "none";
  headerList.classList.remove('open')
  isClose = true;
}
  // console.log("cliquei");
  // headerRight.classList.toggle('open');
});

