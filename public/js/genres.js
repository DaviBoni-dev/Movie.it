const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=14492379fbe9f375379b98f0de2580ac&language=pt-BR"
)
const data = await response.json();
console.log(data);