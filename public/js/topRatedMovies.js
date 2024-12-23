import { getTopRatedMovies } from "../../src/api/getMovies.js";
import { createMoviesCarousel } from "../../src/components/carousel.js";

let page = 0;

document.addEventListener("DOMContentLoaded", async () => {
    page += 1;
    const movieContaiener = document.getElementById("top-rated-container");
    let result = await createMoviesCarousel(getTopRatedMovies, "top-rated", page);
    movieContaiener.innerHTML = result;
    const loadingPage = document.getElementById("loading-screen");
    loadingPage.style.display = "none";
});

window.onload = async () => {
    document.getElementById("loading-screen").style.display = "none";
};

async function updatePage() {
    page++;
    const movieContaiener = document.getElementById("top-rated-container");
    let result = await createMoviesCarousel(getTopRatedMovies, "top-rated", page);
    movieContaiener.innerHTML += result;
}

const buttonLoadMore = document.getElementById("toprated-loadmore-button");

buttonLoadMore.addEventListener("click", updatePage);

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