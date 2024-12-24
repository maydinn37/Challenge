document.querySelector(".search-button").addEventListener("click", function () {
  const query = document.querySelector(".search-bar input").value;
  if (query) {
    fetchMovies(query);
  } else {
    alert("Lütfen bir film ismi girin...");
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
