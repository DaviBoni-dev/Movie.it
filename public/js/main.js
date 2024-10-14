import key from "../../src/components/key.js";
import { createPopularMoviesCarousel } from "../../src/api/getMovies.js";

console.log("Página atualizada");

const carouselEl = document.getElementById("carousel");
const moviesContainer = await carousel();
carouselEl.innerHTML = moviesContainer;

async function carousel() {
  const result = await createPopularMoviesCarousel();
  console.log(result);
  return result;
}
