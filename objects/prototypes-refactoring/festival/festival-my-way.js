(
    function () {
        "use strict";

        function Genre(name) {
            this.name = name; 
        }

        Genre.prototype.getData = function() {
            var firstChar = this.name.charAt(0).toUpperCase();
            var secondChar = this.name.charAt(this.name.length - 1).toUpperCase();
            
            return firstChar + secondChar;
        };

        function Movie(name, genre, length) {
            this.name = name;
            this.genre = genre;
            this.length = length;
        }

        Movie.prototype.getData = function() {
            return this.name + ", " + this.length + " min, " + genre.getData();
        };

        function Program(date) {
            this.date = new Date(date);
            this.movieList = [];            
        }

        Program.prototype.numberOfMovies = function () {
            return this.movieList.length; 
         };

         Program.prototype.addMovie = function (movie) {
             this.movieList.push(movie);
         };

         Program.prototype.programMoviesLength = function(){
             var sumOfMoviesLength = 0;

             for(var i = 0; i < this.movieList.length; i++){                  
             sumOfMoviesLength += this.movieList[i].length;
             }

           return sumOfMoviesLength;
         };

         Program.prototype.listMovies = function() {
             var list = "";
             for(var i = 0; i < this.movieList.length; i++) {
                 list += "\t" + this.movieList[i].name + ", " + this.movieList[i].length + ", " + this.movieList[i].genre.getData() + "\n";
             }

             return list;
         };

         Program.prototype.getProgramDate = function() {
             var year = this.date.getFullYear();
             var month = this.date.getMonth();
             var day = this.date.getDate();

             return day + "." + month + "." + year; 
         };

         Program.prototype.getData = function () {

             return this.getProgramDate() + ", " + this.programMoviesLength() + "\n" + this.listMovies();
         };

        function Festival(name) {
            this.name = name;
            this.listOfPrograms = [];
        }

        Festival.prototype.addProgram = function(program) {
            this.listOfPrograms.push(program);
        };

        Festival.prototype.numberOfFestivalMovies = function() {
            var totalNumberOfMovies = 0;
            var listOfProgramMovies = "";

            for(var i = 0; i < this.listOfPrograms.length; i++){                 
                totalNumberOfMovies += this.listOfPrograms[i].numberOfMovies();
                listOfProgramMovies += this.listOfPrograms[i].getData();
            }

            return totalNumberOfMovies + " movie titles \n" + listOfProgramMovies;
        };


        Festival.prototype.getData = function() {               

            return this.name + " festival has " + this.numberOfFestivalMovies() + "\n";
        };


    var action = new Genre("Action");
    var adventure = new Genre("Adventure");
    var comic = new Genre ("Comic");

    var avatar = new Movie("Avatar", action, 150);
    var lordOfTheRings = new Movie("Lord of the rings", adventure, 400);
    var wolverine = new Movie("Wolverine", comic, 120);
    var thor = new Movie("Thor", action, 200);

    var saturday = new Program('2017 3 24');
    var sunday = new Program('2017 3 25');

    var weekendFestival = new Festival("Weekend");
    
    saturday.addMovie(avatar);
    saturday.addMovie(wolverine);
    saturday.addMovie(thor);
    sunday.addMovie(lordOfTheRings);

    weekendFestival.addProgram(saturday);
    weekendFestival.addProgram(sunday);

    console.log(weekendFestival.getData());

    }
)();