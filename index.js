document.addEventListener("DOMContentLoaded", function () {
    createGrid(16)

    let btn_popup = document.querySelector("#popup");

    btn_popup.addEventListener("click", function () {
        let size = getSize()
        createGrid(size)
    })
    console.log('loaded')

})






function createGrid(size) {
    let grid = document.querySelector('.grid');

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;

    for (var i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
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