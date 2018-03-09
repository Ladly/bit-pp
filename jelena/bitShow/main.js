window.onload=getApi;
var crapHolder = document.querySelector(".add-crap")

function getApi() {
    let stupidMovies = new XMLHttpRequest()
    stupidMovies.open("GET", "http://api.tvmaze.com/shows")
    stupidMovies.send()
        
    stupidMovies.onload = function() {
        if (stupidMovies.status >= 200 && stupidMovies.status < 400) {
            var data = JSON.parse(stupidMovies.responseText);
            console.log(data[0]);
            getMovies(data)            
        } 
    }

}


function getMovies(arr) {
    arr.forEach((element, i) => {
        let p = document.createElement("p")
        let img = document.createElement("img")
        let a = document.createElement("a")
        let movieHolder = document.createElement("div")
        movieHolder.classList.add("movie-holder")

        if(i > 50) {
            return
        }
        
        p.innerHTML = element.name + element.id 
        
        img.src = element.image.medium
        movieHolder.appendChild(img)
        movieHolder.appendChild(p)
        a.appendChild(movieHolder)
        a.href = "pageTwo.html"
        crapHolder.appendChild(a)
        });
}

function goToThatMovie() {

}