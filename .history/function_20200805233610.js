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
            x.setAttribute("id", "img" + idCount)
            x.draggable = "true";
            x.addEventListener("dragstart", () => drag(event))
            x.addEventListener("dragover", () => allowDrop(event))
            x.addEventListener("drop", () => move(event))
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
    console.log(document.getElementById("img10").id)
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("contain", ev.target.id);
    console.log(ev.target.id.substring(3))
    dragElement = parseInt(event.target.id.substring(3));
}

function move(dropElement, ev) {
    let flag = false;

    //handling left moves
    if (dragElement % 3 < 2 && cells[dropElement] == 0) {
        if (cells[dragElement + 1] == 0) {
            temp = cells[dragElement];
            cells[dragElement] = 0;
            cells[dropElement] = temp;
            flag = true;
            moves++;
            build();
        }
    }

    //handling down moves
    if (dragElement < 6 && cells[dropElement] == 0) {
        if (cells[dragElement + 3] == 0) {
            temp = cells[dragElement];
            cells[dragElement] = 0;
            cells[dropElement] = temp;
            flag = true;
            moves++;
            build();
        }
    }

    //handling up moves
    if (dragElement < 9 && dragElement > 2 && cells[dropElement] == 0) {
        if (cells[dragElement - 3] == 0) {
            temp = cells[dragElement];
            cells[dragElement] = 0;
            cells[dropElement] = temp;
            flag = true;
            moves++;
            build();
        }
    }

    //handling right moves
    if (dragElement % 3 > 0 && cells[dropElement] == 0) {
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

myFunction(5);