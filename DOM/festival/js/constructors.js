function Genre(name) {
    this.name = name;
}

Genre.prototype.getData = function () {
    var firstChar = this.name.charAt(0).toUpperCase();
    var secondChar = this.name.charAt(this.name.length - 1).toUpperCase();
    
    return firstChar + secondChar;
}

function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length +" min, " + this.genre.getData();
};

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = []; 
}
