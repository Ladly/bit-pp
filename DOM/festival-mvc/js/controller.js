var controller = (function(view, model) {
    var submitMovieButton = document.querySelector(view.DOMStrings.movieSubmitButton);
    submitMovieButton.addEventListener("click", function(){
        var movieData = view.movieInputData();
        var movieInstance = model.createMovie(movieData);           
    });

})(view, model);