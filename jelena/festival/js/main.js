var addMovieButton = document.querySelectorAll("input");
var movieList =[];

function createMovieUI() {
    var movieTitle = document.querySelectorAll("input")[0].value
    var movieLength = document.querySelectorAll("input")[1].value
    var genreOptions = document.querySelector("select");
    var genre = genreOptions.options[genreOptions.selectedIndex].value; 
     var movie = createMovie(movieTitle, movieLength,genre);
    
    movieList.push(movie)
    console.log(movieList);
}

function createMovie(title,length, genre){
    var genre1 = new Genre (genre);
    var movie = new Movie(title,length,genre1)
    return movie;
}

addMovieButton[2].addEventListener("click",function () {
    createMovieUI();
})
