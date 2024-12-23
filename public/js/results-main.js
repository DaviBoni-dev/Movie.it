import { createMoviesCarousel } from "../../src/components/carousel.js";
import { searchMovie } from "../../src/api/getMovies.js";
import getQueryParameter from "../../src/utils/url.js";

//let movieName = "";
document.addEventListener("DOMContentLoaded", async () => {
    let movieName = getQueryParameter("query");
    //if (movieName) {
    //    await putSearchResults(movieName);
    //}
    console.log(movieName);
    putSearchResults(movieName);
});

const gridResults = document.getElementById("movies-results-container");
const titleResults = document.getElementById("results-title");

// document.getElementById("search-movie-form").addEventListener("submit", async (event) => {
//     event.preventDefault();  // Previne o comportamento padrão de envio do formulário
//     const movieName = document.getElementById("search-movie-input").value;  // Obtém o nome do filme

//     // Atualiza a URL com o nome do filme pesquisado
//     updateURLWithQuery(movieName);
    
//     // Faz a pesquisa e exibe os resultados
//     await putSearchResults(movieName);
//   });

  async function putSearchResults(movieName) {
    let searchResults = await createMoviesCarousel(searchMovie, "search", movieName);
     gridResults.innerHTML = searchResults;
     titleResults.innerHTML = `Resultados para: ${movieName} `;
     document.getElementById('loading-screen').style.display = 'none';
}

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