import key from "../components/key.js";

export async function getPopularMovies() {
  try {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data.results);
    const result = data.results;
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getTrendingMovies(timeWindow) {
  try {
    let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data.results.length);
    const result = data.results;
    return result;
  } catch (error) {
    throw error;
  }
}

getTrendingMovies();
