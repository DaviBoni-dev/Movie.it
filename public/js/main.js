import { createMoviesCarousel } from "../../src/components/carousel.js";
import {
  getPopularMovies,
  getTrendingMovies,
  searchMovie,
} from "../../src/api/getMovies.js";

document.addEventListener("DOMContentLoaded", async () => {
  await putPopularCarousel();
  await putTrendingCarousel();
  //document.getElementById('loading-screen').style.display = 'none';
});

window.onload = async () => {
  document.getElementById('loading-screen').style.display = 'none';
}

// Seleciona o botão e o menu
const menuToggle = document.getElementById('menu-toggle');
const headerRight = document.querySelector('.header-right');

// Alterna a classe 'open' ao clicar no botão
menuToggle.addEventListener('click', () => {
  headerRight.classList.toggle('open');
});


const carouselPopularEl = document.getElementById("carousel-popular");

async function putPopularCarousel() {
  const moviesPopularContainer = await createMoviesCarousel(
    getPopularMovies,
    "popular"
  );
  carouselPopularEl.innerHTML = moviesPopularContainer;
}

const carouselTrendingEl = document.getElementById("carousel-trending");

async function putTrendingCarousel(time_window = "day") {
  const moviesTrendingContainer = await createMoviesCarousel(
    getTrendingMovies,
    "trending",
    time_window
  );
  carouselTrendingEl.innerHTML = moviesTrendingContainer;
}



const prevPopularButton = document.getElementById("prev-popular");
const nextPopularButton = document.getElementById("next-popular");

// Define a quantidade de pixels que o carrossel deve rolar a cada clique
const scrollAmount = 591;

// Rola para a esquerda quando a seta "prev" é clicada
prevPopularButton.addEventListener("click", () => {
  carouselPopularEl.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

// Rola para a direita quando a seta "next" é clicada
nextPopularButton.addEventListener("click", () => {
  carouselPopularEl.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

const prevTrendingButton = document.getElementById("prev-trending");
const nextTrendingButton = document.getElementById("next-trending");

prevTrendingButton.addEventListener("click", () => {
  carouselTrendingEl.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

// Rola para a direita quando a seta "next" é clicada
nextTrendingButton.addEventListener("click", () => {
  carouselTrendingEl.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

const dayButton = document.getElementById("trending-day-button");
const weekButton = document.getElementById("trending-week-button");

dayButton.addEventListener("click", () => {
  dayButton.classList.add("selected");
  weekButton.classList.remove("selected");

  putTrendingCarousel("day");
  carouselTrendingEl.scrollLeft -= 1000000;
});

weekButton.addEventListener("click", () => {
  dayButton.classList.remove("selected");
  weekButton.classList.add("selected");
  putTrendingCarousel("week");
  carouselTrendingEl.scrollLeft -= 1000000;
});

