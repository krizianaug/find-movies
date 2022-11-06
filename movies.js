let moviesData;
const moviesWrapper = document.querySelector(".movies__list")
const searchTerm = localStorage.getItem("searchTerm")


async function renderMovies(filter) {

  moviesWrapper.classList += ' movies__loading'

  if (!moviesData){
    const movies = await fetch(`https://www.omdbapi.com/?apikey=788103b6&type=movie&s=${searchTerm}`)
    moviesData = await movies.json();
  }

  moviesWrapper.classList.remove('movies__loading')

  // const movies = await fetch(`https://www.omdbapi.com/?apikey=788103b6&type=movie&s=${searchTerm}`)
  // const moviesData = await movies.json();
  // console.log(moviesData)
  

  if (filter === 'DATE_LOW_TO_HIGH') {
    moviesData.Search.sort((a, b) => (a.Year - b.Year));
  }
  else if (filter === 'DATE_HIGH_TO_LOW') {
    moviesData.Search.sort((a, b) => (b.Year - a.Year));
  }
  else if (filter === 'TITLE_LOW_TO_HIGH') {
    moviesData.Search.sort((a, b) => (a.Title.localeCompare(b.Title)));

  }
  else if (filter === 'TITLE_HIGH_TO_LOW') {
    moviesData.Search.sort((a, b) =>(b.Title.localeCompare(a.Title)));

  }

  moviesWrapper.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");

}

function filterMovies(event) {

  renderMovies(event.target.value)
  
}


function moviesHTML(movie) {
  return `<div class="movie__container">
        <figure class="movie__poster">
        <img src="${movie.Poster}" class="poster__image" alt="Poster">
    </figure>
        <h3>${movie.Title}</h4>
        <p><b>Year:</b> ${movie.Year} </p>
        <p><b>Type:</b>  ${movie.Type}  </p>
        <p><b>imdbID:</b> ${movie.imdbID} </p>
    </div>
    </div>`

}

renderMovies();


