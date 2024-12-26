const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-bar input");

const apiKey = "21b58980";
searchButton.addEventListener("click", function () {
  const query = searchInput.value;
  if (query) {
    fetchMovies(query);
  } else {
    alert("Lütfen bir film ismi giriniz.");
  }
});

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const query = searchInput.value;
    if (query) {
      fetchMovies(query);
    } else {
      alert("Lütfen bir film ismi giriniz.");
    }
  }
});
function displayMovies(movies) {
  const resultsContainer = document.querySelector("#results");
  resultsContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `
    <h3>${movie.Title} (${movie.Year})</h3>
     <img src="${movie.Poster}"  />
    `;
    resultsContainer.appendChild(movieElement);
  });
}

function fetchMovies(query) {
  const apiUrl = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
  axios
    .get(apiUrl)
    .then((response) => {
      const movies = response.data.Search;
      if (movies) {
        displayMovies(movies);
      } else {
        alert("Böyle bir film bulunamadı...");
      }
    })
    .catch((error) => {
      console.error("API çağrısında bir hata oluştu:", error);
    });
}

function fastMovie() {
  const url = `https://www.omdbapi.com/?s=fast&apikey=${apiKey}`;
  axios
    .get(url)
    .then((response) => {
      const movies = response.data.Search;
      if (movies) {
        displayMovies(movies);
      }
    })
    .catch((error) => {
      console.error("API çağrısında bir hata oluştu:", error);
    });
}
document.addEventListener("DOMContentLoaded", function () {
  fastMovie();
});
