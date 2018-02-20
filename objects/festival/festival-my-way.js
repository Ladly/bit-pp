(
    function () {
        "use strict";

        function Genre(name) {
            this.name = name;
            
            this.getData = function() {
                var firstChar = this.name.charAt(0).toUpperCase();
                var secondChar = this.name.charAt(this.name.length - 1).toUpperCase();
                
                return firstChar + secondChar;
            };
        }

        function Movie(name, genre, length) {
            this.name = name;
            this.genre = genre;
            this.length = length;

            this.getData = function() {
                return this.name + ", " + this.length + " min, " + genre.getData();
            };
        }

        function Program(date) {
            this.date = new Date(date);
            this.movieList = [];

            this.numberOfMovies = function () {
               return this.movieList.length; 
            };

            this.addMovie = function (movie) {
                this.movieList.push(movie);
            };

            this.programMoviesLength = function(){
                var sumOfMoviesLength = 0;

                for(var i = 0; i < this.movieList.length; i++){                  
                sumOfMoviesLength += this.movieList[i].length;
                }

              return sumOfMoviesLength;
            };

            this.listMovies = function() {
                var list = "";
                for(var i = 0; i < this.movieList.length; i++) {
                    list += "\t" + this.movieList[i].name + ", " + this.movieList[i].length + ", " + this.movieList[i].genre.getData() + "\n";
                }

                return list;
            };

            this.getProgramDate = function() {
                var year = this.date.getFullYear();
                var month = this.date.getMonth();
                var day = this.date.getDate();

                return day + "." + month + "." + year; 

            };

            this.getData = function () {
              var result = "";              

              result = this.getProgramDate() + ", " + this.programMoviesLength() + "\n" + this.listMovies();
              return result;
            };
        }

        function Festival(name) {
            this.name = name;
            this.listOfPrograms = [];

            this.addProgram = function(program) {
                this.listOfPrograms.push(program);
            };

            this.numberOfFestivalMovies = function() {
                var totalNumberOfMovies = 0;
                var listOfProgramMovies = "";

                for(var i = 0; i < this.listOfPrograms.length; i++){                 
                    totalNumberOfMovies += this.listOfPrograms[i].numberOfMovies();
                    listOfProgramMovies += this.listOfPrograms[i].getData();
                }

                return totalNumberOfMovies + " movie titles \n" + listOfProgramMovies;
            };


            this.getData = function() {               

                return this.name + " festival has " + this.numberOfFestivalMovies() + "\n";
            };

        }


    var action = new Genre("Action");
    var adventure = new Genre("Adventure");
    var comic = new Genre ("Comic");

    var avatar = new Movie("Avatar", action, 150);
    var lordOfTheRings = new Movie("Lord of the rings", adventure, 400);
    var wolverine = new Movie("Wolverine", comic, 120);
    var thor = new Movie("Thor", action, 200);

    var saturday = new Program('2017 3 24');
    var sunday = new Program('2017 3 25');

    saturday.addMovie(avatar);
    saturday.addMovie(wolverine);
    saturday.addMovie(thor);
    sunday.addMovie(lordOfTheRings);

    var weekendFestival = new Festival("Weekend");

    weekendFestival.addProgram(saturday);
    weekendFestival.addProgram(sunday);

    console.log(weekendFestival.getData());

    }
)();