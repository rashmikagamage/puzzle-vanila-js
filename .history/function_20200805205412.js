function myFunction(num) {

    let cellSize = 450 / num + "px"

    let grid = "";
    for (let i = 0; i < num; i++) {
        grid = grid + cellSize
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < num * num; i++) {
        var x = document.createElement("div");
        x.style.width = '450px';
        x.style.height = '450px';

        x.style.backgroundImage = "url('./chess.jpg')"
            //  x.setAttribute("src", "./chess.jpg");
            // x.style.position = "absolute"

        x.style.backgroundPosition = "10% 10%"
        x.style.clip = "rect(50px 25px 75px 5px)"
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}