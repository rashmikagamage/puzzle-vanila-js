let cells = [];
let cellsCopy = []
let dragElement;
let moves = 0;
let num;
let num2;

function build() {

    document.getElementById("imgContainer").innerHTML = ""

    let cellSize = 450 / num + "px";
    let yPosition = 0;
    for (let i = 0; i < cells.length; i++) {
        var x = document.createElement("div");
        x.style.width = cellSize;
        x.style.height = cellSize;
        x.style.border = "solid white 1px";
        x.setAttribute("id", "img" + i);

        if (cells[i].flag == -1) {
            x.style.backgroundColor = "white";
        } else {
            x.style.backgroundImage = "url('./chess.jpg')";
            x.style.backgroundPosition = cells[i].xPosition + "% " + cells[i].yPosition + "%";
        }


        //x.innerText = xPosition + " " + yPosition
        x.draggable = "true";
        x.addEventListener("dragstart", () => drag(event))
        x.addEventListener("dragover", () => allowDrop(event))
        x.addEventListener("drop", () => move(event))
        document.getElementById("imgContainer").appendChild(x);



    }
    yPosition = yPosition + (100 / (num - 1));
}


function display() {

    if (document.getElementById("number").value == "") {
        alert("enter a number");
        return;
    }
    num = parseInt(document.getElementById("number").value);
    num2 = num;
    document.getElementById("number").value = ""
    cellsCopy = [...cells];
    let row = num;
    let col = num;
    let idCount = 0;
    let grid = "";
    let cellSize = 450 / num + "px";

    for (let i = 0; i < num; i++) {
        grid = grid + cellSize + " ";
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;
    let yPosition = 0;

    for (let i = 0; i < row; i++) {
        let xPosition = 0;
        for (let j = 0; j < col; j++) {
            if (idCount == (num * num) - 1) {
                //    cells.push({ 'x': -1, 'y': -1 });
                cells.push({ 'xPosition': xPosition, 'yPosition': yPosition, 'flag': -1 });
            } else {
                cells.push({ 'xPosition': xPosition, 'yPosition': yPosition });
            }
            xPosition = xPosition + (100 / (num - 1));
            idCount++;
        }
        yPosition = yPosition + (100 / (num - 1));
    }
    cellsCopy = [...cells]
    build();
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
    console.log(dropElement)
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
        document.getElementById("win").innerHTML = "You Won !";
    }
}

function shuffle() {
    //shuffle the array
    for (var i = cells.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cells[i];
        cells[i] = cells[j];
        cells[j] = temp;
    }
    //Calling build method 
    build();

}