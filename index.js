function showMovies(){
    const searchTerm = document.getElementById("input").value;
    localStorage.setItem("searchTerm", searchTerm)
    window.location.href = `${window.location.origin}/movies.html`
}

function enterPress(event){
    if (event.key === "Enter"){
        showMovies()
    }
}

function openMenu(){
    document.body.classList+= " menu--open"
}
function closeMenu(){
    document.body.classList.remove('menu--open')
}