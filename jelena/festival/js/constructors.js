function Genre(name) {
    this.name = name;
}

Genre.prototype.getData = function () {
    var acronym = this.name.charAt(0) + this.name.charAt(this.name.length-1);
        acronym.toUpperCase();
        return acronym;
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length +"min, " + this.genre.getData();
}