import { createMoviesCarousel } from "../../src/components/carousel.js";
import {
  getPopularMovies,
  getTrendingMovies,
  getUpcomingMovies
} from "../../src/api/getMovies.js";

document.addEventListener("DOMContentLoaded", async () => {
  await putPopularCarousel();
  await putTrendingCarousel();
  await putUpcomingCarousel();
  //document.getElementById('loading-screen').style.display = 'none';
});

window.onload = async () => {
  document.getElementById('loading-screen').style.display = 'none';
}


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

const carouselUpcomingEl = document.getElementById("carousel-upcoming");

async function putUpcomingCarousel() {
  const moviesUpcomingContainer = await createMoviesCarousel(
    getUpcomingMovies,
    "upcoming",
    1
  );
  carouselUpcomingEl.innerHTML = moviesUpcomingContainer;
}



const prevPopularButton = document.getElementById("prev-popular");
const nextPopularButton = document.getElementById("next-popular");

// Define a quantidade de pixels que o carrossel deve rolar a cada clique
let windowSize = window.innerWidth;
let scrollAmount;
if(windowSize < 768) {
  scrollAmount = 393;
}
else{
  scrollAmount = 591;
}


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

let isTouching = false; // Flag para saber se o usuário está tocando
let startX = 0; // Posição inicial do toque
let scrollLeft = 0; // Posição inicial do scroll

// Função para calcular o quanto o carrossel deve rolar
function moveCarousel(event, carousel) {
  if (!isTouching) return;
  
  const x = event.touches[0].clientX; // Posição do toque
  const distance = startX - x; // Distância percorrida
  carousel.scrollLeft = scrollLeft + distance; // Atualiza o scroll
}

// Quando o toque começa
carouselPopularEl.addEventListener("touchstart", (event) => {
  isTouching = true;
  startX = event.touches[0].clientX; // Posição inicial
  scrollLeft = carouselPopularEl.scrollLeft; // Posição atual do scroll
});

// Quando o toque se move
carouselPopularEl.addEventListener("touchmove", () => {
  moveCarousel(event, carouselPopularEl);
});

// Quando o toque termina
carouselPopularEl.addEventListener("touchend", () => {
  isTouching = false;
});

carouselPopularEl.addEventListener("touchcancel", () => {
  isTouching = false;
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

// Quando o toque começa
carouselUpcomingEl.addEventListener("touchstart", (event) => {
  isTouching = true;
  startX = event.touches[0].clientX; // Posição inicial
  scrollLeft = carouselPopularEl.scrollLeft; // Posição atual do scroll
});

// Quando o toque se move
carouselUpcomingEl.addEventListener("touchmove", () => {
  moveCarousel(event, carouselUpcomingEl);
});

// Quando o toque termina
carouselUpcomingEl.addEventListener("touchend", () => {
  isTouching = false;
});

carouselUpcomingEl.addEventListener("touchcancel", () => {
  isTouching = false;
});


const prevUpcomingButton = document.getElementById("prev-upcoming");
const nextUpcomingButton = document.getElementById("next-upcoming");

prevUpcomingButton.addEventListener("click", () => {
  carouselUpcomingEl.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

nextUpcomingButton.addEventListener("click", () => {
  carouselUpcomingEl.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

// Quando o toque começa
carouselTrendingEl.addEventListener("touchstart", (event) => {
  isTouching = true;
  startX = event.touches[0].clientX; // Posição inicial
  scrollLeft = carouselPopularEl.scrollLeft; // Posição atual do scroll
});

// Quando o toque se move
carouselTrendingEl.addEventListener("touchmove", () => {
  moveCarousel(event, carouselTrendingEl);
});

// Quando o toque termina
carouselTrendingEl.addEventListener("touchend", () => {
  isTouching = false;
});

carouselTrendingEl.addEventListener("touchcancel", () => {
  isTouching = false;
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

  imagesLoaded('body', function () {
  });

  window.addEventListener('load', function() {
  });
