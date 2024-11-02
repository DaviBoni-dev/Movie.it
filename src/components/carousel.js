export async function createMoviesCarousel(func, type, trendingtype = null) {
  const moviesArray = await func(trendingtype);
  console.log(moviesArray);
  let carouselHTML = "";
  for (let i = 0; i < 20; i++) {
    carouselHTML += /*html*/ `<div class ="movie-frame" id="movie-frame-${type}">
    <p class="rating-box-filme">${teste(moviesArray[i])}</p>
    <img
      src="https://image.tmdb.org/t/p/original${moviesArray[i].poster_path}"
      alt="Poster ${i}"
    />
    <p class="paragrafo-box-filme" title="${moviesArray[i].title}">${
      moviesArray[i].title
    }</p>

  </div>`;
  }
  console.log(carouselHTML);
  return carouselHTML;
}

function teste(movie) {
  if (movie.vote_average > 0) {
    return Number(movie.vote_average).toFixed(1);
  }
  return "NA";
}
