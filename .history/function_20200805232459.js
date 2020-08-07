function myFunction(num) {

    let cellSize = 450 / num + "px";
    let diff = 100 / num;
    let grid = "";
    let row = num;
    let col = num;
    let idCount = 0

    for (let i = 0; i < num; i++) {
        grid = grid + cellSize + " ";
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;
    let yPosition = 0;
    for (let i = 0; i < row; i++) {

        let xPosition = 0;
        for (let j = 0; j < col; j++) {

            var x = document.createElement("div");
            x.style.width = cellSize;
            x.style.height = cellSize;
            x.style.border = "solid white 1px"
            x.style.backgroundImage = "url('./chess.jpg')"

            x.style.backgroundPosition = xPosition + "% " + yPosition + "%"
            x.id = "img" + idCount;
            x.draggable = "true";
            x.addEventListener("dragstart", () => drag(document.getElementById("img" + idCount).id, event))
            x.addEventListener("dragover", () => allowDrop(event))
            x.addEventListener("drop", () => drop(event))
                //x.addEventListener("click","move()")
            document.getElementById("imgContainer").appendChild(x);
            xPosition = xPosition + (100 / (num - 1));
            idCount++;
        }
        yPosition = yPosition + (100 / (num - 1));
    }
    dis();
}

function dis() {
    console.log(document.getElementById(img10))
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(dragE, ev) {
    console.log(dragE)
    ev.dataTransfer.setData("contain", ev.target.id);
    dragElement = dragE;
}


myFunction(5);