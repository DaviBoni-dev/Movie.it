export async function createMoviesCarousel(func, type, trendingtype = null) {
  const moviesArray = await func(trendingtype);
  console.log(moviesArray);
  let carouselHTML = "";

  if(moviesArray.length == 0){
      carouselHTML = `<h2> Nehum filme encontrado </h2>`;
      return carouselHTML;
      }
  for (let i = 0; i < 20; i++) {
    if(moviesArray[i].poster_path == null){
     continue;
    }
    carouselHTML += /*html*/ `<div class ="movie-frame" id="movie-frame-${type}">
    <p class="rating-box-filme">${ajustarNota(moviesArray[i])}</p>
    <img
      src="${adjustPoster(moviesArray[i].poster_path)}"
      alt="Poster ${i}"
    />
    <p class="paragrafo-box-filme" title="${moviesArray[i].title}">${
      moviesArray[i].title
    }</p>

  </div>`;
  }
 // console.log(carouselHTML);
  return carouselHTML;
}

function ajustarNota(movie) {
  if (movie.vote_average > 0) {
    return Number(movie.vote_average).toFixed(1);
  }
  return "NA";
}

function adjustPoster(moviePoster) {
  return `https://image.tmdb.org/t/p/original${moviePoster}`;
}
