const moviesWrapper = document.querySelector(".movies__list")

async function renderMovies() {
    
    const movies = await fetch("https://www.omdbapi.com/?apikey=788103b6&s=fast")
    // add this later ${searchTerm}
    const moviesData = await movies.json();
    console.log(moviesData)
    moviesWrapper.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
    

}

renderMovies();

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



