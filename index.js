document.addEventListener("DOMContentLoaded", function () {
    createGrid(16)




    let btn_popup = document.querySelector("#popup");

    btn_popup.addEventListener("click", function () {
        let grid = document.querySelector('.grid');
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild)
        } 
        let size = getSize()
        createGrid(size)

        
    })
    console.log('loaded')







    let btn_reset = document.getElementById("#reset");

    btn_reset.addEventListener("click", function () {

    })
})





function createGrid(size) {
    let grid = document.querySelector('.grid');

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;

    for (var i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.border = "solid black 2px";
        div.addEventListener("click", function () {
            div.style.backgroundColor = "black";
        })
        grid.insertAdjacentElement("beforeend", div)
    };
};

function getSize() {
    let input = prompt("how many squares per side")
    let message = document.querySelector("message")
    if (input == "") {
        this.message.innerHTML = "Please provide a number"
    }
    else if (input < 0 || input > 100) {
        this.message.innerHTML = "please provide a numer between 1 - 100"
    }
    else {
        this.message.innerHTML = "thank you"
        return input;
    }
}

function colourIn() {
    //when any child of the grid is clicked it changes colour to black
    let grid = document.querySelector('.grid');
    box = grid.children
    box.addEventListener("click", function () {
        box.style.backgroundColor = "black";
    })
}