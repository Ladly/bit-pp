var model = (function() {
    var data = {
        movieList: []
    };

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function() {
        return this.genre + ", " + this.title + ", " + this.length;
    };

    function Program(date) {
        this.date = new Date(date);
        this.programMovieList = [];
    }

    Program.prototype.addMovie = function(movie) {
        this.programMovieList.push(movie);
    };

    function createMovie(movieData) {
        movie = new Movie(movieData.title, movieData.length, movieData.genre);
        data.movieList.push(movie);
        return movie;
    }

    modelExposing = {
        createMovie: createMovie,
    };

    return modelExposing;

})();