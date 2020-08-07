function myFunction(num) {

    let cellSize = 450 / num + "px";
    let diff = 100 / num;
    let grid = "";

    for (let i = 0; i < num; i++) {
        grid = grid + cellSize + " ";
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;
    for (let i = 0; i < num; i++) {
        for (let j = 0; i < num; i++) {
            var x = document.createElement("div");
            x.style.width = cellSize;
            x.style.height = cellSize;

            x.style.backgroundImage = "url('./chess.jpg')"
            x.style.backgroundPosition = "% 0%"
            x.style.clip = "rect(50px 25px 75px 5px)"
            x.id = "img" + i;
            document.getElementById("imgContainer").appendChild(x);
        }
    }
}