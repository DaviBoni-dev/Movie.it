import { getPopularMovies } from "../api/getMovies";

export async function createPopularMoviesCarousel() {
  const moviesArray = await getPopularMovies();
  //   console.log(moviesArray);
  let carouselHTML = "";
  for (let i = 0; i < 20; i++) {
    carouselHTML += /*html*/ `<div class ="movie-frame" id="movie-frame-${
      moviesArray[i].id
    }">
    <p class="rating-box-filme">${Number(moviesArray[i].vote_average).toFixed(
      1
    )}</p>
    <img
      src="https://image.tmdb.org/t/p/original${moviesArray[i].poster_path}"
      alt="Poster ${i}"
    />
    <p class="paragrafo-box-filme" title="${moviesArray[i].title}">${
      moviesArray[i].title
    }</p>

  </div>`;
  }
  return carouselHTML;
}
