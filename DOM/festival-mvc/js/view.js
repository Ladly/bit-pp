var view = (function() {

    var DOMStrings = {
        movieTitleInput: ".movie-title",
        movieLengthInput: ".movie-length",
        movieGenreInput: "select",
        movieSubmitButton: ".movie-submit"
    };

    function getMovieInputData() {
        var movieTitle = document.querySelector(DOMStrings.movieTitleInput).value;
        var movieLength = document.querySelector(DOMStrings.movieLengthInput).value;
        var genreOptions = document.querySelector(DOMStrings.movieGenreInput);
        var movieGenre = genreOptions.options[genreOptions.selectedIndex].value;
    
        var movieInputData = {
            title: movieTitle,
            length: movieLength,
            genre: movieGenre
        };
        
        return movieInputData;
    }

    var viewExposing = {
       movieInputData: getMovieInputData,
       DOMStrings: DOMStrings     
    };

    return viewExposing;
})();





