let cells = [];
let cellsCopy = []
let dragElement;
let moves = 0;
let num;

function myFunction(num) {

    cellsCopy = [...cells];
    let cellSize = 450 / num + "px";
    let diff = 100 / num;
    let grid = "";
    let row = num;
    let col = num;
    let idCount = 0;

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
            x.style.border = "solid white 1px";
            x.setAttribute("id", "img" + idCount);
            if (idCount == (num * num) - 1) {

                x.style.backgroundColor = "white";
                //x.setAttribute("id", "img" + 0);


            } else {

                x.style.backgroundImage = "url('./chess.jpg')";
                //x.setAttribute("id", "img" + idCount);

            }
            cells.push({ 'x': xPosition, 'y': yPosition });
            x.style.backgroundPosition = xPosition + "% " + yPosition + "%";
            x.draggable = "true";
            x.addEventListener("dragstart", () => drag(event))
            x.addEventListener("dragover", () => allowDrop(event))
            x.addEventListener("drop", () => move(event))
            document.getElementById("imgContainer").appendChild(x);
            xPosition = xPosition + (100 / (num - 1));
            idCount++;
        }
        yPosition = yPosition + (100 / (num - 1));
    }
}

function build() {
    var flag = true;
    for (let i = 0; i < 9; i++) {
        cell = "i" + i;
        document.getElementById(cell).src = './puzzle-imgs/' + cells[i] + '.jpg';
    }

    //if array equals to starting array user wins
    for (let i = 0; i < cellsCopy.length; i++) {
        if (cells[i] != cellsCopy[i]) {
            flag = false;
            break;
        }
    }
    if (flag == true && moves > 0) {
        won();
    }
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("contain", ev.target.id);
    console.log(ev.target.id.substring(3))
    dragElement = parseInt(event.target.id.substring(3));
}

function move(ev) {

    dropElement = parseInt(event.target.id.substring(3));
    console.log(dropElement)
    let flag = false;
    console.log((dragElement % num) < (num - 1))
        //handling right moves

    if (dragElement % num < (num - 1) && cells[dropElement].x == 100 && cells[dropElement].y == 100) {
        console.log("true")
        if (cells[dragElement + 1].x == 100 && cells[dragElement + 1].y == 100) {
            temp = cells[dragElement];
            cells[dragElement] = 0;
            cells[dropElement] = temp;
            flag = true;
            moves++;

            //;
        }
    }

    //handling down moves
    if (dragElement < ((num * num) - num) && cells[dropElement] == 0) {
        if (cells[dragElement + num] == 0) {
            temp = cells[dragElement];
            cells[dragElement] = 0;
            cells[dropElement] = temp;
            flag = true;
            moves++;
            build();
        }
    }

    //handling up moves
    if (dragElement < (num * num) && dragElement > num && cells[dropElement] == 0) {
        if (cells[dragElement - 3] == 0) {
            temp = cells[dragElement];
            cells[dragElement] = 0;
            cells[dropElement] = temp;
            flag = true;
            moves++;
            build();
        }
    }

    //handling left moves
    if (dragElement % num > 1 && cells[dropElement] == 0) {
        if (cells[dragElement - 1] == 0) {
            temp = cells[dragElement];
            cells[dragElement] = 0;
            cells[dropElement] = temp;
            moves++;
            flag = true;
            build();
        }
    }
    if (flag == false) {
        alert("Can not be Moved");
    }
}

function build() {
    var flag = true;
    for (let i = 0; i < 9; i++) {

    }

    //if array equals to starting array user wins
    for (let i = 0; i < cellsCopy.length; i++) {
        if (cells[i] != cellsCopy[i]) {
            flag = false;
            break;
        }
    }
    if (flag == true && moves > 0) {
        won();
    }
}
myFunction(3);