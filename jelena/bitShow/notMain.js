window.onload = getMovieData;
displaySingleMovie = document.querySelector(".display-single-movie")

    function getMovieData() {
        let stupidMovies = new XMLHttpRequest()
        stupidMovies.open("GET", "http://api.tvmaze.com/lookup/shows?tvrage=" + 1) // PUT ID OF MOVIE you want to see details (get it form localStorage)
        stupidMovies.send()
            
        stupidMovies.onload = function() {
            if (stupidMovies.status >= 200 && stupidMovies.status < 400) {
                var data = JSON.parse(stupidMovies.responseText);
                console.log(data);
                displayMovie(data)            
            } 
        }    
    }

    function displayMovie(obj) {
        let mainTitle = document.createElement("h2")
        let bigImg = document.createElement("img")
        let listOne = document.createElement("li")
        let listTwo = document.createElement("li")
        let seasons = document.createElement("h3")
        let cast = document.createElement("h3")
        let details = document.createElement("h3")
        let description = document.createElement("p")

        mainTitle.textContent = obj.name
        bigImg.src = obj.image.original
        bigImg.width = 400


        displaySingleMovie.appendChild(mainTitle)
        displaySingleMovie.appendChild(bigImg)


        // etc etc etc

    }