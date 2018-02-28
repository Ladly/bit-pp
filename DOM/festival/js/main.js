
var movieSubmit = document.querySelector(".movie-submit");
var programSubmit = document.querySelector('program-submit')

movieSubmit.addEventListener("click", function(e) {
    submitMovie()
})

function Genre(name) {
    this.name = name;
    
    this.getData = function() {
        var firstChar = this.name.charAt(0).toUpperCase();
        var secondChar = this.name.charAt(this.name.length - 1).toUpperCase();
        
        return firstChar + secondChar;
    };
}

function Movie(title, genre, length) {
    this.title = title
    this.genre = genre
    this.length = length
}

Movie.prototype.getData = function() {
    return this.title + " " + this.genre + " " + this.length;
}

function submitMovie() {
    var movieList = []
    var movieTitle = document.querySelector(".movie-title").value;
    var movieLength = document.querySelector(".movie-length").value
    
    var genreOptionSelect = document.querySelector("#genre")
    var movieGenre = genreOptionSelect.options[genreOptionSelect.selectedIndex].value;    

    var movie = new Movie(movieTitle,movieGenre, movieLength)
    movieList.push(movie)
    createList(movieList)
}


function createList(arr){
    var ul = document.createElement("ul");
    var movieHolder = document.querySelector(".movies-holder")
    
    for(var i = 0; i < arr.length; i++) {
        var li = document.createElement("li")
        li.innerHTML = arr[i].getData()
    }
    
    ul.appendChild(li)
    movieHolder.appendChild(ul)
    
}
