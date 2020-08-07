function myFunction(num) {

    let cellSize = 450 / num + "px";
    let diff = 100 / num;
    let grid = "";
    let row = num;
    let col = num;
    let idCount = 0
    let h = 20;
    let w = 20;

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
            x.style.backgroundPosition = `${h}+% ${w}%`
            x.id = "img" + idCount;
            console.log(idCount)
            document.getElementById("imgContainer").appendChild(x);
        }
    }
}