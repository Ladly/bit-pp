var view = (function() {

    var DOMStrings = {
        movieTitleInput: ".movie-title",
        movieLengthInput: ".movie-length",
        movieGenreInput: "#genre",
        movieSubmitButton: ".movie-submit",
        movieHolder: ".movies-holder"
    };

    var movieTitle = document.querySelector(DOMStrings.movieTitleInput);
    var movieLength = document.querySelector(DOMStrings.movieLengthInput);
    var genreOptions = document.querySelector(DOMStrings.movieGenreInput);
    
    function getMovieInputData() {
        var movieGenre = genreOptions.options[genreOptions.selectedIndex]; // WTF 1
        
        var title = movieTitle.value;
        var length = movieLength.value;
        var genre = movieGenre.value;
        
        var movieInputData = {
            title: title,
            length: length,
            genre: genre
        };
        
        return movieInputData;
    }
    
    function displayMovieData(movie) {
        var movieHolder = document.querySelector(DOMStrings.movieHolder);
        var ul = document.createElement("ul");
        ul.classList.add("list-group-flush");
        var movieListItem = document.createElement("li");
        movieListItem.classList.add("list-group-item");
        movieListItem.textContent = movie.getData();
        ul.appendChild(movieListItem);
        movieHolder.appendChild(ul);
    }

    function addMovieToList(movie) {
        var programMovieList = document.querySelector("#program-movies")
        var option = document.createElement("option");
        option.value = movie.title;
        option.textContent = movie.getData();
        programMovieList.appendChild(option)

    }
    
    function flushMovieInputs() {
        var movieGenre = genreOptions.options[genreOptions.selectedIndex]; // WTF 1
        movieTitle.value = "";
        movieLength.value = "";
        movieGenre.value = "-";
    }

    var viewExposing = {
       movieInputData: getMovieInputData,
       DOMStrings: DOMStrings,
       displayMovieData: displayMovieData,
       flushMovieInputs: flushMovieInputs,
       addMovieToList: addMovieToList    
    };

    return viewExposing;
})();





