"use strict";

(function () {
    function Genre (name) {
        this.name = name
        this.getData = function() {           
            var firstLetter = this.name.charAt(0).toUpperCase() 
            var secondLetter = this.name.charAt(this.name.length-1).toUpperCase() 
            // return (this.name.charAt(0) + this.name.charAt(this.name.length-1)).toUpperCase()
            return firstLetter + secondLetter
        }
    }

    function Movie (title, genre, length) {
        this.title = title
        this.genre = genre
        this.length = length

        this.getData = function () {
            return this.title + ", " + this.length + "min, " + this.genre.getData()
        }
    }

    function Program (date, movies) {
        this.date = new Date(date)
        this.movies = []
        this.numOfMovies = movies.length;
        this.addMovie = function(movie) {
            this.movies.push(movie)
        }
        this.getData = function () {
            var programLen = (function (){
                var len = 0;
                var programDescription = "min, \n";
                for (var i = 0; i < movies.length; i++){
                    len += movies[i].length;
                    programDescription += "\t" + movies[i].title + ", " + movies[i].length + "min, " + movies[i].genre.getData() + "\n";
                }
                return len + programDescription;
            })();
            return date + ", program duration " + programLen;
        }
    }

    function Festival (name, list) {
        this.name = name
        this.list = list
        this.numOfMovies = (function() {                  
            var totalNumOfMovies = 0
            
            for(var i = 0; i < list.length; i++){
                totalNumOfMovies += list[i].numOfMovies
            }


            return totalNumOfMovies
        })()
    }

    var action = new Genre("action");
    
    var movieOne = new Movie("avatar", action, 123)
    var movieTwo = new Movie("superman", action, 130)
    var movieThree = new Movie("batman", action, 142)
    var movieFive = new Movie("Catman", action, 160)

    var programOne = new Program("16.10.2019", [movieOne, movieTwo, movieThree])
    var programTwo = new Program("12.10.2020", [movieFive])

    var  newFest = new Festival("yearsFestival", [programOne, programTwo])

    console.log(newFest.numOfMovies);
    
})();
