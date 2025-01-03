const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-bar input");

document.querySelector(".search-button").addEventListener("click", function () {
  const query = document.querySelector(".search-bar input").value;
  if (query) {
    fetchMovies(query);
  } else {
    alert("Lütfen bir film ismi girin...");
  }
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const query = searchInput.value;
    if (query) {
      fetchMovies(query);
    } else {
      alert("Lütfen bir film ismi girin...");
    }
  }
});

async function fetchMovies(query) {
  const apiKey = "21b58980";
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      alert("Böyle Bir Film Bulunamadı...");
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
    alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
  }
}

function displayMovies(movies) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `
        <h3>${movie.Title} (${movie.Year})</h3>
        <img src="${movie.Poster}" alt="${movie.Title}" />
    `;
    resultsContainer.appendChild(movieElement);
  });
}
async function fetchHarryMovies() {
  const apiKey = "21b58980";
  const url = `https://www.omdbapi.com/?s=harry+potter&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      displayMovies(data.Search);
    }
  } catch (error) {
    console.error("Bir hata oluştu:", error);
    alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  fetchHarryMovies();
});
