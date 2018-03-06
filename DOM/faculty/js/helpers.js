function getConstant(param, arr) {
    var parsedParam = parseInt(param, 10);
    return arr[parsedParam];
}

function makeSelect(arr, elemToAppend){ 
    var select = document.createElement("select");
    select.classList.add("custom-select"); 
    for(var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        option.textContent = arr[i].getProfessorData();
        option.value = [i]
        select.appendChild(option);
    }
    elemToAppend.innerHTML = "";
    elemToAppend.appendChild(select);
}
