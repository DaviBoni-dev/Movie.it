import { createMoviesCarousel } from "../../src/components/carousel";
import { searchMovie } from "../../src/api/getMovies";
import getQueryParameter from "../../src/utils/url";

// Função para atualizar a URL com o parâmetro de pesquisa
function updateURLWithQuery(query) {
  const url = new URL(window.location);  // Obtém a URL atual
  url.searchParams.set('query', query);  // Adiciona ou altera o parâmetro 'query' na URL
  history.pushState(null, '', url);  // Atualiza a URL sem recarregar a página
}

window.onload = async function() {
  const query = getQueryParameter('query');  // Recupera o valor da URL
  if (query) {
   await putSearchResults(query);
  }
}

const gridResults = document.getElementById("movies-results-container");
const titleResults = document.getElementById("results-title");

document.getElementById("search-movie-form").addEventListener("submit", async (event) => {
    event.preventDefault();  // Previne o comportamento padrão de envio do formulário
    const movieName = document.getElementById("search-movie-input").value;  // Obtém o nome do filme

    // Atualiza a URL com o nome do filme pesquisado
    updateURLWithQuery(movieName);
    
    // Faz a pesquisa e exibe os resultados
    await putSearchResults(movieName);
  });

  async function putSearchResults(movieName) {
    let searchResults = await createMoviesCarousel(searchMovie, "search", movieName);
     gridResults.innerHTML = searchResults;
     titleResults.innerHTML = `Resultados para: ${movieName} `;
     document.getElementById('loading-screen').style.display = 'none';
}
