var model = (function() {
    var data = {
        movieList: []
    };

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

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