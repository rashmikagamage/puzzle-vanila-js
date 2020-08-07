function myFunction(num) {
    let grid = "";
    for (let i = 0; i < num; i++) {
        grid = grid + "150px "
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < num * num; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./chess.jpg");
        x.style.position = "absolute"
            //x.style.width = '150px';
            //x.style.height = '150px';
        x.style.clip = "rect(50px 25px 75px 5px)"
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}