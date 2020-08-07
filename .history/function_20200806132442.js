let cells = [];
let cellsCopy = []
let dragElement;
let moves = 0;
let num;
let num2;

function display() {

    if (document.getElementById("number").value == "") {
        alert("enter a number");
        break;
    }
    num = parseInt(document.getElementById("number").value);
    num2 = num;
    document.getElementById("number").value = ""
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
                cells.push({ 'x': -1, 'y': -1 });
            } else {
                x.style.backgroundImage = "url('./chess.jpg')";
                cells.push({ 'x': xPosition, 'y': yPosition });
            }

            x.style.backgroundPosition = xPosition + "% " + yPosition + "%";
            x.innerText = xPosition + " " + yPosition
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
    cellsCopy = [...cells]
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
    dragElement = parseInt(event.target.id.substring(3));
}

function move(ev) {
    let num = num2
    dropElement = parseInt(event.target.id.substring(3));

    let flag = false;
    //handling right moves
    if (dragElement % num < (num - 1) && cells[dropElement].x == -1) {

        if (cells[dragElement + 1].x == -1) {

            document.getElementById("img" + dragElement).style.backgroundImage = "";
            document.getElementById("img" + dragElement).style.backgroundColor = "white";
            document.getElementById("img" + dropElement).style.backgroundImage = "url('./chess.jpg.')";
            document.getElementById("img" + dropElement).style.backgroundPosition = cells[dragElement].x + "% " + cells[dragElement].y + "% ";
            temp = cells[dragElement];
            cells[dragElement] = cells[dropElement];
            cells[dropElement] = temp;
            flag = true;
            moves++;
            checkWin();

            //;
        }
    }

    //handling down moves
    if (dragElement < ((num * num) - num) && cells[dropElement].x == -1) {
        if (cells[dragElement + num].x == -1) {
            document.getElementById("img" + dragElement).style.backgroundImage = "";
            document.getElementById("img" + dragElement).style.backgroundColor = "white";
            document.getElementById("img" + dropElement).style.backgroundImage = "url('./chess.jpg.')";
            document.getElementById("img" + dropElement).style.backgroundPosition = cells[dragElement].x + "% " + cells[dragElement].y + "% ";
            temp = cells[dragElement];
            cells[dragElement] = cells[dropElement];;
            cells[dropElement] = temp;
            flag = true;
            moves++;
            checkWin();
        }
    }

    //handling up moves
    if (dragElement < (num * num) && dragElement > num - 1 && cells[dropElement].x == -1) {

        if (cells[dragElement - num].x == -1) {
            document.getElementById("img" + dragElement).style.backgroundImage = "";
            document.getElementById("img" + dragElement).style.backgroundColor = "white";
            document.getElementById("img" + dropElement).style.backgroundImage = "url('./chess.jpg.')";
            document.getElementById("img" + dropElement).style.backgroundPosition = cells[dragElement].x + "% " + cells[dragElement].y + "% ";
            temp = cells[dragElement];
            cells[dragElement] = cells[dropElement];
            cells[dropElement] = temp;
            flag = true;
            moves++;
            checkWin();
        }
    }

    //handling left moves
    if (dragElement % num > 0 && cells[dropElement].x == -1) {
        if (cells[dragElement - 1].x == -1) {
            document.getElementById("img" + dragElement).style.backgroundImage = "";
            document.getElementById("img" + dragElement).style.backgroundColor = "white";
            document.getElementById("img" + dropElement).style.backgroundImage = "url('./chess.jpg.')";
            document.getElementById("img" + dropElement).style.backgroundPosition = cells[dragElement].x + "% " + cells[dragElement].y + "% ";
            temp = cells[dragElement];
            cells[dragElement] = cells[dropElement];
            cells[dropElement] = temp;
            flag = true;
            moves++;
            checkWin();
        }
    }
    if (flag == false) {
        alert("Can not be Moved");
    }
}

function checkWin() {
    var flag = true;

    //if array equals to starting array user wins
    for (let i = 0; i < cellsCopy.length; i++) {
        if (cells[i] != cellsCopy[i]) {
            flag = false;
            break;
        }
    }
    if (flag == true && moves > 0) {
        alert("win")
    }
}