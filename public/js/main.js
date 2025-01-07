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

// Variáveis para acompanhar o movimento
let startX = 0;
let currentX = 0;
let isDragging = false;

// Captura o toque inicial
carouselPopularEl.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX; // Posição inicial do toque
  isDragging = true; // Marca que o usuário está deslizando
});

// Atualiza o movimento em tempo real
carouselPopularEl.addEventListener("touchmove", (event) => {
  if (!isDragging) return;

  currentX = event.touches[0].clientX; // Posição atual do toque
  const deltaX = currentX - startX; // Distância desde o início do deslize

  // Aplica o movimento diretamente no carrossel
  carouselPopularEl.scrollBy({
    left: -deltaX, // Movimento proporcional ao deslize
    behavior: "auto", // "auto" para resposta imediata
  });

  // Atualiza a posição inicial para continuar o movimento
  startX = currentX;
});

// Finaliza o deslize
carouselPopularEl.addEventListener("touchend", () => {
  isDragging = false; // Interrompe o movimento
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
