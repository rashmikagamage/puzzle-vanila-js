function myFunction(num) {

    let cellSize = 450 / num + "px";
    let diff = 100 / num;
    let grid = "";
    let row = num;
    let col = num;
    let idCount = 0
    let xPosition = 0;
    let yPosition = 50;
    console.log(cellSize)

    for (let i = 0; i < num; i++) {
        grid = grid + cellSize + " ";
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < row; i++) {


        for (let j = 0; j < col; j++) {

            var x = document.createElement("div");
            x.style.width = cellSize;
            x.style.height = cellSize;
            x.style.backgroundImage = "url('./chess.jpg')"
            console.log(xPosition + "% " + yPosition + "%")
            x.style.backgroundPosition = xPosition + "% " + yPosition + "%"
            x.id = "img" + idCount;
            document.getElementById("imgContainer").appendChild(x);
            // yPosition = yPosition + (100/num);
        }
        // xPosition = xPosition + (100/num);
    }
}

myFunction(5);