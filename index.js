document.addEventListener("DOMContentLoaded", function () {
getSize()
// createGrid(32)
console.log('loaded')

})






function createGrid(size) {
    let grid = document.querySelector('.grid');

    grid.getElementsByClassName.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.getElementsByClassName.gridTemplateRows = `repeat(${size}, 1fr)`

    for (var rows = 0; rows < size; rows++) {
        for (var columns = 0; columns < size; columns++) {
            let div = document.createElement("div");
            div.style.backgroundColor = "yellow"
            grid.insertAdjacentElement("beforeend", div)

        };
    };
};

function getSize(){
    let input = prompt("how many squares per side")
    let message = document.querySelector("message")
    if (input == ""){
        message.innerHTML = "Please provide a number"    }
    else if(input < 0 || input < 100) {
        createGrid(size)
    }
}

// function clearGrid() {
//     box.remove();
// };

// function refreshGrid() {
//     var z = prompt("How many boxes per side?");
//     clearGrid();
//     createGrid(z);
// };

// createGrid(20);

// box.mouseover(function () {
//     this.css("background-color", "black");
// });

// $(".newGrid").click(function () {
//     refreshGrid();

//     box.mouseover(function () {
//         this.css("background-color", "black");
//     });
// });