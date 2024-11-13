import key from "../components/key.js";

export async function getPopularMovies() {
  try {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data: ", data);
    let result = data.results;
    result = adjustArray(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getTrendingMovies(timeWindow) {
  try {
    let url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${key}&language=en&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log("data: ", data.results[0]);
    //adjustArray(data);
    let result = data.results;
    result = adjustArray(result);
    // console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function searchMovie(movieName) {
  try {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en&region=BR&query=${movieName}&page=1&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();
    let result = data.results;
    result = adjustArray(result);
   // console.log("data: ", data);
    return result;
  } catch (error) {
    throw error;
  }
}

function adjustArray(moviesArray) {
  for (let i = 0; i < moviesArray.length; i++) {
    if (Number(moviesArray[i].vote_average) == 0) {
      moviesArray[i].vote_average = "NA";
      // console.log("igual");
    }
  }

  return moviesArray;
}

//getTrendingMovies("day");

//const teste = await getTrendingMovies("day");
//console.log(teste);
//adjustArray(teste);

//const teste2 = array(teste[0]);
//console.log(teste2);


