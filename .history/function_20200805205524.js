function myFunction(num) {

    let cellSize = 450 / num + "px"
    console.log(cellSize)
    let grid = "";
    for (let i = 0; i < num; i++) {
        grid = grid + cellSize
    }
    console.log(grid)

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < num * num; i++) {
        var x = document.createElement("div");
        x.style.width = cellSize;
        x.style.height = cellSize;

        x.style.backgroundImage = "url('./chess.jpg')"
            //  x.setAttribute("src", "./chess.jpg");
            // x.style.position = "absolute"

        x.style.backgroundPosition = "10% 10%"
        x.style.clip = "rect(50px 25px 75px 5px)"
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}