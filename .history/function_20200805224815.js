function myFunction(num) {

    let cellSize = 450 / num + "px";
    let diff = 100 / num;
    let grid = "";
    let row = num;
    let col = num;
    let idCount = 0


    console.log(cellSize)

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
            x.style.backgroundImage = "url('./chess.jpg')"
            console.log(xPosition + "% " + yPosition + "%")
            x.style.backgroundPosition = xPosition + "% " + yPosition + "%"
            x.id = "img" + idCount;
            document.getElementById("imgContainer").appendChild(x);
            xPosition = xPosition + (100 / (num - 1));
        }
        yPosition = yPosition + (100 / (num - 1));
    }
}

myFunction(5);