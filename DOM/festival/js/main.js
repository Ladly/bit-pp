var addMovieButton = document.querySelector(".movie-submit");
var addProgramButton = document.querySelector(".program-submit");
var movieList =[];

addMovieButton.addEventListener("click", function () {
    createMovieUI();
});

addProgramButton.addEventListener("click", function(){
    makeProgram()
    
});

function createMovieUI() {    
    var movieHolder = document.querySelector(".movies-holder");
    var movieTitle = document.querySelector(".movie-title").value;
    var movieLength = document.querySelector(".movie-length").value;
    var genreOptions = document.querySelector("select");
    var genre = genreOptions.options[genreOptions.selectedIndex].value; 
    
    var movie = createMovie(movieTitle, movieLength, genre);
    
    movieList.push(movie);
    
    createList(movieList, movieHolder);
}

function makeProgram() {
    var programDate = document.querySelector(".program-date").value;

    var program = createProgram(programDate);
    console.log(program);

}
