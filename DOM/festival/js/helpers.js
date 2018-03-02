function createList(arr, element) {
    var ul = document.createElement("ul");    
    ul.classList.add("list-group", "list-group-flush");

    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li"); 
        li.innerHTML = arr[i].getData();        
        li.classList.add("list-group-item");        
    }

    ul.appendChild(li);
    element.appendChild(ul);
}

function createMovie(title, length, genre){
    var genre1 = new Genre (genre);
    var movie = new Movie(title, length, genre1);
    return movie;
}

function createProgram(date) {
    return new Program(date);
}